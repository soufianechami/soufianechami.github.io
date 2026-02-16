import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme";

function SDAIALogo({ className }: { className?: string }) {
  return (
    <div className={className} data-testid="logo-sdaia">
      <span className="text-lg md:text-xl font-bold font-mono tracking-tight text-foreground/40">
        SDAIA
      </span>
      <span className="text-[10px] text-foreground/25 font-mono block leading-tight">
        Saudi Data & AI Authority
      </span>
    </div>
  );
}

function OVHCloudLogo({ className }: { className?: string }) {
  return (
    <div className={className} data-testid="logo-ovhcloud">
      <span className="text-lg md:text-xl font-bold font-mono tracking-tight text-foreground/40">
        OVH
        <span className="font-normal">cloud</span>
      </span>
    </div>
  );
}

function STCLogo({ className }: { className?: string }) {
  return (
    <div className={className} data-testid="logo-stc">
      <span className="text-lg md:text-xl font-bold font-mono tracking-tight lowercase text-foreground/40">
        stc
      </span>
    </div>
  );
}

function SITELogo({ className }: { className?: string }) {
  return (
    <div className={className} data-testid="logo-site">
      <span className="text-lg md:text-xl font-bold font-mono tracking-wider text-foreground/40">
        SITE
      </span>
      <span className="text-[10px] text-foreground/25 font-mono block leading-tight">
        Saudi IT Company
      </span>
    </div>
  );
}

function SambaNovaLogo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <img
      src={isDark ? "/images/sambanova-white-logo.png" : "/images/sambanova-gray-logo.png"}
      alt="SambaNova Systems"
      className="h-5 md:h-6 w-auto opacity-40"
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
      className="h-5 md:h-7 w-auto opacity-40"
      data-testid="logo-bain"
    />
  );
}

export function ClientLogosSection() {
  const logos = [
    { key: "sambanova", component: <SambaNovaLogo /> },
    { key: "bain", component: <BainLogo /> },
    { key: "sdaia", component: <SDAIALogo /> },
    { key: "ovhcloud", component: <OVHCloudLogo /> },
    { key: "stc", component: <STCLogo /> },
    { key: "site", component: <SITELogo /> },
  ];

  return (
    <section className="py-12 md:py-16" data-testid="section-client-logos">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-mono tracking-widest uppercase text-muted-foreground/60 mb-8"
        >
          Trusted By & Worked With
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center"
            >
              {logo.component}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
