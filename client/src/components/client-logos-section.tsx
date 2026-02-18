import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme";

function SambaNovaLogo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <img
      src={isDark ? "/images/sambanova-white-logo.png" : "/images/sambanova-gray-logo.png"}
      alt="SambaNova Systems"
      className="h-6 md:h-8 w-auto opacity-50"
      data-testid="logo-sambanova"
    />
  );
}

function BainLogo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <img
      src={isDark ? "/images/bain-white-logo.svg" : "/images/bain-red-logo.svg"}
      alt="Bain & Company"
      className="h-6 md:h-8 w-auto opacity-50"
      data-testid="logo-bain"
    />
  );
}

function SDAIALogo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <img
      src={isDark ? "/images/sdaia-logo-dark.svg" : "/images/sdaia-logo.svg"}
      alt="SDAIA - Saudi Data & AI Authority"
      className="h-8 md:h-10 w-auto opacity-70"
      data-testid="logo-sdaia"
    />
  );
}

function OVHCloudLogo() {
  return (
    <img
      src="/images/ovhcloud-logo.png"
      alt="OVHcloud"
      className="h-8 md:h-10 w-auto opacity-50 dark:invert dark:brightness-200"
      data-testid="logo-ovhcloud"
    />
  );
}

function SITELogo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <img
      src={isDark ? "/images/site-logo-dark.svg" : "/images/site-logo.svg"}
      alt="SITE - Saudi Information Technology Company"
      className="h-8 md:h-10 w-auto opacity-50"
      data-testid="logo-site"
    />
  );
}

const allLogos = [
  { key: "sambanova", el: <SambaNovaLogo /> },
  { key: "bain", el: <BainLogo /> },
  { key: "sdaia", el: <SDAIALogo /> },
  { key: "ovhcloud", el: <OVHCloudLogo /> },
  { key: "site", el: <SITELogo /> },
];

export function ClientLogosSection() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(allLogos.length / perPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const visible = allLogos.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-12 md:py-16" data-testid="section-client-logos">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs font-mono tracking-widest uppercase text-muted-foreground/60 mb-8"
      >
        Trusted By & Worked With
      </motion.p>
      <div className="max-w-3xl mx-auto px-6">
        <div className="relative h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center gap-12 md:gap-20"
            >
              {visible.map((logo) => (
                <div key={logo.key} className="flex items-center justify-center">
                  {logo.el}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "bg-primary w-4" : "bg-muted-foreground/30"
              }`}
              data-testid={`dot-page-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
