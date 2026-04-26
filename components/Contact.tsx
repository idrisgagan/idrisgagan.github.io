import { Mail, Phone, ArrowUpRight, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 scroll-mt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 top-12 h-[420px] w-[820px] conic-glow opacity-30 animate-pulse-slow" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent p-8 md:p-14">
          <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial" />
          <div className="absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="kicker">Contact — 05</span>
              <h2 className="mt-5 font-display tracking-tightest text-[clamp(2rem,4.4vw,3.6rem)] leading-[0.98] text-white">
                Let's build the next{" "}
                <span className="text-gradient-violet">turnaround.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-ink-200">
                I'm open to senior product leadership roles — Head of Product,
                VP, or AI-product founding hire. I take fast intros, advisory
                conversations, and partnership inquiries.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:idris.gagan@gmail.com?subject=Let's%20talk"
                  className="btn-primary"
                >
                  <Mail className="h-4 w-4" />
                  idris.gagan@gmail.com
                </a>
                <a href="tel:+17132948475" className="btn-ghost group">
                  <Phone className="h-4 w-4" />
                  (713) 294-8475
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { k: "Location", v: "Houston, TX", icon: MapPin },
                {
                  k: "Best for",
                  v: "Head of Product · VP · Founding AI PM",
                  icon: ArrowUpRight,
                },
                {
                  k: "Response time",
                  v: "Within 24 hours, usually faster",
                  icon: ArrowUpRight,
                },
                {
                  k: "Availability",
                  v: "Conversational now · ready to start in weeks",
                  icon: ArrowUpRight,
                },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-start justify-between gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                      {row.k}
                    </p>
                    <p className="mt-1.5 text-[14.5px] text-white">{row.v}</p>
                  </div>
                  <row.icon className="h-4 w-4 text-ink-400 mt-1 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
