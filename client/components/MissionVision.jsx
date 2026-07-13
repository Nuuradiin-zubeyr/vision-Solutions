export default function MissionVision() {
  return (
    <section id="mission" className="bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28">
        <p className="eyebrow text-lime mb-4 reveal">Mission &amp; Vision</p>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-2xl p-8 md:p-10 bg-white/[.04] border border-white/10 reveal">
            <h3 className="display text-2xl font-bold text-lime">Our Mission</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Vision Solutions is committed to delivering innovative, high-quality technology,
              software and AI-driven solutions that address evolving global needs. We strive to
              lead digital transformation by developing world-class products and intelligent
              services that empower businesses, drive innovation and compete with leading global
              technology companies.
            </p>
          </div>
          <div className="rounded-2xl p-8 md:p-10 bg-white/[.04] border border-white/10 reveal">
            <h3 className="display text-2xl font-bold text-teal">Our Vision</h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              To be the leading technology and AI solutions company in the Horn of Africa,
              delivering innovative digital solutions that transform businesses and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
