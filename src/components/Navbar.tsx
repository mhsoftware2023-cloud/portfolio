"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import type en from "@/dictionaries/en.json";
import type { Locale } from "@/i18n/dictionaries";

type Props = { dict: typeof en.nav; lang: Locale };

export default function Navbar({ dict, lang }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: dict.about, href: "#about" },
    { label: dict.services, href: "#services" },
    { label: dict.projects, href: "#projects" },
    { label: dict.testimonials, href: "#testimonials" },
    { label: dict.contact, href: "#contact" },
  ];

  // Swap /en/... ↔ /es/...
  const otherLang: Locale = lang === "es" ? "en" : "es";
  const switchHref = pathname.replace(`/${lang}`, `/${otherLang}`);
  const flags: Record<Locale, string> = { en: "🇺🇸", es: "🇪🇸" };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="mhsoftware logo" style={{ height: 36, width: "auto" }} />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href={switchHref}
            className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors uppercase">
            {flags[otherLang]} {otherLang}
          </a>
          <a href="#contact"
            className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
            {dict.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gray-900"
              onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="flex items-center justify-between mt-2">
            <a href={switchHref} className="text-sm text-gray-500 font-medium uppercase" onClick={() => setOpen(false)}>
              {flags[otherLang]} {otherLang}
            </a>
            <a href="#contact"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium"
              onClick={() => setOpen(false)}>
              {dict.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
