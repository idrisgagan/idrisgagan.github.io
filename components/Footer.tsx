import { Mail, Linkedin, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent via-accent-deep to-ink-900 text-[11px] font-bold text-white">
                IG
              </span>
              <span className="text-sm font-semibold text-white">
                Idris Gagan
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-300">
              Senior product leader building enterprise SaaS and AI products
              that move metrics, not just roadmaps.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Direct
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:idris.gagan@gmail.com"
                  className="inline-flex items-center gap-2 text-ink-100 hover:text-accent-glow transition-colors"
                >
                  <Mail className="h-4 w-4" /> idris.gagan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/idrisgagan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-100 hover:text-accent-glow transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/idrisgagan
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-ink-300">
                <MapPin className="h-4 w-4" /> Houston, TX
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Sections
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              <li>
                <a href="#about" className="text-ink-200 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#career" className="text-ink-200 hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#ai" className="text-ink-200 hover:text-white">
                  AI Work
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-ink-200 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-ink-200 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-t border-white/5 pt-6 text-xs text-ink-400">
          <p>© {new Date().getFullYear()} Idris Gagan. All rights reserved.</p>
          <p className="font-mono">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
