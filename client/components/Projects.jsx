import { projects } from "@/lib/data";

/* Lucide-style icons (MIT) in a glass "app chip" — consistent, professional banners */
const chip = (icon, accent) => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 150" fill="none" aria-hidden="true">
    <circle cx="330" cy="75" r="62" stroke="#ffffff" strokeOpacity=".18" strokeWidth="1.4" />
    <circle cx="330" cy="75" r="86" stroke="#ffffff" strokeOpacity=".09" strokeWidth="1.2" />
    <rect x="290" y="35" width="80" height="80" rx="20" fill="rgba(255,255,255,.13)" stroke="rgba(255,255,255,.3)" strokeWidth="1.4" />
    <g transform="translate(299 44) scale(2.58)" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {icon}
    </g>
    {accent}
  </svg>
);

const bannerArt = {
  cart: chip(
    <>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" stroke="#8DC63F" />
    </>,
    null
  ),
  health: chip(
    <>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" stroke="#8DC63F" />
    </>,
    null
  ),
  edu: chip(
    <>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" stroke="#8DC63F" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </>,
    null
  ),
  truck: chip(
    <>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" stroke="#8DC63F" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </>,
    null
  ),
};


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
      <div className={`h-36 bg-gradient-to-br ${p.grad} relative p-6 flex items-end overflow-hidden`}>
        {p.kind ? bannerArt[p.kind] : null}
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
