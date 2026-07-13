# Vision Solutions Limited — Website

A full-stack marketing site for **Vision Solutions Limited**, a **technology & AI company**
serving the Horn of Africa (consulting & advisory, AI integration, software development,
and help-desk support). Brand-matched to the company profile with a clean, modern layout.

**Stack**

| Layer     | Tech                                                    |
| --------- | ------------------------------------------------------- |
| Frontend  | Next.js 14 (App Router) · React · Tailwind              |
| Backend   | Next.js Route Handlers (default) — or Express (optional)|
| Database  | **Neon** (serverless Postgres)                          |
| AI        | Anthropic API (the "Vision AI" chat widget)             |

```
vision-solutions-web/
├── client/     → Next.js app (frontend + built-in /api/contact + /api/chat)
└── server/     → Optional standalone Express + Neon API
```

The contact form and the AI assistant save enquiries to **Neon Postgres**. By default
everything runs through the **built-in Next.js API routes**, so the whole site deploys to
Vercel with no separate server.

---

## Prerequisites

- Node.js 18.18+ (Node 20 recommended)
- A **Neon** account (free): https://neon.tech
- (Optional) an Anthropic API key for the AI assistant: https://console.anthropic.com/

---

## Get a Neon database

1. Create a project at https://neon.tech (or add the **Neon** integration from the Vercel
   dashboard → Storage, which provisions it and sets `DATABASE_URL` automatically).
2. Copy the connection string. It looks like:
   `postgresql://user:pass@ep-xxxx.aws.neon.tech/vision_solutions?sslmode=require`

> No manual SQL needed — the app creates the `contacts` table automatically on first use.
> A `schema.sql` is included if you prefer to run it yourself.

## Quick start (recommended — one app)

Windows PowerShell: run each line separately (PowerShell doesn't support `&&`).

```powershell
cd client
npm install
Copy-Item .env.local.example .env.local
# open .env.local and paste DATABASE_URL (and ANTHROPIC_API_KEY for the AI widget)
npm run dev
```

Open **http://localhost:3000**. The contact form and Vision AI save to Neon.

> macOS / Linux: use `cp .env.local.example .env.local` instead of `Copy-Item`.

## Optional: separate Express server

```powershell
cd server
npm install
Copy-Item .env.example .env      # set DATABASE_URL
npm run dev                       # http://localhost:5000
```

Then set `NEXT_PUBLIC_API_URL=http://localhost:5000` in `client/.env.local` so the form
points at Express instead of the built-in route.

---

## Deploy to GitHub + Vercel

### 1) Push to GitHub

```powershell
cd vision-solutions-web
git init
git add .
git commit -m "Vision Solutions website"
git branch -M main
git remote add origin https://github.com/<your-username>/vision-solutions-web.git
git push -u origin main
```

`.env` files are git-ignored, so secrets are not pushed.

### 2) Deploy on Vercel

1. https://vercel.com → **New Project** → import your GitHub repo.
2. Set **Root Directory** to `client`.
3. **Storage → Create/Connect Neon** (this adds `DATABASE_URL` automatically), or add it
   manually under Environment Variables.
4. Add Environment Variables:
   - `DATABASE_URL` = your Neon connection string (auto-set by the Neon integration)
   - `ANTHROPIC_API_KEY` = your key (powers the Vision AI chat widget)
   - `ADMIN_PASSWORD` = a strong password to view enquiries at `/admin`
   - (optional) `CHAT_MODEL` to override the assistant's model
   - (leave `NEXT_PUBLIC_API_URL` unset — the built-in routes are used)
5. **Deploy.**

> Using the separate Express server? Host it on Render / Railway / Fly.io, set its
> `DATABASE_URL` and `CLIENT_ORIGIN`, then set `NEXT_PUBLIC_API_URL` in Vercel.

---

## Vision AI assistant (chat widget)

A floating **Vision AI** widget answers questions and can capture enquiries — it collects a
visitor's name, email and message, then saves them to Neon via a `submit_enquiry` tool.

- Backend: `client/app/api/chat/route.js` (calls Anthropic server-side; key stays secret).
- UI: `client/components/ChatWidget.jsx`. Edit the `SYSTEM` prompt in the route to change tone/knowledge.
- Without `ANTHROPIC_API_KEY`, the widget shows a friendly "not configured" message.

## Admin dashboard (`/admin`)

Visit **`/admin`** to view every enquiry saved in Neon (contact form + AI assistant).

- Protected by a password (`ADMIN_PASSWORD` env). The page is `noindex`.
- Backend: `client/app/api/admin/contacts/route.js` (checks the password server-side).
- Features: search/filter, refresh, mailto links, and the matching service tag.
- This is lightweight protection — for production, consider a real auth provider.

## Editing content

- **Text, services, partners, projects and team** live in `client/lib/data.js`.
- **Partner logos** are in `client/public/logos/`. **Team avatars** in `client/public/team/`.
- **Logo & brand assets** in `client/public/brand/`; favicon `client/app/icon.svg`.
- **Brand tokens**: colors in `client/tailwind.config.js`, type/motion in `client/app/globals.css`.
- `preview.html` and `logo-showcase.html` are single-file, no-build snapshots.
