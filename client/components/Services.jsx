import { services } from "@/lib/data";

const gradients = [
  "from-navy-950 via-royal-700 to-teal",
  "from-royal-700 via-teal to-navy-900",
  "from-teal to-navy-950",
  "from-navy-900 to-royal-500",
];

/* Rich SVG illustrations per service (index-matched to `services`) */
const art = [
  /* 0 — AI Integration: neural network */
  <svg key="ai" className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" aria-hidden="true">
    <g stroke="#7FC7EC" strokeWidth="1.2" opacity=".5">
      <path d="M70 60 L170 90 M70 150 L170 90 M70 150 L170 170 M70 240 L170 170 M70 240 L170 250 M170 90 L280 130 M170 170 L280 130 M170 170 L280 200 M170 250 L280 200 M280 130 L350 165 M280 200 L350 165" />
    </g>
    <g fill="#8DC63F">
      <circle cx="70" cy="60" r="7" /><circle cx="70" cy="150" r="7" /><circle cx="70" cy="240" r="7" />
    </g>
    <g fill="#7FC7EC">
      <circle cx="170" cy="90" r="8" /><circle cx="170" cy="170" r="8" /><circle cx="170" cy="250" r="8" />
      <circle cx="280" cy="130" r="8" /><circle cx="280" cy="200" r="8" />
    </g>
    <circle cx="350" cy="165" r="10" fill="#8DC63F" />
    <path d="M345 165l3.5 3.5 6-7" stroke="#05082A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  /* 1 — Consultation: strategy chart */
  <svg key="consult" className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" aria-hidden="true">
    <g stroke="#ffffff" strokeWidth="1" opacity=".18">
      <path d="M60 60v190M60 250h300" />
      <path d="M60 110h300M60 160h300M60 205h300" strokeDasharray="3 6" />
    </g>
    <path d="M60 220 L130 190 L200 205 L270 140 L340 95" stroke="#8DC63F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <g fill="#fff"><circle cx="130" cy="190" r="5" /><circle cx="200" cy="205" r="5" /><circle cx="270" cy="140" r="5" /></g>
    <circle cx="340" cy="95" r="7" fill="#8DC63F" />
    <g stroke="#7FC7EC" strokeWidth="2" opacity=".85">
      <path d="M300 70l14 0M307 63l0 14" strokeLinecap="round" />
    </g>
  </svg>,
  /* 2 — Software Development: code editor */
  <svg key="dev" className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" aria-hidden="true">
    <rect x="60" y="50" width="280" height="190" rx="10" stroke="#7FC7EC" strokeWidth="1.6" opacity=".7" />
    <path d="M60 82h280" stroke="#7FC7EC" strokeWidth="1.2" opacity=".5" />
    <g fill="#8DC63F"><circle cx="80" cy="66" r="4" /></g>
    <g fill="#7FC7EC" opacity=".8"><circle cx="96" cy="66" r="4" /><circle cx="112" cy="66" r="4" /></g>
    <g strokeLinecap="round">
      <path d="M85 110h70" stroke="#8DC63F" strokeWidth="6" />
      <path d="M85 132h130" stroke="#ffffff" strokeWidth="6" opacity=".55" />
      <path d="M105 154h95" stroke="#7FC7EC" strokeWidth="6" />
      <path d="M105 176h60" stroke="#ffffff" strokeWidth="6" opacity=".4" />
      <path d="M85 198h115" stroke="#8DC63F" strokeWidth="6" opacity=".8" />
    </g>
    <path d="M300 190l18 14-18 14" stroke="#8DC63F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  /* 3 — Support: shield + pulse */
  <svg key="support" className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" aria-hidden="true">
    <path d="M200 45l85 32v58c0 55-37 92-85 110-48-18-85-55-85-110V77z" stroke="#7FC7EC" strokeWidth="2.2" opacity=".85" strokeLinejoin="round" />
    <path d="M130 155h35l12-28 20 56 14-28h59" stroke="#8DC63F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <g stroke="#ffffff" opacity=".25" strokeWidth="1.2">
      <circle cx="200" cy="150" r="118" strokeDasharray="4 8" />
    </g>
  </svg>,
];

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28 space-y-20">
      {services.map((s, i) => (
        <div key={s.eyebrow} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal">
          <div className={s.reverse ? "md:order-2" : ""}>
            <p className="eyebrow text-teal mb-3">{s.eyebrow}</p>
            <h3 className="display text-2xl md:text-3xl font-bold text-ink leading-tight">{s.title}</h3>
            <p className="mt-4 text-slate2 leading-relaxed">{s.body}</p>
            <ul className="mt-6 space-y-2.5 text-[15px] text-ink/80">
              {s.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="text-lime">▸</span> {pt}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${s.reverse ? "md:order-1" : ""} aspect-[4/3] rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} relative overflow-hidden`}
          >
            {art[i % art.length]}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute bottom-5 left-6 display font-semibold text-white/90">
              {s.caption}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
