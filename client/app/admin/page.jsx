"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? sessionStorage.getItem("vs_admin_key") : null;
    if (saved) {
      setKey(saved);
      load(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load(k) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/contacts", { headers: { "x-admin-key": k } });
      if (res.status === 401) {
        setError("Wrong password.");
        setAuthed(false);
        sessionStorage.removeItem("vs_admin_key");
        return;
      }
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.error || "Failed to load.");
      }
      const data = await res.json();
      setItems(data.items || []);
      setAuthed(true);
      sessionStorage.setItem("vs_admin_key", k);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    sessionStorage.removeItem("vs_admin_key");
    setAuthed(false);
    setKey("");
    setItems([]);
    setQ("");
  }

  const filtered = items.filter((it) =>
    `${it.name} ${it.email} ${it.sector ?? ""} ${it.message}`.toLowerCase().includes(q.toLowerCase())
  );

  const fmt = (d) => {
    try {
      return new Date(d).toLocaleString(undefined, {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
      });
    } catch {
      return d;
    }
  };

  // ---------- login ----------
  if (!authed) {
    return (
      <main className="min-h-screen hero-glow text-white grid place-items-center px-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (key.trim()) load(key.trim());
          }}
          className="w-full max-w-sm bg-white/[.05] border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Logo className="w-9 h-9" uid="admin" />
            <span className="wordmark text-sm">Vision · Admin</span>
          </div>
          <h1 className="display text-2xl font-bold mb-1">Enquiries</h1>
          <p className="text-white/60 text-sm mb-6">Enter the admin password to continue.</p>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin password"
            className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-lime outline-none"
            autoFocus
          />
          {error && <p className="text-red-300 text-xs mt-3">{error}</p>}
          <button
            type="submit"
            disabled={loading || !key.trim()}
            className="mt-5 w-full py-3 rounded-full bg-lime text-navy-950 font-semibold text-sm hover:bg-lime-bright transition disabled:opacity-60"
          >
            {loading ? "Checking…" : "Sign in"}
          </button>
        </form>
      </main>
    );
  }

  // ---------- dashboard ----------
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="bg-navy-950 text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" uid="admin-h" />
            <div className="leading-tight">
              <div className="wordmark text-[13px]">Vision · Admin</div>
              <div className="text-[11px] text-white/50">Enquiries dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => load(key)}
              className="text-[13px] font-semibold px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              {loading ? "Refreshing…" : "Refresh"}
            </button>
            <button
              onClick={logout}
              className="text-[13px] font-semibold px-4 py-2 rounded-full bg-lime text-navy-950 hover:bg-lime-bright transition"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-wrap items-center gap-4 justify-between mb-6">
          <div>
            <h1 className="display text-2xl font-bold">Enquiries</h1>
            <p className="text-sm text-slate2 mt-1">
              {filtered.length} {filtered.length === 1 ? "record" : "records"}
              {q && ` (filtered from ${items.length})`}
            </p>
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, email, message…"
            className="w-full sm:w-72 text-sm px-3.5 py-2.5 rounded-lg bg-white border border-black/10 focus:border-teal outline-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {filtered.length === 0 ? (
          <div className="bg-white border border-black/5 rounded-2xl p-12 text-center text-slate2">
            {loading ? "Loading…" : "No enquiries yet."}
          </div>
        ) : (
          <div className="bg-white border border-black/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate2 border-b border-black/5 bg-black/[.02]">
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Date</th>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Email</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Service</th>
                    <th className="px-4 py-3 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((it) => (
                    <tr key={it.id} className="border-b border-black/5 last:border-0 align-top hover:bg-paper/60">
                      <td className="px-4 py-3 whitespace-nowrap text-slate2">{fmt(it.created_at)}</td>
                      <td className="px-4 py-3 font-medium">{it.name}</td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${it.email}`} className="text-royal-500 hover:text-teal transition break-all">
                          {it.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {it.sector ? (
                          <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-teal/10 text-teal">
                            {it.sector}
                          </span>
                        ) : (
                          <span className="text-slate2">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 max-w-sm whitespace-pre-wrap break-words">{it.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
