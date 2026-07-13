"use client";

import { useState } from "react";

// Uses the built-in Next.js route (/api/contact) by default — ideal for Vercel.
// Set NEXT_PUBLIC_API_URL to point at the separate Express server instead.
const API = process.env.NEXT_PUBLIC_API_URL || "";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.email || !data.message) {
      setStatus({ state: "error", msg: "Please fill in the required fields." });
      return;
    }

    setStatus({ state: "loading", msg: "" });
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Request failed");
      form.reset();
      setStatus({ state: "success", msg: "Thanks — we've received your message and will be in touch." });
    } catch (err) {
      setStatus({ state: "error", msg: err.message || "Something went wrong. Please try again." });
    }
  }

  const noteColor =
    status.state === "success" ? "text-lime" : status.state === "error" ? "text-red-300" : "text-white/50";

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal bg-white/[.05] border border-white/10 rounded-2xl p-7 md:p-8 space-y-4"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs text-white/50">Full name</span>
          <input
            name="name"
            required
            placeholder="Your name"
            className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-lime outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs text-white/50">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-lime outline-none"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-xs text-white/50">Service of interest</span>
        <select
          name="sector"
          defaultValue="AI Integration"
          className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-lime outline-none"
        >
          <option className="text-navy-950">Consultation &amp; Advisory Services</option>
          <option className="text-navy-950">AI Integration</option>
          <option className="text-navy-950">Software Development</option>
          <option className="text-navy-950">Help-Desk Support &amp; Maintenance</option>
        </select>
      </label>
      <label className="block">
        <span className="text-xs text-white/50">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="How can we help?"
          className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-lime outline-none resize-none"
        />
      </label>
      <button
        type="submit"
        disabled={status.state === "loading"}
        className="w-full py-3 rounded-full bg-lime text-navy-950 font-semibold text-sm hover:bg-lime-bright transition disabled:opacity-60"
      >
        {status.state === "loading" ? "Sending…" : "Send message"}
      </button>
      {status.msg ? <p className={`text-xs text-center ${noteColor}`}>{status.msg}</p> : null}
    </form>
  );
}
