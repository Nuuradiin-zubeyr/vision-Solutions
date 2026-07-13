"use client";

import { useEffect, useRef, useState } from "react";

const GREETING =
  "Hi 👋 I'm Vision AI. Ask about our services or projects — or tell me you'd like to start a project and I'll take your details.";

const SUGGESTIONS = [
  "What services do you offer?",
  "I'd like to start a project",
  "How can I contact you?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // {role, content, sent?}
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput("");

    const next = [...messages.map(({ role, content }) => ({ role, content })), { role: "user", content }];
    setMessages((m) => [...m, { role: "user", content }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Request failed");

      setMessages((m) => [...m, { role: "assistant", content: data.reply || "…", sent: !!data.submitted }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `${err.message || "Something went wrong."} You can also email hello@vsolcorp.com.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const thread = [{ role: "assistant", content: GREETING }, ...messages];
  const showSuggestions = messages.length === 0 && !loading;

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-navy-950 text-white grid place-items-center shadow-xl hover:scale-105 active:scale-95 transition ring-1 ring-white/10"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8DC63F" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 5h16v10H9l-4 3v-3H4z" stroke="#1E86C4" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M12 8.2l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9L9.2 11l1.9-.9z" fill="#8DC63F" />
          </svg>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Vision AI assistant"
          className="fixed bottom-24 right-6 z-[60] w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[72vh] rounded-2xl bg-white shadow-2xl border border-black/10 flex flex-col overflow-hidden"
        >
          <div className="hero-glow text-white px-5 py-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-white/10 grid place-items-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 5h16v10H9l-4 3v-3H4z" stroke="#7FC7EC" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 8.2l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9L9.2 11l1.9-.9z" fill="#8DC63F" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="display font-bold text-[15px]">Vision AI</div>
              <div className="text-[11px] text-white/60">Assistant · replies instantly</div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-paper">
            {thread.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[82%] text-[14px] leading-relaxed px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-navy-950 text-white rounded-br-sm"
                      : "bg-white text-ink border border-black/5 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
                {m.sent && (
                  <span className="mt-1 text-[11px] font-medium text-lime flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                    Enquiry sent to the team
                  </span>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-black/5 rounded-2xl rounded-bl-sm px-3.5 py-3">
                  <TypingDots />
                </div>
              </div>
            )}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[12.5px] px-3 py-1.5 rounded-full border border-teal/30 text-teal hover:bg-teal/10 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-black/10 p-3 flex items-center gap-2 bg-white"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Vision AI…"
              className="flex-1 text-sm px-3.5 py-2.5 rounded-full bg-paper border border-black/10 focus:border-teal outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-full bg-lime text-navy-950 grid place-items-center hover:bg-lime-bright transition disabled:opacity-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12l16-8-6 16-3-6-7-2z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-slate2/60 animate-bounce" style={{ animationDelay: "0ms" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-slate2/60 animate-bounce" style={{ animationDelay: "150ms" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-slate2/60 animate-bounce" style={{ animationDelay: "300ms" }} />
    </span>
  );
}
