import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Globe, Brain, BarChart3 } from "lucide-react";

const impactCategories = [
  {
    icon: Server,
    title: "Sovereign AI & National Programs",
    description: "Designing and deploying sovereign-scale AI inference clusters for national AI strategies",
    projects: [
      {
        name: "Saudi Arabia - National AI Infrastructure",
        detail: "Designed and deployed sovereign AI inference clusters with 20-60 rack scale-up roadmaps for national data agencies",
      },
      {
        name: "Multi-Agent Legal AI Platform",
        detail: "Architected a multi-agent AI platform for 25,000+ judges and prosecutors in the legal domain",
      },
      {
        name: "UAE & GCC Strategy Advisory",
        detail: "Strategy consultations with ministries and PMOs on executive AI capability building and national cloud programs",
      },
    ],
    tags: ["Saudi Arabia", "UAE", "Qatar", "Morocco"],
  },
  {
    icon: Globe,
    title: "Enterprise-Scale Deployments",
    description: "Leading sovereign inference rollout for major cloud service providers and enterprises across Europe",
    projects: [
      {
        name: "OVHcloud - European Sovereign AI",
        detail: "Leading sovereign inference rollout in EU with multi-rack deployments scaling to 20+ racks",
      },
      {
        name: "Telecom AI Transformation",
        detail: "End-to-end GenAI transformation for major telecoms including AI monetization playbooks for B2B and cloud operations",
      },
    ],
    tags: ["Europe", "Telecom", "Cloud", "CSP"],
  },
  {
    icon: Brain,
    title: "AI & LLM Systems Engineering",
    description: "Building enterprise-grade AI systems from model optimization to production deployment",
    projects: [
      {
        name: "High-Throughput Inference Design",
        detail: "Context-optimized model bundles (8k, 32k, 131k) with compiler-accelerated execution on custom hardware",
      },
      {
        name: "Enterprise RAG Systems",
        detail: "Building enterprise-grade RAG systems for regulated sectors using LangChain, LlamaIndex, and knowledge graphs",
      },
      {
        name: "Multi-Agent Orchestration",
        detail: "Designing and deploying multi-agent systems for complex enterprise workflows at national scale",
      },
    ],
    tags: ["LLMs", "RAG", "Multi-Agent", "MLOps"],
  },
  {
    icon: BarChart3,
    title: "Strategy & Consulting",
    description: "Shaping AI strategy and operating models for global enterprises and governments",
    projects: [
      {
        name: "AI & Data Strategy for Gulf Clients",
        detail: "Designed ROI frameworks, operating models, and talent roadmaps for Fortune 500 enterprises and ministries",
      },
      {
        name: "Executive AI Education",
        detail: "Built and delivered training programs for CEOs, ministers, and board members on GenAI adoption and strategy",
      },
    ],
    tags: ["Bain & Company", "C-Suite", "Government", "Training"],
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 relative" data-testid="section-impact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-3 block" data-testid="text-impact-label">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-4" data-testid="text-impact-heading">
            The <span className="accent-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-impact-description">
            From deploying sovereign AI data centers to advising governments on national AI strategy —
            building real infrastructure for the AI era.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {impactCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full border-border/50" data-testid={`card-impact-${i}`}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <cat.icon className="w-5 h-5 accent-text" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground" data-testid={`text-impact-title-${i}`}>{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {cat.projects.map((proj, j) => (
                    <div key={j} className="pl-4 border-l-2 border-border/50">
                      <div className="text-sm font-medium text-foreground">{proj.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{proj.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs" data-testid={`badge-${tag.toLowerCase().replace(/\s/g, "-")}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
