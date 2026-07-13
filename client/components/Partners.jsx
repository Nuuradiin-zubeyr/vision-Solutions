import { partners } from "@/lib/data";

export default function Partners() {
  return (
    <section id="partners" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28">
      <div className="text-center max-w-2xl mx-auto reveal">
        <p className="eyebrow text-teal mb-4">Trusted by</p>
        <h2 className="display text-3xl md:text-4xl font-bold text-ink">Partners who build with us.</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-14">
        {partners.map((p) => (
          <div
            key={p.name}
            className="reveal card-lift h-28 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] rounded-xl border border-black/5 bg-white grid place-items-center p-6 hover:shadow-md"
          >
            <img
              src={p.logo}
              alt={p.name}
              loading="lazy"
              className="max-h-16 max-w-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
