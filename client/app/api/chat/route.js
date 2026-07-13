import Anthropic from "@anthropic-ai/sdk";
import { sql, ensureSchema } from "@/lib/db";

export const runtime = "nodejs";

const MODEL = process.env.CHAT_MODEL || "claude-haiku-4-5-20251001";
const isEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const SYSTEM = `You are "Vision AI", the assistant on the Vision Solutions Limited website. Be warm, concise and professional.

About Vision Solutions Limited:
- A technology and AI company serving Somalia and the Horn of Africa, with 4+ years of operational excellence.
- Services:
  1. Consultation & Advisory Services — expert IT consulting to optimize technology, strengthen cybersecurity, enhance data management and adopt modern digital solutions.
  2. AI Integration — seamlessly integrate Artificial Intelligence into existing systems to automate workflows, enhance decision-making, improve customer experiences and accelerate digital transformation.
  3. Software Development — web & mobile apps, SaaS platforms, AI-powered systems and custom enterprise solutions, across the full deployment lifecycle.
  4. Help-Desk Support & Maintenance — proactive monitoring, cybersecurity, cloud hosting, data backup and system updates; keeping IT infrastructure secure, scalable and compliant.
- Ongoing projects include Odoros (Somalia Drought Monitoring Dashboard). Partners include Hormuud Salaam Foundation, Save the Children, BlueXpress Technologies, Asal Institute of Agriculture, Titanium, Tropikal, Ecozen and Dekedda Muqdisho.
- Contact: hello@vsolcorp.com · +252 61 5942403 · Via Taleex, KM-4, Mogadishu, SO.

How to help:
- Answer questions about services, capabilities and projects. Keep replies short (2-4 sentences). Reply in the user's language (English or Somali). Never invent pricing, timelines or commitments.

Lead capture (important):
- When a visitor wants to get in touch, request a quote, or start a project, collect their name, a valid email, and a short message describing their need. Ask for anything missing — one item at a time — then call the submit_enquiry tool to send it to the team.
- Pick the closest "sector" for the enquiry from the service list.
- Only claim an enquiry was sent if the tool call succeeds. After success, confirm warmly and mention hello@vsolcorp.com as a backup.
- You can also help a visitor draft a short enquiry email if they ask.`;

const tools = [
  {
    name: "submit_enquiry",
    description:
      "Save a website visitor's enquiry to the Vision Solutions team. Only call once you have the visitor's name, a valid email, and a short message. Ask for any missing detail before calling.",
    input_schema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Visitor's full name" },
        email: { type: "string", description: "Visitor's email address" },
        sector: {
          type: "string",
          enum: [
            "Consultation & Advisory Services",
            "AI Integration",
            "Software Development",
            "Help-Desk Support & Maintenance",
          ],
          description: "The service that best matches the enquiry",
        },
        message: { type: "string", description: "Short summary of what the visitor needs" },
      },
      required: ["name", "email", "message"],
    },
  },
];

async function saveEnquiry({ name, email, sector, message }) {
  if (!name || !message || !isEmail(email)) {
    return { ok: false, error: "Missing or invalid name/email/message." };
  }
  if (!sql) return { ok: false, error: "Database is not configured." };
  try {
    await ensureSchema();
    const rows = await sql`
      INSERT INTO contacts (name, email, sector, message)
      VALUES (${name}, ${email}, ${sector ?? null}, ${message})
      RETURNING id
    `;
    return { ok: true, id: String(rows[0].id) };
  } catch (e) {
    console.error("saveEnquiry failed:", e?.message);
    return { ok: false, error: "Could not save the enquiry right now." };
  }
}

export async function POST(req) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "The AI assistant isn't configured yet. Set ANTHROPIC_API_KEY." },
      { status: 503 }
    );
  }

  let messages;
  try {
    ({ messages } = await req.json());
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const convo = (messages || [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content }));

  if (convo.length === 0 || convo[0].role !== "user") {
    return Response.json({ error: "Conversation must start with a user message." }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });
  let submitted = false;

  try {
    for (let hop = 0; hop < 4; hop++) {
      const resp = await client.messages.create({
        model: MODEL,
        max_tokens: 700,
        system: SYSTEM,
        tools,
        messages: convo,
      });

      const toolUse = resp.content.find((c) => c.type === "tool_use");
      if (resp.stop_reason === "tool_use" && toolUse) {
        const result = await saveEnquiry(toolUse.input || {});
        if (result.ok) submitted = true;
        convo.push({ role: "assistant", content: resp.content });
        convo.push({
          role: "user",
          content: [
            { type: "tool_result", tool_use_id: toolUse.id, content: JSON.stringify(result) },
          ],
        });
        continue;
      }

      const text = resp.content
        .filter((c) => c.type === "text")
        .map((c) => c.text)
        .join("")
        .trim();
      return Response.json({ reply: text || "…", submitted });
    }
    return Response.json({ reply: "Let's continue — how else can I help?", submitted });
  } catch (err) {
    console.error("Chat error:", err?.message);
    return Response.json(
      { error: "I hit an error. Please try again or email hello@vsolcorp.com." },
      { status: 500 }
    );
  }
}
