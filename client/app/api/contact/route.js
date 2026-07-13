import { NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export const runtime = "nodejs";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// POST /api/contact — save an enquiry
export async function POST(req) {
  if (!sql) {
    return NextResponse.json({ error: "Database is not configured. Set DATABASE_URL." }, { status: 503 });
  }
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const { name, email, sector, message } = body ?? {};
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  try {
    await ensureSchema();
    const rows = await sql`
      INSERT INTO contacts (name, email, sector, message)
      VALUES (${name}, ${email}, ${sector ?? null}, ${message})
      RETURNING id
    `;
    return NextResponse.json({ ok: true, id: rows[0].id }, { status: 201 });
  } catch (err) {
    console.error("Contact insert failed:", err.message);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

// GET /api/contact — list enquiries (protect behind auth before going live)
export async function GET() {
  if (!sql) return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  try {
    await ensureSchema();
    const items = await sql`SELECT id, name, email, sector, message, created_at FROM contacts ORDER BY created_at DESC LIMIT 100`;
    return NextResponse.json({ ok: true, count: items.length, items });
  } catch {
    return NextResponse.json({ error: "Could not load enquiries." }, { status: 500 });
  }
}
