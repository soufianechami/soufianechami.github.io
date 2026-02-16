import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.15) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.06] dark:opacity-[0.08]"
        style={{ background: "hsl(0 100% 40%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.04] dark:opacity-[0.06]"
        style={{ background: "hsl(0 0% 30%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}

function EmployerLogos() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.4 }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <motion.img
        src={isDark ? "/images/sambanova-white-logo.png" : "/images/sambanova-gray-logo.png"}
        alt="SambaNova Systems"
        className="absolute top-[15%] left-[5%] w-[180px] md:w-[240px] opacity-[0.04] dark:opacity-[0.06]"
        data-testid="img-logo-sambanova"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={isDark ? "/images/bain-white-logo.svg" : "/images/bain-red-logo.svg"}
        alt="Bain & Company"
        className="absolute bottom-[20%] right-[5%] w-[140px] md:w-[190px] opacity-[0.04] dark:opacity-[0.06]"
        data-testid="img-logo-bain"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <GridBackground />
      <EmployerLogos />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border/50">
            <img
              src="/images/soufiane-profile.jpg"
              alt="Soufiane Chami"
              className="w-full h-full object-cover"
              data-testid="img-profile"
            />
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground font-mono" data-testid="badge-availability">
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
          <span className="accent-text">Next Era of AI</span>
          <br />
          <span className="text-foreground">Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
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
          className="flex items-center justify-center gap-3"
        >
          <a
            href="https://linkedin.com/in/soufianechami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md text-muted-foreground transition-colors hover-elevate"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/soufianechami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md text-muted-foreground transition-colors hover-elevate"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/soufianechami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md text-muted-foreground transition-colors hover-elevate"
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
