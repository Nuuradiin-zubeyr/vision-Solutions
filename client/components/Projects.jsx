import { projects } from "@/lib/data";

function Stat({ value, label }) {
  return (
    <div>
      <div className="display text-xl font-bold text-ink">{value}</div>
      <div className="text-[11px] text-slate2">{label}</div>
    </div>
  );
}

function FeaturedCard({ p }) {
  return (
    <article className="sm:col-span-2 card-lift bg-white rounded-2xl border border-black/5 overflow-hidden hover:shadow-xl reveal grid md:grid-cols-5">
      <div className={`md:col-span-2 bg-gradient-to-br ${p.grad} p-8 relative flex flex-col justify-between min-h-[220px]`}>
        <span className="self-start text-[11px] font-semibold px-3 py-1 rounded-full bg-lime text-navy-950">
          {p.status}
        </span>
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 220" fill="none" aria-hidden="true">
          <g stroke="#8DC63F" strokeWidth="1.4" fill="none">
            <path d="M120 30 150 45 145 80 175 70 195 110 180 150 205 165 190 200 150 185 130 150 110 150 125 110 110 70Z" />
          </g>
          <g fill="#8DC63F">
            <circle cx="150" cy="45" r="3" /><circle cx="195" cy="110" r="3" /><circle cx="150" cy="185" r="3" />
          </g>
        </svg>
        <div className="relative text-white/90 display font-bold text-xl">{p.client}</div>
      </div>
      <div className="md:col-span-3 p-8">
        <p className="eyebrow text-teal text-[.62rem] mb-2">{p.tag}</p>
        <h3 className="display text-2xl font-bold text-ink">{p.title}</h3>
        <p className="mt-3 text-slate2 leading-relaxed">{p.body}</p>
        <div className="mt-5 flex gap-10">
          {p.stats.map(([value, label]) => (
            <Stat key={label} value={value} label={label} />
          ))}
        </div>
        {p.link ? (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-6 text-sm font-semibold text-royal-500 hover:text-teal transition"
          >
            View live dashboard →
          </a>
        ) : null}
      </div>
    </article>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="card-lift group bg-white rounded-2xl border border-black/5 overflow-hidden hover:shadow-xl reveal">
      <div className={`h-36 bg-gradient-to-br ${p.grad} relative p-6 flex items-end`}>
        <span
          className={`absolute top-4 right-4 text-[11px] font-semibold px-3 py-1 rounded-full ${
            p.status === "Ongoing" || p.status === "Live"
              ? "bg-lime text-navy-950"
              : "bg-white/15 text-white border border-white/25"
          }`}
        >
          {p.status}
        </span>
        <div className="text-white/85 display font-semibold text-sm">{p.client}</div>
      </div>
      <div className="p-6">
        <p className="eyebrow text-teal text-[.62rem] mb-2">{p.tag}</p>
        <h3 className="display text-lg font-bold text-ink">{p.title}</h3>
        <p className="mt-2 text-slate2 text-[14.5px] leading-relaxed">{p.body}</p>
        <div className="mt-5 pt-4 border-t border-black/5 flex gap-10">
          {p.stats.map(([value, label]) => (
            <Stat key={label} value={value} label={label} />
          ))}
        </div>
        {p.link ? (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-4 text-sm font-semibold text-royal-500 hover:text-teal transition"
          >
            View project →
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-paper border-y border-black/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 reveal">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal mb-4">Ongoing projects</p>
            <h2 className="display text-3xl md:text-[2.6rem] font-bold leading-tight text-ink">
              What we&apos;re building right now.
            </h2>
            <p className="mt-4 text-slate2 leading-relaxed">
              Live engagements delivering real-world impact across the Horn of Africa.
            </p>
          </div>
          <a href="#contact" className="text-sm font-semibold text-royal-500 hover:text-teal transition">
            Start a project →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {featured ? <FeaturedCard p={featured} /> : null}
          {rest.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
