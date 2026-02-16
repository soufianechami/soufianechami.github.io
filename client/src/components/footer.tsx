import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/30" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground font-mono">
            <span className="gradient-text font-bold">Soufiane Chami</span>
            <span className="mx-2 text-border">|</span>
            Dubai, UAE
          </div>
          <div className="text-xs text-muted-foreground/60">
            AI Infrastructure Architect & Strategic Operator
          </div>
        </div>
      </div>
    </footer>
  );
}
