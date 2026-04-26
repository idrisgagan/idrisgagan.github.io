import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";

const stack = [
  "OpenAI",
  "Anthropic",
  "Gemini",
  "MCP",
  "Ollama",
  "n8n",
  "RAG",
  "Multi-Agent",
  "Vector Search",
  "Microservices",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 md:pt-44 pb-24 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-[0.55]" />
        <div className="absolute inset-x-0 -top-40 h-[680px] bg-grid-fade" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[620px] w-[820px] conic-glow opacity-50 animate-pulse-slow" />
        <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-center reveal">
          <div className="inline-flex items-center gap-3 rounded-full glass px-4 py-1.5 text-[12px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-lime" />
            </span>
            <span className="text-ink-200">
              Open to senior product management and Founding AI PM roles · Enterprise SaaS / AI-native
            </span>
          </div>
        </div>

        <div className="mt-9 text-center">
          <p
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-400 reveal"
            style={{ animationDelay: "60ms" }}
          >
            Houston, TX · Senior Product Leader
          </p>

          <h1
            className="mt-5 font-display font-medium tracking-tightest text-[clamp(2.6rem,7.5vw,6.4rem)] leading-[0.95] reveal"
            style={{ animationDelay: "120ms" }}
          >
            <span className="text-gradient">Idris Gagan</span>
          </h1>

          <h2
            className="mx-auto mt-5 max-w-3xl text-balance text-[clamp(1.1rem,2.1vw,1.55rem)] leading-snug text-ink-200 reveal"
            style={{ animationDelay: "200ms" }}
          >
            I build AI-native enterprise products that turn around stalled
            teams,{" "}
            <span className="text-white">unlock new revenue</span>, and replace
            paperwork with{" "}
            <span className="text-white">production agents.</span>
          </h2>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 reveal"
            style={{ animationDelay: "300ms" }}
          >
            <a href="#career" className="btn-primary group">
              <Sparkles className="h-4 w-4 opacity-80 group-hover:rotate-12 transition-transform" />
              Explore my journey
            </a>
            <a href="#contact" className="btn-ghost group">
              Get in touch
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/Idris_Gagan_AI_PM.pdf"
              download
              className="btn-ghost group"
            >
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              Download resume
            </a>
          </div>
        </div>

        <div
          className="mt-20 grid gap-4 md:grid-cols-4 reveal"
          style={{ animationDelay: "420ms" }}
        >
          {[
            { v: "20+", l: "Years in product" },
            { v: "$1M+", l: "ARR commercialized solo" },
            { v: "~$5M", l: "Revenue unlocked" },
            { v: "0%", l: "Customer churn · 2 years" },
          ].map((m, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5"
            >
              <div className="absolute -top-px left-6 h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl tracking-tight text-white">
                  {m.v}
                </span>
                <span className="text-[12px] uppercase tracking-[0.18em] font-mono text-ink-400">
                  {m.l}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative mt-20 overflow-hidden mask-fade-bottom reveal"
          style={{ animationDelay: "560ms" }}
        >
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-ink-400">
            Shipping in production with
          </p>
          <div
            className="mt-5 relative flex overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="flex shrink-0 animate-marquee gap-3 pr-3">
              {[...stack, ...stack].map((t, i) => (
                <span key={i} className="chip whitespace-nowrap text-[12px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 text-ink-400 hover:text-ink-100 transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
