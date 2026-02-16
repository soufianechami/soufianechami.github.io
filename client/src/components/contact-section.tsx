import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from "lucide-react";

const contactCards = [
  {
    title: "Advisory for Governments & Enterprises",
    description: "AI strategy, national programs, sovereign infrastructure planning, and executive AI capability building",
    cta: "Discuss Advisory",
  },
  {
    title: "AI Infrastructure Consulting",
    description: "Benchmarks, chip architecture evaluations, RFP shaping, and data center design for AI workloads",
    cta: "Explore Consulting",
  },
  {
    title: "Speaking & Executive Training",
    description: "Conference keynotes, C-suite workshops, leadership briefings, and GenAI bootcamps for enterprise teams",
    cta: "Book Speaking",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative" data-testid="section-contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight mb-4">
            Let's <span className="accent-text">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you're a conference organizer, government leader, or enterprise executive —
            I'd love to connect and explore how we can collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full border-border/50 flex flex-col" data-testid={`card-contact-${i}`}>
                <h3 className="text-base font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{card.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = "mailto:soufiane.chami.ais@gmail.com"}
                  data-testid={`button-contact-${i}`}
                >
                  {card.cta}
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href="mailto:soufiane.chami.ais@gmail.com"
              className="p-2.5 rounded-md text-muted-foreground transition-colors hover-elevate"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/soufianechami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md text-muted-foreground transition-colors hover-elevate"
              data-testid="link-contact-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/soufianechami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md text-muted-foreground transition-colors hover-elevate"
              data-testid="link-contact-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/soufianechami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md text-muted-foreground transition-colors hover-elevate"
              data-testid="link-contact-twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            soufiane.chami.ais@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
