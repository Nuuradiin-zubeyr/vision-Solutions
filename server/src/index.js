import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { initDB } from "./db.js";
import contactRoutes from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

app.use(express.json({ limit: "100kb" }));
app.use(cors({ origin: CLIENT_ORIGIN }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 30 });
app.use("/api/contact", limiter);

app.get("/api/health", (_req, res) => res.json({ ok: true, service: "vision-solutions-api" }));
app.use("/api/contact", contactRoutes);

async function start() {
  try {
    await initDB();
    app.listen(PORT, () => console.log(`✓ API running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
}

start();
