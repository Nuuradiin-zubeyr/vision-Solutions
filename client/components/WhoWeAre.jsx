const stats = [
  {
    big: <>4<span className="text-lime">+</span></>,
    label: "Years of operational excellence",
    cls: "text-3xl md:text-4xl",
  },
  { big: "24/7", label: "Support for critical systems", cls: "text-3xl md:text-4xl" },
  {
    big: <>End<span className="text-lime">·</span>to<span className="text-lime">·</span>end</>,
    label: "From strategy to deployment",
    cls: "text-[1.45rem] sm:text-3xl md:text-4xl whitespace-nowrap",
  },
  { big: <>AI<span className="text-lime">.</span></>, label: "Integrated into your business", cls: "text-3xl md:text-4xl" },
];

export default function WhoWeAre() {
  return (
    <section id="who" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28">
      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-5 reveal">
          <p className="eyebrow text-teal mb-4">Who we are</p>
          <h2 className="display text-3xl md:text-[2.6rem] font-bold leading-tight text-ink">
            A pioneer in technology &amp; AI for the Horn of Africa.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-slate2 text-[16.5px] leading-relaxed reveal">
          <p>
            Founded with a vision to drive progress and digital transformation in Somalia,
            Vision Solutions Ltd has been a pioneer in delivering technology excellence. Our
            team comprises diverse engineers, consultants and specialists who bring a wealth
            of experience and expertise, ensuring high-quality solutions tailored to your needs.
          </p>
          <p>
            With over four years of operational excellence, we deliver high-quality technology
            services — IT consulting, AI integration, software development and ongoing support —
            helping businesses integrate artificial intelligence (AI) into their operations to
            enhance innovation, efficiency and competitiveness.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 bg-black/5 rounded-2xl overflow-hidden border border-black/5">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 md:p-7 reveal">
            <div className={`display font-bold text-ink ${s.cls}`}>{s.big}</div>
            <p className="mt-2 text-sm text-slate2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
