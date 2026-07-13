import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;

export const sql = url ? neon(url) : null;

export async function initDB() {
  if (!sql) throw new Error("DATABASE_URL is not set. Add it to server/.env");
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
  console.log("✓ Neon Postgres ready (contacts table ensured)");
}
