import { Router } from "express";
import { sql } from "../db.js";

const router = Router();
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// POST /api/contact — submit an enquiry
router.post("/", async (req, res) => {
  const { name, email, sector, message } = req.body ?? {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }
  try {
    const rows = await sql`
      INSERT INTO contacts (name, email, sector, message)
      VALUES (${name}, ${email}, ${sector ?? null}, ${message})
      RETURNING id
    `;
    return res.status(201).json({ ok: true, id: rows[0].id });
  } catch (err) {
    console.error("Contact insert failed:", err.message);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

// GET /api/contact — list enquiries (protect behind auth in production)
router.get("/", async (_req, res) => {
  try {
    const items = await sql`SELECT id, name, email, sector, message, created_at FROM contacts ORDER BY created_at DESC LIMIT 100`;
    return res.json({ ok: true, count: items.length, items });
  } catch {
    return res.status(500).json({ error: "Could not load enquiries." });
  }
});

export default router;
