import SEO from "@/components/SEO"
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import QuickLinks from "@/components/QuickLinks";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import VideoSection from "@/components/VideoSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
       {/* 👇 LA BRIQUE SEO EST LÀ 👇 */}
      <SEO 
        title="Accueil" 
        description="L'Institut d'Enseignement Supérieur du Congo (IESC) forme les leaders de demain. Diplômes reconnus, campus moderne à Brazzaville et stages garantis." 
      />
      <Navbar />
      <HeroCarousel />
      <QuickLinks />
      <AboutSection />
      <ProgramsSection />
      <VideoSection />
      <PartnersSection />
      <AdmissionsSection />
      <Footer />
    </div>
  );
};

export default Index;
