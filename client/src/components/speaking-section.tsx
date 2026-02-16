import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, BookOpen, Users, Radio } from "lucide-react";

const speakingTopics = [
  {
    title: "Sovereign AI Infrastructure: From Vision to Reality",
    description: "Designing national-scale AI clusters, data sovereignty, and adoption roadmaps for governments across GCC and Europe",
    tags: ["Keynote", "Government", "Infrastructure"],
  },
  {
    title: "Building the Next-Generation AI Data Center",
    description: "Architecting low-latency inference at scale — HPC fundamentals, energy efficiency, cost models, and rack-level design",
    tags: ["Deep Tech", "Engineering", "Data Center"],
  },
  {
    title: "Accelerating Enterprise GenAI Transformation",
    description: "How large organizations adopt and scale GenAI — operating models, ROI frameworks, and real-world case studies",
    tags: ["Enterprise", "Strategy", "GenAI"],
  },
  {
    title: "AI Strategy for Leaders",
    description: "What CEOs and governments need to know — value creation in GenAI, compliance, geopolitics, and the infrastructure arms race",
    tags: ["C-Suite", "Executive", "Advisory"],
  },
  {
    title: "Inside the Engine Room of LLM Inference",
    description: "Why GPUs bottleneck inference, compiler-level optimizations, model bundling, and real benchmarking from national deployments",
    tags: ["Technical", "LLMs", "Benchmarking"],
  },
];

const events = [
  "GITEX Global Dubai",
  "LEAP Saudi Arabia",
  "MWC Qatar",
  "OVH Summit Paris",
  "SambaNova Sovereign AI Roadshows",
  "AI Infrastructure Panels",
];

const engagementTypes = [
  {
    icon: Mic,
    label: "Keynotes & Panels",
    detail: "Conference speaking on AI infrastructure, sovereign AI, and enterprise transformation",
  },
  {
    icon: Radio,
    label: "Podcasts & Media",
    detail: "AI thought leadership interviews and industry analysis",
  },
  {
    icon: Users,
    label: "Executive Training",
    detail: "C-suite workshops, leadership briefings, and GenAI bootcamps",
  },
  {
    icon: BookOpen,
    label: "Workshops",
    detail: "Hands-on sessions on LLMs, RAG systems, and AI strategy for enterprise teams",
  },
];

export function SpeakingSection() {
  return (
    <section id="speaking" className="py-24 relative" data-testid="section-speaking">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-3 block" data-testid="text-speaking-label">
            Speaking & Media
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-4" data-testid="text-speaking-heading">
            The <span className="accent-text">Voice</span> of Sovereign AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-speaking-description">
            Sharing insights on AI infrastructure, enterprise transformation, and national AI strategy
            at the world's leading technology events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {engagementTypes.map((type, i) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-5 h-full border-border/50 text-center" data-testid={`card-engagement-${i}`}>
                <type.icon className="w-5 h-5 mx-auto text-muted-foreground mb-3" />
                <div className="text-sm font-bold text-foreground mb-1">{type.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{type.detail}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold font-mono mb-6" data-testid="text-topics-heading">Speaking Topics</h3>
          <div className="space-y-3">
            {speakingTopics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="p-4 border-border/50" data-testid={`card-topic-${i}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-foreground mb-1" data-testid={`text-topic-title-${i}`}>{topic.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{topic.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 shrink-0">
                      {topic.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold font-mono mb-4" data-testid="text-events-heading">Notable Events</h3>
          <div className="flex flex-wrap gap-2">
            {events.map((event) => (
              <Badge key={event} variant="outline" className="text-xs py-1.5 px-3" data-testid={`badge-event-${event.toLowerCase().replace(/\s/g, "-")}`}>
                {event}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
