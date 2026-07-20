import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import partnerYtc from "@/assets/partner-ytc.jpg";
import partnerCsjm from "@/assets/partner-csjm.png";
import partnerZando from "@/assets/partner-zando.jpg";

// NOTRE BASE DE DONNÉES DE DÉPART
const basePartners = [
  { name: "Yasmina Training Corp", logo: partnerYtc },
  { name: "Complexe Scolaire Jacqueline Mamoni", logo: partnerCsjm },
  { name: "Zando Market", logo: partnerZando },
];

// L'ASTUCE DU PRO : On duplique la liste plusieurs fois pour que le défilement ne soit jamais vide, 
// même si on n'a que 3 partenaires pour le moment !
const partners = [...basePartners, ...basePartners, ...basePartners, ...basePartners];

const PartnersSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* EN-TÊTE DE SECTION (100% Charte IESC) */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
            Nos Partenaires
          </h2>
          <div className="w-20 h-1 bg-[#CC1122] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des collaborations solides avec des institutions de renom pour garantir l'excellence de nos formations
          </p>
        </div>

      </div>

      {/* LE CARROUSEL DÉFILANT INFINI */}
      <div className="relative w-full max-w-7xl mx-auto mt-4">
        
        {/* Dégradés blancs sur les bords pour un effet d'apparition/disparition fluide */}
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Le Conteneur Animé (Il se met en pause quand on passe la souris dessus !) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-4">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="w-64 bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-md hover:-translate-y-1 hover:border-gray-200 transition-all duration-300 flex-shrink-0 cursor-default"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                // Effet de pro : Noir et blanc par défaut, couleur au survol
                className="w-24 h-24 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <span className="text-sm text-gray-700 text-center font-bold leading-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* INJECTION DU CODE D'ANIMATION CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default PartnersSection;