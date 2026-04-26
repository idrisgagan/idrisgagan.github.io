import { Lock, ArrowUpRight, Mail } from "lucide-react";

const teasers = [
  {
    title: "FileViewer — $1M+/yr commercialization",
    summary:
      "From free stopgap to flagship SKU: pricing, packaging, analytics-driven business case.",
    tag: "Write-up",
    accent: "from-signal-amber/30 to-accent/20",
  },
  {
    title: "Velostics — AI Voice Scheduling",
    summary:
      "OpenAI + Gemini powered voice agent that books appointments without a human in the loop.",
    tag: "Coming soon",
    accent: "from-accent/30 to-signal-cyan/20",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 md:py-36 scroll-mt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="kicker">Portfolio — 04</span>
            <h2 className="mt-5 font-display tracking-tightest text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-white">
              Case studies, in flight.
            </h2>
            <p className="mt-5 text-[15px] text-ink-300 max-w-xl">
              I'm currently writing up the work — voice agents in production,
              the FileViewer commercialization, the Chevron turnaround, and the
              autonomous GTM pipeline. Drop me a note if you'd like the
              walkthrough now.
            </p>
          </div>
          <a href="#contact" className="btn-ghost group self-start md:self-end">
            Request a private deck
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {teasers.map((t, i) => (
            <div
              key={t.title}
              className="lift group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7"
            >
              <div
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${t.accent} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-[0.2em] text-ink-300 bg-white/[0.04] border border-white/[0.08]">
                    <Lock className="h-3 w-3" />
                    {t.tag}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[17px] font-semibold leading-snug text-white">
                  {t.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-300">
                  {t.summary}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-[12px] text-ink-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-amber animate-pulse" />
                  In progress
                </div>
              </div>
            </div>
          ))}

          {/* "More on request" CTA tile */}
          <a
            href="mailto:idris.gagan@gmail.com?subject=Case%20study%20walkthrough"
            className="lift group relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent/[0.06] to-transparent p-7 flex flex-col justify-between"
          >
            <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent/30 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-[0.2em] text-white/90 bg-accent/20 border border-accent/40">
                <Mail className="h-3 w-3" />
                On request
              </span>
              <h3 className="mt-6 text-[17px] font-semibold leading-snug text-white">
                More case studies available — happy to walk you through any of them live.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-200">
                Chevron DFSM turnaround, autonomous GTM agent, Phillips 66 deployment, and more — written up privately for serious conversations.
              </p>
            </div>
            <div className="relative mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-white">
              Email me for the walkthrough
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
