import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ImpactSection } from "@/components/impact-section";
import { SpeakingSection } from "@/components/speaking-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div className="glow-line h-px w-full" />
      <AboutSection />
      <div className="glow-line h-px w-full" />
      <ExperienceSection />
      <div className="glow-line h-px w-full" />
      <ImpactSection />
      <div className="glow-line h-px w-full" />
      <SpeakingSection />
      <div className="glow-line h-px w-full" />
      <ExpertiseSection />
      <div className="glow-line h-px w-full" />
      <ContactSection />
      <Footer />
    </div>
  );
}
