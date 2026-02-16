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
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-3 block">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-4">
            The <span className="gradient-text">Engineer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
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
                <h3 className="text-lg font-bold font-mono text-foreground mb-4">{cat.title}</h3>
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(235 70% 60%)" }} />
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
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-bold font-mono text-foreground mb-4">Publications & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(270 60% 60%)" }} />
                  <div>
                    <div className="text-sm font-medium text-foreground">Fulbright Scholar</div>
                    <div className="text-xs text-muted-foreground">U.S. Department of State</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(270 60% 60%)" }} />
                  <div>
                    <div className="text-sm font-medium text-foreground">Google Grant - Sepsis Research</div>
                    <div className="text-xs text-muted-foreground">San Francisco, USA, 2019</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(270 60% 60%)" }} />
                  <div>
                    <div className="text-sm font-medium text-foreground">NSF Student Award - IEOM Society</div>
                    <div className="text-xs text-muted-foreground">Toronto, Canada, 2019</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(270 60% 60%)" }} />
                  <div>
                    <div className="text-sm font-medium text-foreground">"Early Prediction of Sepsis using Machine Learning"</div>
                    <div className="text-xs text-muted-foreground">Computing in Cardiology (CinC 2019, Singapore)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(270 60% 60%)" }} />
                  <div>
                    <div className="text-sm font-medium text-foreground">"Deep Energy Retrofit Forecasting"</div>
                    <div className="text-xs text-muted-foreground">IEEE Energy Systems Conference</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "hsl(270 60% 60%)" }} />
                  <div>
                    <div className="text-sm font-medium text-foreground">Graduate Student Award - Excellence in Entrepreneurship</div>
                    <div className="text-xs text-muted-foreground">Johannesburg, South Africa, 2015</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
