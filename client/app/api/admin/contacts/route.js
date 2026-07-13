import { NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(req) {
  const key = req.headers.get("x-admin-key");
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Admin isn't configured. Set ADMIN_PASSWORD." }, { status: 503 });
  }
  if (key !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  if (!sql) {
    return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  }
  try {
    await ensureSchema();
    const items = await sql`
      SELECT id, name, email, sector, message, created_at
      FROM contacts
      ORDER BY created_at DESC
      LIMIT 500
    `;
    return NextResponse.json({ ok: true, count: items.length, items });
  } catch (err) {
    console.error("Admin load failed:", err.message);
    return NextResponse.json({ error: "Could not load enquiries." }, { status: 500 });
  }
}
