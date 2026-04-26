import { Mic, Network, Workflow, Cpu } from "lucide-react";

const items = [
  {
    icon: Mic,
    title: "Voice agents · RAG-grounded",
    body: "RAG-based voice agents using OpenAI embeddings + Gemini for contextual, knowledge-grounded decision-making — deployed inside the Velostics scheduling flow to remove manual carrier coordination.",
    stack: ["OpenAI", "Gemini", "Vector Search"],
  },
  {
    icon: Workflow,
    title: "Workflow agents · n8n + Slack",
    body: "AI agents built with OpenAI, OpenRouter, and n8n that automate business workflows across Slack and enterprise tools — the connective tissue between humans, queues, and APIs.",
    stack: ["n8n", "OpenRouter", "Slack"],
  },
  {
    icon: Network,
    title: "Multi-agent orchestration",
    body: "Multi-agent systems using MCP, Ollama, and DeepSeek for autonomous task orchestration — including an autonomous GTM pipeline for AI-driven lead generation and nurturing.",
    stack: ["MCP", "Ollama", "DeepSeek"],
  },
  {
    icon: Cpu,
    title: "AI-native PM practice",
    body: "Daily hands-on use of ChatGPT, Claude, Cursor, and GitHub Copilot for spec drafting, research synthesis, and rapid prototyping. Publishing demo videos to share AI-enabled PM practice.",
    stack: ["Claude", "Cursor", "Copilot"],
  },
];

export function AIWork() {
  return (
    <section id="ai" className="relative py-28 md:py-36 scroll-mt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="kicker">AI Work — 03</span>
            <h2 className="mt-5 font-display tracking-tightest text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-white">
              I don't just talk about AI.{" "}
              <span className="text-gradient-violet">I ship it.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-ink-300">
            A working library of LLM, RAG, and agent systems running in
            production, in side projects, and inside my own workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="lift group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent p-7"
            >
              <div className="absolute inset-0 bg-grid-sm opacity-[0.4] mask-fade-bottom" />
              <div className="absolute -top-32 -right-20 h-60 w-60 rounded-full bg-accent/15 blur-3xl group-hover:bg-accent/25 transition-colors" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/[0.04] border border-white/10">
                    <it.icon className="h-5 w-5 text-accent-glow" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-[19px] font-semibold text-white">
                  {it.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-300">
                  {it.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {it.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[11px] tracking-wide text-ink-200 bg-white/[0.04] border border-white/[0.08]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
