import { Link } from "react-router-dom";
import {
  Monitor, Users, Calculator, Landmark, Network, Briefcase, Scale, TruckIcon,
  Clock, Award, BookOpen, CheckCircle, ArrowRight, CheckCircle2,
  Brain, Shield, HeartPulse // <-- NOUVELLES ICÔNES ICI
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const programs = [
  { icon: Monitor, title: "Génie Informatique", careers: ["Développeur web et mobile", "Administrateur systèmes", "Chef de projet IT", "Consultant digital"] },
  { icon: Brain, title: "Data Science et IA", careers: ["Data Scientist", "Ingénieur IA", "Data Analyst", "Consultant Big Data"] },
  { icon: Network, title: "Réseaux et Télécoms", careers: ["Administrateur réseaux", "Technicien télécoms", "Consultant cybersécurité", "Responsable IT"] },
  { icon: Users, title: "Ressources Humaines", careers: ["Responsable RH", "Chargé de recrutement", "Gestionnaire de paie", "Consultant RH"] },
  { icon: Calculator, title: "Comptabilité", careers: ["Comptable", "Contrôleur de gestion", "Responsable financier", "Auditeur junior"] },
  { icon: Landmark, title: "Banque et Finances", careers: ["Agent d'assurance", "Analyste financier", "Cadre bancaire", "Gestion de portefeuille"] },
  { icon: TruckIcon, title: "Chaîne Logistique", careers: ["Responsable logistique", "Supply Chain Manager", "Gestion des stocks", "Planificateur"] },
  { icon: Briefcase, title: "Management et Entrepreneuriat", careers: ["Entrepreneur", "Chef de projet", "Business Developer", "Responsable commercial"] },
  { icon: Scale, title: "Droit", careers: ["Juriste d'entreprise", "Assistant juridique", "Consultant juridique", "Clerc d'avocat"] },
  { icon: Shield, title: "Qualité, Hygiène, Sécurité (QHSE)", careers: ["Responsable QHSE", "Contrôleur qualité", "Auditeur environnement", "Préventeur"] },
];

const ProgramsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05);

  return (
    <section id="programmes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
            Nos Programmes
          </h2>
          <div className="w-20 h-1 bg-[#CC1122] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez nos 10 filières professionnelles conçues pour répondre aux exigences du marché de l'emploi
          </p>
        </div>

        {/* GRILLE DES PROGRAMMES */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {programs.map((prog, i) => (
            <Link
              to="/formations"
              key={i}
              className={`group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Liseré Rouge qui devient Noir au survol */}
              <div className="h-2 w-full bg-[#CC1122] group-hover:bg-black transition-colors duration-300" />
              
              <div className="p-6 flex-grow flex flex-col">
                {/* L'icône (Design Officiel IESC) */}
                <div className="w-14 h-14 rounded-2xl bg-[#CC1122]/10 flex items-center justify-center mb-6 group-hover:bg-[#CC1122] transition-colors duration-300 shadow-sm shrink-0">
                  <prog.icon size={28} className="text-[#CC1122] group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Le Titre */}
                <h3 className="font-heading font-bold text-black mb-4 text-xl group-hover:text-[#CC1122] transition-colors leading-tight min-h-[56px]">
                  {prog.title}
                </h3>
                
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Débouchés</p>
                
                {/* La liste des débouchés avec puces Rouges */}
                <ul className="space-y-2 flex-grow">
                  {prog.careers.map((c, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CC1122] mt-1.5 shrink-0" />
                      <span className="leading-snug">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* BOUTON D'APPEL À L'ACTION (Voir toutes les filières) */}
        <div className="text-center">
          <Link
            to="/formations"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CC1122] text-white font-bold rounded-lg hover:bg-red-800 hover:scale-105 transition-all shadow-md"
          >
            Voir le détail de nos filières
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;