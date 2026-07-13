import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="hero-glow text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28 grid md:grid-cols-2 gap-14">
        <div className="reveal">
          <p className="eyebrow text-lime mb-4">Reach out to us</p>
          <h2 className="display text-3xl md:text-5xl font-bold leading-tight">
            Let&apos;s build something
            <br />
            <span className="grad-lime">smart</span> together.
          </h2>
          <p className="mt-5 text-white/65 max-w-md leading-relaxed">
            Tell us about your project. Our team responds to every enquiry.
          </p>
          <div className="mt-9 space-y-4 text-[15px]">
            <a href="tel:+252615942403" className="flex items-center gap-3 text-white/80 hover:text-lime transition">
              <span className="w-9 h-9 rounded-full border border-white/20 grid place-items-center">☎</span>
              +252 61 5942403
            </a>
            <a href="mailto:hello@vsolcorp.com" className="flex items-center gap-3 text-white/80 hover:text-lime transition">
              <span className="w-9 h-9 rounded-full border border-white/20 grid place-items-center">✉</span>
              hello@vsolcorp.com
            </a>
            <div className="flex items-center gap-3 text-white/80">
              <span className="w-9 h-9 rounded-full border border-white/20 grid place-items-center">◎</span>
              Via Taleex, KM-4, Mogadishu, SO
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
