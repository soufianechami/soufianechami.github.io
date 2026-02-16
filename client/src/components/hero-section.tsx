import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(hsl(235 70% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(235 70% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: "hsl(235 70% 60%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15"
        style={{ background: "hsl(270 60% 60%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <GridBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Speaking & Advisory
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-mono tracking-tight leading-[1.1] mb-6"
          data-testid="text-hero-title"
        >
          <span className="text-foreground">Building the</span>
          <br />
          <span className="gradient-text">Next Era of AI</span>
          <br />
          <span className="text-foreground">Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          data-testid="text-hero-subtitle"
        >
          Principal Solutions Engineer at SambaNova Systems. Former Bain & Company.
          Designing sovereign AI infrastructure for governments and global enterprises.
          Fulbright Scholar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button asChild data-testid="button-hero-cta">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild data-testid="button-hero-work">
            <a href="#impact">View My Work</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://linkedin.com/in/soufianechami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-muted-foreground transition-colors hover-elevate"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/soufianechami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-muted-foreground transition-colors hover-elevate"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/soufianechami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-muted-foreground transition-colors hover-elevate"
            data-testid="link-twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
