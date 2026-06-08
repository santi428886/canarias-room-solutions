"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="group flex flex-col">
          <span className="font-serif text-xl tracking-wide text-cream sm:text-2xl">
            Canarias Room
          </span>
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold">
            Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="border border-gold px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-gold transition-all hover:bg-gold hover:text-navy"
          >
            Valoración gratuita
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-cream/10 bg-navy/98 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-cream/90 transition-colors hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 border border-gold px-5 py-3 text-center text-xs font-semibold tracking-wider uppercase text-gold"
              onClick={() => setMenuOpen(false)}
            >
              Valoración gratuita
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
