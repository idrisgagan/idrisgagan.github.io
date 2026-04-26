type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  scope: string;
  highlights: { metric: string; copy: string }[];
  tags: string[];
};

const roles: Role[] = [
  {
    company: "Velostics Inc.",
    title: "Head of Product & Customer Success",
    period: "Apr 2020 — Present",
    location: "Houston, TX",
    scope:
      "Own product vision, roadmap, GTM, and customer success for an enterprise SaaS logistics platform — yard management, dock scheduling, driver check-in — serving shippers, carriers, drivers, and facility operators.",
    highlights: [
      {
        metric: "AI Voice Agent",
        copy: "Built and shipped an OpenAI + Gemini powered voice assistant for appointment scheduling — eliminating manual carrier/shipper coordination.",
      },
      {
        metric: "+14% / −32 min",
        copy: "Deployed at 6 Phillips 66 terminals and US Foods Houston — lifted site throughput 14%, cut 32 minutes per truck.",
      },
      {
        metric: "~$5M",
        copy: "Diagnosed an early commercial stall through direct driver and dispatcher interviews — identified 2 new target industries unlocking ~$5M in projected 2-year revenue.",
      },
      {
        metric: "80% YoY",
        copy: "Forged platform partnerships with Oracle (OTM), MercuryGate, and Redwood — drove 80% YoY revenue growth and zero customer churn across two consecutive years.",
      },
    ],
    tags: ["AI / LLM", "Logistics", "Platform", "GTM", "Partnerships"],
  },
  {
    company: "Chaione Inc.",
    title: "Sr. Product & Engagement Lead",
    period: "Aug 2019 — Apr 2020",
    location: "Houston, TX",
    scope:
      "Led client engagement and product delivery for Chevron's Digital Field Service Management (DFSM) — a mobile, offline-capable field-ticketing system across a 5-partner D2D program.",
    highlights: [
      {
        metric: "$150K/mo",
        copy: "Launched MVP in 6 weeks — onboarded the first supplier and 4 field users, enabling $150K/month in digital ticket approvals.",
      },
      {
        metric: "1-Week Turnaround",
        copy: "Diagnosed an approval stall through direct Well Site Manager interviews — uncovered a site-rotation pattern the product hadn't modeled. Spec'd and shipped a 'forward-to-correct-WSM' feature that restored approvals within a week.",
      },
      {
        metric: "Best-Performing Team",
        copy: "Migrated team from Jira to Azure DevOps in 1 week (half the mandated window) — drove the team to best-performing status across all 4 SAFe metrics. Chevron leadership called us out in an all-hands.",
      },
    ],
    tags: ["Field Ops", "Mobile", "SAFe", "Oil & Gas"],
  },
  {
    company: "Modiant, LLC.",
    title: "Product Manager",
    period: "Nov 2017 — Aug 2019",
    location: "Houston, TX",
    scope:
      "Led a multi-disciplinary team of 12 (6 Eng, 3 Design, 2 QA, 1 BA) delivering an enterprise supplier TMS and supply-chain visibility platform for oil-and-gas operators.",
    highlights: [
      {
        metric: "Visibility → Action",
        copy: "Reframed product strategy from 'supply-chain visibility' to 'visibility + action' after market analysis showed visibility tools alone couldn't resolve customer pain — a pivot that shaped company GTM.",
      },
      {
        metric: "−10% on $3.4M",
        copy: "Built and launched a surface-lite TMS in 4 months — secured the company's first sale to BHP, reducing freight spend 10% on $3.4M.",
      },
      {
        metric: "−38% / +100%",
        copy: "Turned around the stagnant C-View product — reduced offshore team 38% (8→5) and doubled output. Integrated a new domestic surface TMS within 6 months.",
      },
    ],
    tags: ["TMS", "Supply Chain", "Turnaround", "12-person team"],
  },
  {
    company: "CourthouseDirect.com, Inc.",
    title: "Product Manager",
    period: "Jun 2012 — Nov 2017",
    location: "Houston, TX",
    scope:
      "Managed a portfolio of 7+ products across 3 product lines at a ~$11M B2B data company serving title insurance, oil-and-gas, and banking. Earned PM title via two promotions (Sr. BA → PjM → PM).",
    highlights: [
      {
        metric: "$1M+/year",
        copy: "Reversed management's initial rejection to commercialize FileViewer — launched pricing model generating $500K in 6 months and $1M+ annually by year-end, closing a persistent revenue leak.",
      },
      {
        metric: "1,500+ users",
        copy: "Conceived Lease Alert and Lien Alert — shipped Lease Alert MVP in 2 months; reused the platform to ship Lien Alert in 2 weeks. Combined user base exceeded 1,500 in year one.",
      },
      {
        metric: "+18% / −10 min",
        copy: "Built a web-based, cloud-hosted order management system in 4 weeks — reduced accounting time per invoice from 10 min to zero, lifted team efficiency 18%, and increased monthly orders 16%.",
      },
      {
        metric: "400% efficiency",
        copy: "Rolled out Aha! company-wide with two-way Jira integration — drove portfolio-level prioritization across 3 product lines with +15% monthly orders and 400% operational-efficiency gains on targeted workflows.",
      },
    ],
    tags: ["B2B Data", "Portfolio", "Commercialization"],
  },
];

const earlier = [
  {
    co: "HCL America, Inc.",
    role: "Sr. Business Analyst / Product Owner",
    period: "2010–2012",
  },
  {
    co: "Net Matrix Solutions, Inc.",
    role: "Sr. Business Analyst",
    period: "2007–2010",
  },
  {
    co: "Four Soft Ltd. (now BluJay)",
    role: "Sr. Functional Consultant",
    period: "2006–2007",
  },
  {
    co: "Gati Ltd.",
    role: "Asst. Manager, Logistics Solutions",
    period: "2003–2006",
  },
];

export function Career() {
  return (
    <section id="career" className="relative py-28 md:py-36 scroll-mt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="kicker">Career — 02</span>
          <h2 className="mt-5 font-display tracking-tightest text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-white">
            From operations on the floor to{" "}
            <span className="text-gradient-violet">AI in production.</span>
          </h2>
          <p className="mt-6 text-[15px] text-ink-300 max-w-2xl">
            Each step has been about the same thing — finding where the work
            actually breaks, then shipping the smallest thing that fixes it.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-px" />

          <div className="space-y-12 md:space-y-20">
            {roles.map((r, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={r.company}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <div className="absolute left-3 md:left-1/2 top-3 -translate-x-1/2 z-10">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-accent ring-4 ring-ink-950" />
                    </span>
                  </div>

                  <div
                    className={`pl-10 md:pl-0 ${
                      isEven
                        ? "md:pr-10 md:text-right md:order-1"
                        : "md:pl-10 md:text-left md:order-2"
                    }`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
                      {r.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight text-white">
                      {r.company}
                    </h3>
                    <p className="mt-1 text-[14px] text-accent-glow font-medium">
                      {r.title}
                    </p>
                    <p className="mt-1 text-[12px] uppercase tracking-[0.18em] font-mono text-ink-400">
                      {r.location}
                    </p>
                    <p className="mt-5 text-[14.5px] leading-relaxed text-ink-300">
                      {r.scope}
                    </p>
                    <div
                      className={`mt-5 flex flex-wrap gap-1.5 ${
                        isEven ? "md:justify-end" : ""
                      }`}
                    >
                      {r.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`pl-10 mt-8 md:mt-0 ${
                      isEven ? "md:pl-10 md:order-2" : "md:pr-10 md:order-1"
                    }`}
                  >
                    <div className="space-y-4">
                      {r.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 hover:border-accent/30 hover:bg-white/[0.035] transition-all"
                        >
                          <div className="absolute -top-px left-5 h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="flex items-start gap-4">
                            <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-md bg-accent/12 text-accent-glow text-[11px] font-mono font-semibold tracking-wide border border-accent/20">
                              {h.metric}
                            </span>
                            <p className="text-[14px] leading-relaxed text-ink-200">
                              {h.copy}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="kicker">Earlier — 2003 to 2012</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {earlier.map((e) => (
              <div
                key={e.co}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.015] px-5 py-4"
              >
                <div>
                  <p className="text-[14.5px] font-medium text-white">{e.co}</p>
                  <p className="text-[13px] text-ink-300">{e.role}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                  {e.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.03] to-transparent p-6">
            <span className="kicker">Education</span>
            <ul className="mt-4 space-y-3">
              <li>
                <p className="text-[15px] font-semibold text-white">
                  MBA — University of Illinois Urbana-Champaign
                </p>
                <p className="text-[13px] text-ink-300">2022</p>
              </li>
              <li>
                <p className="text-[15px] font-semibold text-white">
                  B.E. Industrial Engineering — Ramdeobaba College
                </p>
                <p className="text-[13px] text-ink-300">2003</p>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.03] to-transparent p-6">
            <span className="kicker">Certifications</span>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-[13.5px] text-ink-200">
              <li>SAFe POPM (2024)</li>
              <li>CSPO — Scrum Alliance</li>
              <li>PMP — PMI</li>
              <li>CPM — APIMM</li>
              <li>AI for PM — Pendo / Google Cloud</li>
              <li>CS50 — HarvardX / edX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
