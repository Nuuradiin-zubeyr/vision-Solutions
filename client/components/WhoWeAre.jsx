const stats = [
  { big: <>4<span className="text-lime">+</span></>, label: "Years of operational excellence" },
  { big: "24/7", label: "Support for critical systems" },
  { big: <>End<span className="text-lime">·</span>to<span className="text-lime">·</span>end</>, label: "From strategy to deployment" },
  { big: <>AI<span className="text-lime">.</span></>, label: "Integrated into your business" },
];

export default function WhoWeAre() {
  return (
    <section id="who" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28">
      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-5 reveal">
          <p className="eyebrow text-teal mb-4">Who we are</p>
          <h2 className="display text-3xl md:text-[2.6rem] font-bold leading-tight text-ink">
            A pioneer delivering excellence across major sectors.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-slate2 text-[16.5px] leading-relaxed reveal">
          <p>
            Founded with a vision to drive progress and sustainability in Somalia, Vision
            Solutions Ltd has been a pioneer in delivering excellence across major sectors.
            Our team comprises diverse professionals and contractors who bring a wealth of
            experience and expertise, ensuring high-quality solutions tailored to your needs.
          </p>
          <p>
            With over four years of operational excellence, our diverse team and extensive
            experience enable us to deliver high-quality services across diverse sectors —
            including Supply Chain, Renewable Energy and Food Security — while supporting the
            integration of artificial intelligence (AI) into existing businesses to enhance
            innovation, efficiency and competitiveness.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 bg-black/5 rounded-2xl overflow-hidden border border-black/5">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-7 reveal">
            <div className="display text-4xl font-bold text-ink">{s.big}</div>
            <p className="mt-2 text-sm text-slate2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
