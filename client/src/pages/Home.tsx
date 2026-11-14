import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import TemplateStockSection from "@/components/TemplateStockSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SuccessCasesSection from "@/components/SuccessCasesSection";
import CertificationsSection from "@/components/CertificationsSection";
import AcademicProjectsSection from "@/components/AcademicProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Immersive3DBackground from "@/components/Immersive3DBackground";
import { PrimeAssistantWidget } from "@/components/PrimeAssistantWidget";
import AmbientAudio from "@/components/AmbientAudio";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Immersive3DBackground />
      <AmbientAudio />
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <SuccessCasesSection />
        <TemplateStockSection />
        <TestimonialsSection />
        <CertificationsSection />
        <AcademicProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <PrimeAssistantWidget />
    </div>
  );
}
