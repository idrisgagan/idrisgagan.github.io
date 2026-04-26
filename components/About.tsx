import { Brain, Compass, GitBranch, Users } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI-native by default",
    body: "I ship LLM, RAG, and multi-agent workflows in production — not just demos. From OpenAI voice agents at Velostics to autonomous GTM pipelines, AI is a building material, not a roadmap line item.",
  },
  {
    icon: Compass,
    title: "Discovery on the floor",
    body: "I find the truth where the work happens — driver cabs, well sites, dispatcher desks. Direct interviews with 1,000+ users have reframed product strategy and unlocked ~$5M in projected revenue.",
  },
  {
    icon: GitBranch,
    title: "Turnaround operator",
    body: "Walked into stalled products and inverted them: −38% team / +100% output, zero churn over two consecutive years, sprint commitment to ~100% in a single rebuild.",
  },
  {
    icon: Users,
    title: "Player-coach leader",
    body: "Hands-on in spec, prototyping, and deployment — while leading multi-disciplinary teams of engineers, designers, QA, and BAs through the full product lifecycle.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 scroll-mt-24">
      <div className="absolute inset-0 -z-10 mask-fade-bottom">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="kicker">About — 01</span>
            <h2 className="mt-5 font-display tracking-tightest text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-white">
              Twenty years of shipping the{" "}
              <em className="not-italic text-gradient-violet">unglamorous</em>{" "}
              things that move metrics.
            </h2>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-ink-300">
              I'm a senior product leader with two decades inside enterprise
              SaaS — logistics, supply chain, and B2B data. I've earned Product
              Manager, Product Lead, and Head of Product titles by turning
              stalled products around, commercializing free tools into{" "}
              <span className="text-white">$1M+/year</span> revenue, and
              reframing product strategy through customer discovery on the
              floor.
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-300">
              Today I'm a hands-on builder of AI products — shipping LLM, RAG,
              and multi-agent workflows in production with OpenAI, Anthropic,
              Gemini, MCP, Ollama, and n8n. Recognized by Chevron program
              leadership as running the{" "}
              <span className="text-white">best-performing team</span> on their
              D2D program after a 1-week process turnaround.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Enterprise SaaS",
                "AI Product Management",
                "Platform Strategy",
                "GTM",
                "Supply Chain",
                "Logistics",
                "Oil & Gas",
              ].map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="lift relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6"
                >
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/15 blur-3xl opacity-60" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10">
                      <p.icon className="h-[18px] w-[18px] text-accent-glow" />
                    </div>
                    <h3 className="mt-5 text-[17px] font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-ink-300">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
