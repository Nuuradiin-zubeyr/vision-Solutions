import Logo from "./Logo";

const links = [
  { href: "#who", label: "Who we are" },
  { href: "#work", label: "What we do" },
  { href: "#team", label: "Team" },
  { href: "#mission", label: "Mission" },
  { href: "#projects", label: "Projects" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" uid="footer" />
            <div>
              <div className="wordmark text-sm">Vision Solutions</div>
              <div className="text-[11px] text-white/45 tracking-wide">
                Technology for a thriving Somalia.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-white/60">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-lime transition">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-white/40">
          <span>© {new Date().getFullYear()} Vision Solutions Limited. All rights reserved.</span>
          <span>Via Taleex, KM-4, Mogadishu · hello@vsolcorp.com</span>
        </div>
      </div>
    </footer>
  );
}
