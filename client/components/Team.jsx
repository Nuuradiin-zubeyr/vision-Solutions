import { team } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="bg-paper border-y border-black/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-28">
        <div className="max-w-2xl reveal">
          <p className="eyebrow text-teal mb-4">Our core team</p>
          <h2 className="display text-3xl md:text-[2.6rem] font-bold leading-tight text-ink">
            The people behind the work.
          </h2>
          <p className="mt-4 text-slate2 leading-relaxed">
            A diverse team of engineers, consultants and specialists delivering technology
            across the Horn of Africa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {team.map((m) => (
            <div
              key={m.slug}
              className="reveal card-lift bg-white rounded-2xl border border-black/5 p-6 text-center hover:shadow-lg"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-lime/40 bg-paper">
                <img
                  src={`/team/${m.slug}.svg`}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="display text-lg font-bold text-ink mt-4">{m.name}</h3>
              <p className="text-sm text-teal font-medium mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
