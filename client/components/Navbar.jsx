"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#who", label: "Who we are" },
  { href: "#work", label: "What we do" },
  { href: "#team", label: "Team" },
  { href: "#mission", label: "Mission" },
  { href: "#projects", label: "Projects" },
  { href: "#partners", label: "Partners" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? "nav-solid" : ""}`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between text-white">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="w-9 h-9" uid="nav" />
          <span className="wordmark text-[15px] leading-none">
            Vision<span className="text-lime">.</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[13px] text-white/70 font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-[13px] font-semibold px-4 py-2 rounded-full bg-lime text-navy-950 hover:bg-lime-bright transition"
        >
          Reach out
        </a>
      </nav>
    </header>
  );
}
