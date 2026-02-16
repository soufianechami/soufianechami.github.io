import { motion } from "framer-motion";
import { Award, Globe, Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Globe,
    label: "Sovereign AI",
    value: "$100M+",
    description: "Annual AI infrastructure spend influenced",
  },
  {
    icon: Briefcase,
    label: "Enterprise Reach",
    value: "25k+",
    description: "Users on deployed AI platforms",
  },
  {
    icon: Award,
    label: "Fulbright Scholar",
    value: "U.S. DoS",
    description: "Department of State fellowship recipient",
  },
  {
    icon: GraduationCap,
    label: "Research",
    value: "IEEE & CinC",
    description: "Published in top-tier conferences",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative" data-testid="section-about">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-3 block">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-6">
            The Strategist Who <span className="gradient-text">Builds</span>
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Soufiane is a Principal Solutions Engineer at SambaNova Systems, where he architects
              large-scale AI clusters and sovereign inference platforms for national programs
              and global enterprises. His work spans full-stack AI — from semiconductor-level
              acceleration and data center design to multi-agent LLM systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Previously at Bain & Company, he advised Gulf ministries, telecoms, and leading
              enterprises on AI strategy, operating models, and digital transformation. He has
              served high-profile clients including leading banks in Germany, payment gateways in
              the DACH region, Italy's largest retailer, and major government agencies in Abu Dhabi
              and Saudi Arabia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a Fulbright Scholar, Soufiane specialized in computer science and AI at the
              University of North Dakota, later becoming a trusted advisor to CEOs, CTOs, and
              public leaders on the responsible and high-value adoption of Generative AI.
              Trilingual in Arabic, French, and English.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-5 h-full border-border/50">
                <item.icon className="w-5 h-5 text-muted-foreground mb-3" />
                <div className="text-2xl font-bold font-mono gradient-text mb-1" data-testid={`text-stat-${item.label.toLowerCase().replace(/\s/g, "-")}`}>
                  {item.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
