"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site.config";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-wide items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-label text-ink"
        >
          {site.nameDisplay}
          {site.availability.show && (
            <span className="flex items-center" title={site.availability.label}>
              <span className="relative flex h-[6px] w-[6px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/40 motion-safe:animate-ping" />
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-accent" />
              </span>
              <span className="sr-only">{site.availability.label}</span>
            </span>
          )}
        </a>

        <nav aria-label="Sections">
          <ul className="flex items-center gap-5 sm:gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
