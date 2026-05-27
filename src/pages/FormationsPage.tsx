import { Link } from "react-router-dom";
import {
  Monitor, Users, Calculator, Landmark, Network, Briefcase, Scale, TruckIcon,
  Clock, Award, BookOpen, CheckCircle, ArrowRight, CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsClassroom from "@/assets/students-classroom.jpg";
import studentsLab from "@/assets/students-lab.jpg";
import studentsLibrary from "@/assets/students-library.jpg";

// NOTRE BASE DE DONNÉES CATÉGORISÉE (Style WW-Academy)
const categories = [
  {
    title: "Sciences de Gestion & Droit",
    description: "Des formations conçues pour former les futurs cadres et dirigeants d'entreprises. Les talents en gestion sont cruciaux pour la croissance de toute organisation.",
    programs: [
      {
        id: "ressources-humaines",
        icon: Users,
        title: "Gestion des Ressources Humaines",
        description: "Maîtrisez les techniques de management du capital humain, du recrutement à la gestion des carrières.",
        duration: "3 ans (Licence) / 5 ans (Master)",
        price: "300.000 FCFA",
        careers: ["Responsable RH", "Chargé de recrutement", "Gestionnaire de paie", "Responsable formation"],
        modules: ["Droit du travail", "Gestion des compétences", "Recrutement et intégration", "Paie"],
      },
      {
        id: "comptabilite",
        icon: Calculator,
        title: "Comptabilité",
        description: "Formation approfondie en comptabilité générale, analytique, fiscalité et audit pour devenir un expert des chiffres.",
        duration: "3 ans (Licence) / 5 ans (Master)",
        price: "300.000 FCFA",
        careers: ["Comptable", "Contrôleur de gestion", "Responsable financier", "Auditeur junior"],
        modules: ["Comptabilité générale", "Fiscalité", "Audit comptable", "Finance d'entreprise"],
      },
      {
        id: "banque-finance",
        icon: Landmark,
        title: "Banque, Assurance & Finances",
        description: "Acquérez les compétences nécessaires pour évoluer dans le secteur bancaire et les assurances.",
        duration: "3 ans (Licence) / 5 ans (Master)",
        price: "300.000 FCFA",
        careers: ["Chargé de clientèle", "Agent d'assurance", "Analyste financier", "Conseiller financier"],
        modules: ["Économie monétaire", "Techniques bancaires", "Assurance et prévoyance", "Maths financières"],
      },
      {
        id: "logistique",
        icon: TruckIcon,
        title: "Management de la Chaîne Logistique",
        description: "Optimisez les flux de marchandises et d'informations au sein des entreprises grâce à la supply chain.",
        duration: "3 ans (Licence) / 5 ans (Master)",
        price: "300.000 FCFA",
        careers: ["Responsable logistique", "Supply Chain Manager", "Gestionnaire de stocks", "Planificateur"],
        modules: ["Gestion des stocks", "Transport", "Approvisionnement", "Logistique internationale"],
      },
      {
        id: "management",
        icon: Briefcase,
        title: "Management & Entrepreneuriat",
        description: "Développez vos compétences en gestion d'entreprise, leadership et création de projets.",
        duration: "3 ans (Licence) / 5 ans (Master)",
        price: "300.000 FCFA",
        careers: ["Entrepreneur", "Manager d'entreprise", "Chef de projet", "Business Developer"],
        modules: ["Management stratégique", "Création d'entreprise", "Marketing", "Leadership"],
      },
      {
        id: "droit",
        icon: Scale,
        title: "Droit",
        description: "Formation juridique complète couvrant le droit des affaires, civil et du travail.",
        duration: "3 ans (Licence) / 5 ans (Master)",
        price: "300.000 FCFA",
        careers: ["Juriste d'entreprise", "Assistant juridique", "Consultant juridique", "Clerc d'avocat"],
        modules: ["Droit civil", "Droit des affaires", "Droit du travail", "Droit pénal"],
      },
    ]
  },
  {
    title: "Technologies de l'Information",
    description: "La demande pour les professionnels des TIC sur le marché de l'emploi est actuellement très élevée et en forte croissance.",
    programs: [
      {
        id: "genie-informatique",
        icon: Monitor,
        title: "Génie Informatique",
        description: "Formation complète en développement logiciel, bases de données et technologies web et mobile.",
        duration: "3 ans (Licence) / 5 ans (Master)",
        price: "300.000 FCFA",
        careers: ["Développeur web et mobile", "Administrateur systèmes", "Analyste programmeur", "Chef de projet IT"],
        modules: ["Algorithmique", "Bases de données", "Développement web", "Réseaux informatiques"],
      },
      {
        id: "reseaux-telecom",
        icon: Network,
        title: "Réseaux et Télécommunications",
        description: "Devenez expert en infrastructure réseau, cybersécurité et systèmes de télécommunication modernes.",
        duration: "3 ans (Licence) / 5 ans (Master)",
        price: "300.000 FCFA",
        careers: ["Administrateur réseaux", "Technicien télécoms", "Responsable infrastructure IT", "Consultant cybersécurité"],
        modules: ["Architecture réseau", "Protocoles TCP/IP", "Sécurité des réseaux", "Télécommunications"],
      },
    ]
  }
];

const FormationsPage = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <ZoomCarousel
        images={[
          { src: studentsClassroom, alt: "Étudiants en salle de cours" },
          { src: studentsLab, alt: "Laboratoire informatique" },
          { src: studentsLibrary, alt: "Bibliothèque" },
        ]}
        title="Nos Formations"
        subtitle="8 filières professionnelles conçues pour former les cadres compétents dont le Congo a besoin"
      />

      {/* Overview stats (Gardé intact) */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4" ref={statsRef}>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { icon: BookOpen, value: "8", label: "Filières disponibles" },
              { icon: Clock, value: "3-5 ans", label: "Durée de formation" },
              { icon: Award, value: "100%", label: "Stage garanti" },
              { icon: CheckCircle, value: "300.000 FCFA", label: "Frais de scolarité L1" },
            ].map((stat, i) => (
              <div key={i} className="text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-full bg-[#1A4B84]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1A4B84] group-hover:text-white transition-colors duration-300">
                  <stat.icon size={22} className="text-[#1A4B84] group-hover:text-white transition-colors" />
                </div>
                <div className="text-2xl font-heading font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PROGRAMS CATEGORIZED */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="mb-24">
              
              {/* Titre de la catégorie */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B84] font-heading mb-4">{cat.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">{cat.description}</p>
                <div className="w-20 h-1 bg-[#CC1122] mx-auto mt-6" />
              </div>

              {/* Liste des programmes */}
              <div className="space-y-12">
                {cat.programs.map((prog, i) => (
                  <ProgramCard key={prog.id} prog={prog} index={i} />
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA FINAL (Corrigé vers /admissions) */}
      <section className="bg-[#1A4B84] py-16 border-t-4 border-[#CC1122]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Inscrivez-vous dès maintenant et rejoignez la prochaine promotion de l'IESC.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#CC1122] text-white font-bold rounded-md hover:bg-[#A00D1A] hover:scale-105 transition-all shadow-lg"
          >
            Postuler maintenant
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// COMPOSANT PROGRAM CARD MIS À JOUR
const ProgramCard = ({ prog, index }: { prog: any; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      id={prog.id}
      className={`scroll-mt-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className={`max-w-6xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow ${index % 2 === 1 ? "bg-gray-50" : ""}`}>
        <div className="grid lg:grid-cols-3 gap-0">
          
          {/* Colonne 1 : Titre et Description */}
          <div className="lg:col-span-1 p-8 border-r border-gray-100 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#1A4B84]/10 flex items-center justify-center">
                <prog.icon size={32} className="text-[#1A4B84]" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight">{prog.title}</h3>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{prog.description}</p>
            
            {/* Badges d'information */}
            <div className="space-y-2 mb-8 bg-white p-4 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                <Clock size={16} className="text-[#1A4B84]" /> {prog.duration}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                <CheckCircle2 size={16} className="text-[#CC1122]" /> {prog.price} / An
              </div>
            </div>

            {/* Bouton Magique */}
            <Link
              to="/admissions"
              className="mt-auto inline-flex justify-center items-center gap-2 w-full py-3 bg-[#1A4B84] text-white font-bold rounded-lg hover:bg-[#113259] transition-colors"
            >
              S'inscrire à cette filière
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Colonne 2 : Modules */}
          <div className="p-8 border-r border-gray-100 bg-white">
            <h4 className="font-heading font-bold text-[#1A4B84] mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={18} /> Modules principaux
            </h4>
            <ul className="space-y-3">
              {prog.modules.map((m: string, j: number) => (
                <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-[#CC1122] shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Débouchés */}
          <div className="p-8 bg-gray-50">
            <h4 className="font-heading font-bold text-[#1A4B84] mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
              <Award size={18} /> Débouchés professionnels
            </h4>
            <ul className="space-y-3">
              {prog.careers.map((c: string, j: number) => (
                <li key={j} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0 mt-1.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FormationsPage;