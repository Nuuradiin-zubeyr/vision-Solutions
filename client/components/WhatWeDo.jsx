import { pillars } from "@/lib/data";

const icons = {
  "01": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E86C4" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M4 5h16v11H9l-4 3v-3H4z" /><path d="M8 9h8M8 12h5" />
    </svg>
  ),
  "02": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="#8DC63F" strokeWidth="1.7" />
      <path d="M4 9h-2M4 15h-2M22 9h-2M22 15h-2M9 2v2M15 2v2M9 22v-2M15 22v-2" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 8l1 2.4 2.4 1-2.4 1L12 15l-1-2.6-2.4-1 2.4-1z" fill="#8DC63F" />
    </svg>
  ),
  "03": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8DC63F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 8 5 12l4 4" /><path d="M15 8l4 4-4 4" />
    </svg>
  ),
  "04": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E86C4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
      <rect x="3" y="13" width="3.4" height="6" rx="1.5" /><rect x="17.6" y="13" width="3.4" height="6" rx="1.5" />
      <path d="M19 19a4 4 0 0 1-4 3h-2" />
    </svg>
  ),
};

export default function WhatWeDo() {
  return (
    <section id="work" className="bg-paper border-y border-black/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28">
        <div className="max-w-2xl reveal">
          <p className="eyebrow text-teal mb-4">What we do</p>
          <h2 className="display text-3xl md:text-[2.6rem] font-bold leading-tight text-ink">
            Technology & AI, end to end.
          </h2>
          <p className="mt-4 text-slate2 leading-relaxed">
            With a deep commitment to excellence, we provide tailored solutions that address
            the unique challenges of the Horn of Africa — designed to empower businesses,
            improve communities and create a more sustainable future for all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="card-lift group bg-white rounded-2xl p-8 border border-black/5 hover:shadow-xl hover:border-lime/40 reveal"
            >
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-navy-950 text-white grid place-items-center">
                  {icons[p.n]}
                </span>
                <span className="display text-sm font-semibold text-black/20 group-hover:text-lime transition">
                  {p.n}
                </span>
              </div>
              <h3 className="display text-xl font-bold text-ink mt-6">{p.title}</h3>
              <p className="mt-3 text-slate2 text-[15px] leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
