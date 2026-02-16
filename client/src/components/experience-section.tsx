import { motion } from "framer-motion";

const experiences = [
  {
    role: "Principal Engineer of Solutions Architecture",
    company: "SambaNova Systems",
    location: "Dubai, UAE",
    period: "2024 - Present",
    highlights: [
      "Leading technical advisory and deployment of large-scale sovereign AI inference infrastructures for CSPs, banking, telecom, and government clients across Europe and the Middle East",
      "Driving alignment across engineering, hardware, and product teams — translating enterprise insights into product roadmap improvements",
      "Acting as trusted advisor to CIOs, CTOs, and ministers, shaping national AI infrastructure strategies and operationalizing GenAI use cases",
      "Building strategic partnerships with technology providers and resellers, driving adoption across the region",
    ],
  },
  {
    role: "Manager - Data & AI Strategy",
    company: "Bain & Company",
    location: "London & Dubai",
    period: "2021 - 2024",
    highlights: [
      "Owned and led development of multiple GenAI products leveraging LangChain, LlamaIndex, Knowledge Graphs, and text-to-speech frameworks",
      "Delivered strategic end-to-end analytics for fraud detection, pricing, credit risk, and marketing using state-of-the-art ML models",
      "Served leading banks in Germany, payment gateways in DACH, Italy's largest retailer, and government agencies in Abu Dhabi and Saudi Arabia",
      "Conducted executive workshops on AI and advanced analytics, upskilling C-suite clients and internal stakeholders",
    ],
  },
  {
    role: "Data Scientist",
    company: "The Sultan Center",
    location: "Dubai, UAE",
    period: "2020 - 2021",
    highlights: [
      "Developed dynamic pricing system with group COO and CCO, enhancing profitability and sustaining market leadership",
      "Deployed 50+ predictive models for demand forecasting with 70-80% accuracy",
      "Designed A/B testing framework to evaluate promotional campaign performance and customer behavior insights",
    ],
  },
  {
    role: "Research Scientist",
    company: "University of North Dakota",
    location: "United States",
    period: "2018 - 2020",
    highlights: [
      "Developed ML models for early detection of sepsis (6 hours ahead of physicians) — presented at Computing in Cardiology 2019 in Singapore",
      "Built deep learning solution for smart grid energy consumption forecasting",
      "Published research in IEEE and CinC conferences",
    ],
  },
  {
    role: "Junior Data Scientist",
    company: "BMCE Bank of Africa Group",
    location: "Casablanca, Morocco",
    period: "2017 - 2018",
    highlights: [
      "Built and deployed credit risk models, reducing loan defaults by $1M within the pilot phase",
      "Integrated models into production decision systems and trained credit teams on adoption",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative" data-testid="section-experience">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-3 block" data-testid="text-experience-label">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight" data-testid="text-experience-heading">
            Career <span className="accent-text">Trajectory</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
                data-testid={`card-experience-${i}`}
              >
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-border bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold text-foreground" data-testid={`text-role-${i}`}>{exp.role}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                  <span className="text-sm font-medium accent-text font-mono" data-testid={`text-company-${i}`}>{exp.company}</span>
                  <span className="text-xs text-muted-foreground">{exp.location}</span>
                  <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
