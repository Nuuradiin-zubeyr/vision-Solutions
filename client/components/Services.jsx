import { services } from "@/lib/data";

const gradients = [
  "from-navy-950 via-royal-700 to-teal",
  "from-royal-700 via-teal to-navy-900",
  "from-teal to-navy-950",
  "from-navy-900 to-royal-500",
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
            <div className="absolute bottom-5 left-6 display font-semibold text-white/85">
              {s.caption}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
