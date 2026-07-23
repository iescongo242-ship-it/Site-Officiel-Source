import SEO from "@/components/SEO";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FileText, CreditCard, CheckCircle, ArrowRight, Calendar,
  ClipboardList, Download, CheckCircle2, HelpCircle, Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsAdmission from "@/assets/students-admission.webp";
import studentsGroup from "@/assets/students-group.webp";

// Liste des documents nettoyée et professionnelle
const documents = [
  "Copie légalisée du dernier diplôme (BAC ou équivalent)",
  "Photocopie en couleur de l'acte de naissance",
  "Relevés de notes ",
  "4 photos d'identité format passeport",
  "Une enveloppe Kaki A4",
  "1 Paquet de rame A4",
  "1 Paquet de marqueur tableau blanc (non permanent)",
];

const faqs = [
  { q: "Quelles sont les dates d'inscription ?", a: "Les inscriptions sont ouvertes tout au long de l'année. La rentrée principale a lieu en octobre, avec une session de rattrapage en janvier." },
  { q: "Puis-je m'inscrire sans le BAC ?", a: "Le BAC est requis pour les programmes de Licence. Cependant, nous proposons des formations continues accessibles avec un niveau BAC sous conditions." },
  { q: "Les cours du soir sont-ils disponibles ?", a: "Oui, l'IESC propose des cours du soir pour les professionnels et fonctionnaires souhaitant poursuivre leur formation continue." },
  { q: "Y a-t-il des bourses disponibles ?", a: "L'IESC offre des facilités de paiement. Contactez le service des admissions pour discuter de votre situation personnelle." },
  { q: "Le stage est-il garanti ?", a: "Oui, un stage professionnel est garanti en fin de formation grâce à nos partenariats avec des entreprises locales et internationales." },
];

const AdmissionsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    filiere: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("form_admissions", JSON.stringify(formData));
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
       <SEO 
        title="Inscriptions et Admissions" 
        description="Rejoignez l'IESC Brazzaville. Remplissez le formulaire de pré-inscription en ligne, découvrez les pièces à fournir et validez votre dossier." 
      />
      <Navbar />

      <ZoomCarousel
        images={[
          { src: studentsAdmission, alt: "Admissions IESC" },
          { src: studentsGroup, alt: "Étudiants IESC" },
        ]}
        title="Admissions et Inscriptions"
        subtitle="Rejoignez l'IESC et construisez votre avenir professionnel. Pré-inscrivez-vous en ligne en 2 minutes."
      />

      {/* 1. EN-TÊTE D'URGENCE (CORRIGÉ : FOND BLANC, TEXTE NOIR) */}
      <div className="bg-white py-12 border-b-4 border-[#CC1122] shadow-sm relative z-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-black mb-6">
            La campagne d'admission est ouverte !
          </h2>
          <div className="inline-flex items-center gap-2 bg-[#CC1122] text-white font-bold py-3 px-8 rounded-full shadow-lg animate-pulse text-sm md:text-base cursor-default">
            🎁 Les pré-inscriptions restent ouvertes
          </div>
        </div>
      </div>

      {/* SECTION : 2 COLONNES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* COLONNE GAUCHE */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8 font-heading">
                Comment s'inscrire en 3 étapes ?
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CC1122]/10 flex items-center justify-center text-[#CC1122] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Formulaire en ligne</h3>
                    <p className="text-gray-600">Remplissez le formulaire ci-contre pour réserver votre place et tenter de gagner votre Kit IESC.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CC1122]/10 flex items-center justify-center text-[#CC1122] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Frais d'étude de dossier</h3>
                    <p className="text-gray-600">Réglez les frais d'inscription de <span className="font-bold text-[#CC1122]">50.000 FCFA</span> de manière sécurisée (Mobile Money accepté). Ce montant inclut votre Polo officiel IESC.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CC1122]/10 flex items-center justify-center text-[#CC1122] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Dépôt du dossier physique</h3>
                    <p className="text-gray-600">Passez sur notre campus avec les documents listés ci-dessous pour finaliser votre inscription.</p>
                  </div>
                </div>
              </div>

              {/* PIÈCES À FOURNIR */}
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#CC1122]">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <ClipboardList className="text-[#CC1122]" />
                  Pièces à fournir (Jour-J)
                </h3>
                <ul className="space-y-3">
                  {documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                      {/* 2. COCHES CORRIGÉES EN ROUGE IESC */}
                      <CheckCircle2 className="text-[#CC1122] shrink-0 mt-0.5" size={18} />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COLONNE DROITE : FORMULAIRE */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center text-black mb-2 font-heading">Formulaire de Pré-inscription</h3>
              <p className="text-center text-gray-500 mb-8 text-sm">Remplissez vos informations avec soin pour réserver votre place</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC1122] focus:border-transparent outline-none transition-all" onChange={(e) => setFormData({...formData, prenom: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC1122] focus:border-transparent outline-none transition-all" onChange={(e) => setFormData({...formData, nom: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone (WhatsApp) *</label>
                  <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC1122] focus:border-transparent outline-none transition-all" placeholder="+242 06 XXX XX XX" onChange={(e) => setFormData({...formData, telephone: e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Filière souhaitée *</label>
                 <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CC1122] focus:border-transparent outline-none bg-white transition-all cursor-pointer" onChange={(e) => setFormData({...formData, filiere: e.target.value})}>
                  <option value="">-- Sélectionnez une filière --</option>
                  
                  <optgroup label="Technologies de l'Information">
                    <option value="genie-informatique">Génie Informatique</option>
                    <option value="reseaux-telecoms">Réseaux et Télécommunications</option>
                    <option value="data-ia">Sciences des Données et Intelligence Artificielle</option>
                  </optgroup>
                  
                  <optgroup label="Sciences Appliquées & Santé">
                    <option value="qhse">QHSE (Qualité, Hygiène, Sécurité, Environnement)</option>
                    <option value="delegue-medical">Délégué Médical</option>
                  </optgroup>
                  
                  <optgroup label="Sciences de Gestion & Droit">
                    <option value="gestion-rh">Gestion des Ressources Humaines</option>
                    <option value="comptabilite">Comptabilité</option>
                    <option value="banque-assurance">Banque, Assurances et Finances</option>
                    <option value="logistique">Management de la Chaîne Logistique</option>
                    <option value="entrepreneuriat">Management Entrepreneuriat</option>
                    <option value="droit">Droit</option>
                  </optgroup>
                </select>
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#CC1122] hover:bg-red-800 text-white font-bold py-4 px-6 rounded-lg transition-colors mt-6 shadow-md">
                  <CreditCard size={20} />
                  Valider & Payer l'inscription (50.000 FCFA)
                </button>
                <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
                  Vous serez redirigé vers notre plateforme de paiement sécurisée.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* CALENDRIER ACADÉMIQUE */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-black mb-4">Calendrier Académique</h2>
            <div className="w-20 h-1 bg-[#CC1122] mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { period: "Juin – Septembre", event: "Inscriptions ouvertes", icon: FileText },
              { period: "Octobre", event: "Rentrée académique", icon: Calendar },
              { period: "Janvier", event: "Session de rattrapage", icon: ClipboardList },
              { period: "Décembre – Janvier", event: "Examens 1er semestre", icon: FileText },
              { period: "Mai – Juin", event: "Examens 2ème semestre", icon: FileText },
              { period: "Juillet – Septembre", event: "Stages en entreprise", icon: Download },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CC1122] group transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#CC1122]/10 flex items-center justify-center shrink-0 group-hover:bg-[#CC1122] transition-colors duration-300">
                  <item.icon size={22} className="text-[#CC1122] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#CC1122]">{item.period}</div>
                  <div className="text-black font-semibold mt-1">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-black mb-4">Questions Fréquentes</h2>
            <div className="w-20 h-1 bg-[#CC1122] mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-bold text-black pr-4">{faq.q}</span>
                  <span
                    className={`text-[#CC1122] transition-transform duration-300 shrink-0 text-2xl font-bold ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION HUMANISATION / AIDE (CORRIGÉ : TEXTE NOIR, ICÔNE ROUGE) */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="mx-auto text-[#CC1122] mb-6" size={56} />
          <h3 className="text-3xl font-bold text-black mb-4 font-heading">Besoin d'aide pour votre orientation ?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">Notre équipe des admissions est disponible pour vous accompagner dans le choix de votre filière et répondre à toutes vos questions.</p>
          <a href="https://wa.me/242065419861" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg hover:scale-105 transform">
            <Send size={20} />
            Discuter avec un conseiller sur WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;