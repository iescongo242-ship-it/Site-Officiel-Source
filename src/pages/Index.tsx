import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import QuickLinks from "@/components/QuickLinks";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <QuickLinks />
      <AboutSection />
      <ProgramsSection />
      <PartnersSection />
      <AdmissionsSection />
      <Footer />
    </div>
  );
};

export default Index;
