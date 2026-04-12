import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import TemplateStockSection from "@/components/TemplateStockSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SuccessCasesSection from "@/components/SuccessCasesSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { PrimeAssistantWidget } from "@/components/PrimeAssistantWidget";
import AmbientAudio from "@/components/AmbientAudio";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <AmbientAudio />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <SuccessCasesSection />
        <TemplateStockSection />
        <TestimonialsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <PrimeAssistantWidget />
    </div>
  );
}
