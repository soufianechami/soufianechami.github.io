import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const expertiseCategories = [
  {
    title: "AI Infrastructure",
    items: [
      "SambaNova RDU Systems (SN40L/FSR)",
      "NVIDIA H100/H200 Clusters",
      "Groq LPU Architecture",
      "Cerebras Wafer-Scale",
      "Data Center Design for AI",
      "HPC & Distributed Computing",
    ],
  },
  {
    title: "AI / ML Engineering",
    items: [
      "LLM Optimization & Serving",
      "RAG Systems at Scale",
      "LangChain & LlamaIndex",
      "Multi-Agent Orchestration",
      "Model Fine-tuning Pipelines",
      "Knowledge Graphs",
    ],
  },
  {
    title: "Programming & DevOps",
    items: [
      "Python & FastAPI",
      "CUDA & PyTorch",
      "Docker & Kubernetes",
      "MLOps Pipelines",
      "CI/CD & Monitoring",
      "Cloud Architecture",
    ],
  },
  {
    title: "Strategy & GTM",
    items: [
      "AI Strategy Frameworks",
      "Sovereign AI Roadmaps",
      "Executive Education",
      "ROI & Business Cases",
      "Go-to-Market Strategy",
      "Partnership Development",
    ],
  },
];

const publications = [
  { title: "Fulbright Scholar", detail: "U.S. Department of State" },
  { title: "Google Grant - Sepsis Research", detail: "San Francisco, USA, 2019" },
  { title: "NSF Student Award - IEOM Society", detail: "Toronto, Canada, 2019" },
  { title: "\"Early Prediction of Sepsis using Machine Learning\"", detail: "Computing in Cardiology (CinC 2019, Singapore)" },
  { title: "\"Deep Energy Retrofit Forecasting\"", detail: "IEEE Energy Systems Conference" },
  { title: "Graduate Student Award - Excellence in Entrepreneurship", detail: "Johannesburg, South Africa, 2015" },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 relative" data-testid="section-expertise">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-3 block" data-testid="text-expertise-label">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-4" data-testid="text-expertise-heading">
            The <span className="accent-text">Engineer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-expertise-description">
            Deep technical expertise spanning AI hardware architectures, production ML systems,
            and enterprise-grade AI deployment — combined with strategic GTM capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {expertiseCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full border-border/50" data-testid={`card-expertise-${i}`}>
                <h3 className="text-lg font-bold font-mono text-foreground mb-4" data-testid={`text-expertise-title-${i}`}>{cat.title}</h3>
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-6 border-border/50" data-testid="card-publications">
            <h3 className="text-lg font-bold font-mono text-foreground mb-4" data-testid="text-publications-heading">Publications & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {publications.map((pub, i) => (
                <div key={i} className="flex items-start gap-3" data-testid={`item-publication-${i}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-primary" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{pub.title}</div>
                    <div className="text-xs text-muted-foreground">{pub.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
