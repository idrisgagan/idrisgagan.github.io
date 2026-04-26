"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "AI Work", href: "#ai" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500",
            scrolled
              ? "glass-strong border-white/10 shadow-2xl shadow-black/40"
              : "border-transparent"
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            aria-label="Idris Gagan — Home"
          >
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent via-accent-deep to-ink-900 text-[11px] font-bold text-white shadow-[0_0_20px_-4px_rgba(124,92,255,0.6)]">
              IG
              <span className="absolute inset-0 rounded-md ring-1 ring-white/20" />
            </span>
            <div className="hidden sm:flex flex-col leading-none gap-1.5">
              <span className="text-[13px] font-semibold tracking-tight text-white">
                Idris Gagan
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-400">
                Product · AI · Platform
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1.5 text-[13px] font-medium text-ink-200 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-4 py-2 text-[13px] font-semibold hover:bg-ink-100 transition-colors"
            >
              Let's talk
              <span className="inline-block translate-y-[1px]">→</span>
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-100"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-strong border border-white/10 p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-ink-100 hover:bg-white/5 rounded-xl"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
