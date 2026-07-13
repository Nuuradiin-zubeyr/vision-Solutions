-- Vision Solutions — enquiries table (Neon / Postgres)
CREATE TABLE IF NOT EXISTS contacts (
  id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  sector     TEXT,
  message    TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
