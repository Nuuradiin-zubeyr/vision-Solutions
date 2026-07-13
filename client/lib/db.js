import { neon } from "@neondatabase/serverless";

// Vercel's Neon/Postgres integration provides DATABASE_URL automatically.
const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;

export const sql = url ? neon(url) : null;

let ready = false;
// Create the contacts table on first use (idempotent, runs once per cold start).
export async function ensureSchema() {
  if (ready || !sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name       TEXT NOT NULL,
      email      TEXT NOT NULL,
      sector     TEXT,
      message    TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  ready = true;
}
