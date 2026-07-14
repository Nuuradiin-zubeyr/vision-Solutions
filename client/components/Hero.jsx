import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden text-white">
      {/* amini-style soft organic illustration */}
      <div
        className="absolute -left-32 -top-24 w-[560px] h-[560px] rounded-full pointer-events-none opacity-60 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%,rgba(141,198,63,.55),transparent 55%),radial-gradient(circle at 70% 60%,rgba(30,134,196,.5),transparent 55%),radial-gradient(circle at 50% 80%,rgba(30,99,201,.45),transparent 60%)",
        }}
        aria-hidden="true"
      />
      {/* ambient network graphic */}
      <svg
        className="absolute right-[-6%] top-[8%] w-[62%] max-w-[720px] opacity-50 float pointer-events-none"
        viewBox="0 0 400 460"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#4FA3D6" strokeWidth="1" opacity=".55">
          <path d="M60 40 L150 70 L120 160 L210 130 L260 210 L200 300 L280 330 L240 420 L150 380 L110 300 L60 260 L100 180 L60 40Z" />
          <path d="M150 70 L210 130 M120 160 L200 300 M260 210 L280 330 M110 300 L240 420 M100 180 L200 300" />
        </g>
        <g fill="#8DC63F">
          <circle cx="150" cy="70" r="3.4" /><circle cx="260" cy="210" r="3" />
          <circle cx="200" cy="300" r="4" /><circle cx="240" cy="420" r="3" />
        </g>
        <g fill="#7FC7EC">
          <circle cx="60" cy="40" r="2.6" /><circle cx="120" cy="160" r="2.6" />
          <circle cx="210" cy="130" r="2.6" /><circle cx="280" cy="330" r="2.6" />
          <circle cx="110" cy="300" r="2.6" /><circle cx="150" cy="380" r="2.6" />
          <circle cx="100" cy="180" r="2.6" />
        </g>
      </svg>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-40 pb-28 md:pt-52 md:pb-36">
        <p className="eyebrow text-lime mb-6 reveal">Technology &amp; AI company · Emerging pioneers</p>
        <h1 className="display font-bold leading-[1.02] tracking-tight text-[2.6rem] sm:text-6xl md:text-7xl max-w-4xl reveal">
          Engineering the digital<br className="hidden sm:block" /> future of{" "}
          <span className="cycle align-top text-left">
            <span className="grad-lime">Somalia.</span>
            <span className="grad-lime">the Horn of Africa.</span>
            <span className="grad-lime">your business.</span>
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/70 reveal">
          Vision Solutions Limited is a technology and AI company across the Horn of Africa —
          delivering IT consulting, AI integration, software development and support that help
          businesses work smarter and grow.
        </p>
        <div className="mt-9 flex flex-wrap gap-3 reveal">
          <a href="#contact" className="px-6 py-3 rounded-full bg-lime text-navy-950 font-semibold text-sm hover:bg-lime-bright transition">
            Start a project
          </a>
          <Link href="/about" className="px-6 py-3 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition">
            Explore our work
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="eyebrow text-white/40">Trusted by</span>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-white/55 text-sm font-semibold display">
            <span>Hormuud Salaam Foundation</span><span className="text-white/20">•</span>
            <span>Save the Children</span><span className="text-white/20">•</span>
            <span>BlueXpress Technologies</span><span className="text-white/20">•</span>
            <span>Titanium</span><span className="text-white/20">•</span>
            <span>Tropikal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
