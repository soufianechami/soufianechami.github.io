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
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <ImpactSection />
      <div className="section-divider" />
      <SpeakingSection />
      <div className="section-divider" />
      <ExpertiseSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </div>
  );
}
