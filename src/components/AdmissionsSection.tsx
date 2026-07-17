import { FileText, CreditCard, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AdmissionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* EN-TÊTE DE SECTION (Noir et Rouge) */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
            Admissions
          </h2>
          <div className="w-20 h-1 bg-[#CC1122] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Rejoignez l'IESC et construisez votre avenir professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* CARTE 1 : DOSSIER (Blanc) */}
          <div className={`bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
            <div className="w-16 h-16 rounded-2xl bg-[#CC1122]/10 flex items-center justify-center mb-6 shadow-sm">
              <FileText size={32} className="text-[#CC1122]" />
            </div>
            <h3 className="text-xl font-heading font-bold text-black mb-6">Dossier d'inscription</h3>
            <ul className="space-y-4 flex-grow">
              {[
                "Copie légalisée du diplôme (BAC)", 
                "Copie de l'acte de naissance", 
                "4 photos d'identité format carte", 
                "Copie de la carte d'identité ou passeport"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={18} className="text-[#CC1122] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CARTE 2 : FRAIS (Carte Premium Noire) */}
          <div className={`bg-black rounded-2xl p-8 shadow-xl relative overflow-hidden transition-all duration-500 flex flex-col ${isVisible ? "opacity-100 translate-y-0 scale-105 z-10" : "opacity-0 translate-y-8 scale-95"}`} style={{ transitionDelay: "350ms" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <CreditCard size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Coût de la formation</h3>
              
              <div className="mb-6 flex-grow">
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  Dès 500.000<span className="text-xl text-gray-400"> F</span>
                </div>
                <div className="text-gray-300 text-sm mb-4 font-semibold uppercase tracking-wider">
                  L'année (L1, L2, L3: 600.000 F L'année)
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <div className="text-white text-sm font-semibold mb-1">Inscription & Ouverture de dossier :</div>
                  <div className="text-2xl font-bold text-[#CC1122]">50.000 FCFA</div>
                  <div className="text-gray-400 text-xs mt-1">*Inclut le Polo officiel IESC</div>
                </div>
              </div>

              <Link 
                to="/admissions" 
                className="inline-flex w-full justify-center items-center gap-2 px-6 py-4 bg-[#CC1122] text-white font-bold rounded-lg hover:bg-red-800 transition-colors shadow-lg mt-auto"
              >
                Postuler maintenant <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* CARTE 3 : AVANTAGES (Blanc) */}
          <div className={`bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
            <div className="w-16 h-16 rounded-2xl bg-[#CC1122]/10 flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle size={32} className="text-[#CC1122]" />
            </div>
            <h3 className="text-xl font-heading font-bold text-black mb-6">Nos Atouts</h3>
            <ul className="space-y-4 flex-grow">
              {[
                "Formations pratiques et professionnalisantes", 
                "Campus ultra-moderne et sécurisé", 
                "Salles informatiques de pointe", 
                "Stage garanti en fin de formation", 
                "Facilités de paiement par tranche"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={18} className="text-[#CC1122] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;