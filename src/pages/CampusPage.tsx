import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Monitor, BookOpen, Shield, Wifi, Users, MapPin, ArrowRight,
  Camera, Library, GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import campusImg from "@/assets/hero002.webp";
import labIinformatique from "@/assets/Salle informatique.webp";
import librarytravail from "@/assets/Espace-travail.webp";
import classroomImg from "@/assets/Salle1.webp";

const facilities = [
  {
    image: classroomImg,
    title: "Salles de cours modernes",
    description: "Des salles climatisées équipées de vidéoprojecteurs et tableaux blancs interactifs pour un enseignement de qualité.",
    icon: BookOpen,
  },
  {
    image: labIinformatique,
    title: "Laboratoire informatique",
    description: "Un laboratoire équipé d'ordinateurs performants avec accès internet haut débit pour les travaux pratiques.",
    icon: Monitor,
  },
  {
    image: librarytravail,
    title: "Espaces de Travail et Coworking",
    description: "Des espaces collaboratifs couverts par notre Wi-Fi haut débit, conçus pour favoriser les travaux de groupe et les révisions dans un cadre calme.",
    icon: Library,
  },
];

const features = [
  { icon: Wifi, title: "Wi-Fi haut débit", desc: "Accès internet sur tout le campus" },
  { icon: Camera, title: "Vidéosurveillance", desc: "Sécurité assurée 24h/24" },
  { icon: Shield, title: "Environnement sécurisé", desc: "Gardiennage permanent" },
  { icon: Users, title: "Espaces collaboratifs", desc: "Zones de travail en groupe" },
  { icon: GraduationCap, title: "Encadrement qualifié", desc: "Professeurs expérimentés" },
  { icon: MapPin, title: "Emplacement central", desc: "Au cœur de Poto-Poto, Brazzaville" },
];

const CampusPage = () => {
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
       <SEO 
        title="Notre Campus à Poto-Poto" 
        description="Étudiez dans un environnement d'excellence au cœur de Brazzaville. Salles climatisées, laboratoires modernes, bibliothèque et Wi-Fi haut débit." 
      />
      <Navbar />

      <ZoomCarousel
        images={[
          { src: campusImg, alt: "Campus IESC" },
          { src: classroomImg, alt: "Salle de cours" },
          { src: librarytravail, alt: "Laboratoire" },
        ]}
        title="Notre Campus"
        subtitle="Un environnement moderne et stimulant au cœur de Brazzaville, conçu pour favoriser votre réussite académique"
      />

      {/* Facilities (Infrastructures) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">Nos Infrastructures</h2>
            <div className="w-20 h-1 bg-[#CC1122] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Des installations modernes pour un apprentissage de qualité</p>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {facilities.map((f, i) => (
              <FacilityCard key={i} facility={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features grid (Les Atouts - DESIGN CARTES IDENTIQUE À FORMATIONS) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">Les Atouts du Campus</h2>
            <div className="w-20 h-1 bg-[#CC1122] mx-auto" />
          </div>

          <div ref={featRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 text-center group transition-all duration-500 ${
                  featVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-[#CC1122]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#CC1122] transition-colors duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                  <f.icon size={28} className="text-[#CC1122] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold text-black mb-3">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location (Localisation) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">Comment nous trouver</h2>
            <div className="w-20 h-1 bg-[#CC1122] mx-auto mb-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            
            {/* Colonne Adresse */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-[#CC1122] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-2">Adresse</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      112 Avenue De France, Poto-Poto<br />
                      En face de la Station Afric'<br />
                      Brazzaville, République du Congo
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700 bg-white p-6 rounded-xl border border-gray-100">
                  <p className="flex items-center gap-3">
                    <span className="text-xl">🚌</span> 
                    <span><strong>Transport :</strong> Lignes de bus de Poto-Poto</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-xl">🅿️</span> 
                    <span><strong>Parking :</strong> Stationnement à proximité</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne Carte */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <iframe
                title="Localisation IESC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.5!2d15.2832!3d-4.2634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c46f555555%3A0x12345!2sPoto-Poto%2C%20Brazzaville!5e0!3m2!1sfr!2scg!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA (Le tien : Fond Rouge, Bouton Bleu) */}
      <section className="bg-[#CC1122] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Venez découvrir notre campus</h2>
          <p className="text-red-100 mb-8 max-w-lg mx-auto text-lg">Planifiez une visite ou contactez-nous pour en savoir plus</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A4B84] text-white font-bold rounded-md hover:bg-[#113259] hover:scale-105 transition-all shadow-lg"
          >
            Planifier une visite
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// SOUS-COMPOSANT : CARTE INFRASTRUCTURE
const FacilityCard = ({ facility: f, index: i }: { facility: typeof facilities[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
    >
      <div className={i % 2 === 1 ? "md:order-2" : ""}>
        <div className="overflow-hidden rounded-2xl shadow-xl group border-4 border-white">
          <img
            src={f.image}
            alt={f.title}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
      <div className={`flex flex-col ${i % 2 === 1 ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
        <div className="flex items-center gap-4 mb-6 group cursor-default">
          {/* Carré de l'icône */}
          <div className="w-16 h-16 rounded-2xl bg-[#CC1122]/10 flex items-center justify-center group-hover:bg-[#CC1122] transition-colors duration-300 shadow-sm shrink-0">
            <f.icon size={32} className="text-[#CC1122] group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-black leading-tight">{f.title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed text-lg">{f.description}</p>
      </div>
    </div>
  );
};

export default CampusPage;