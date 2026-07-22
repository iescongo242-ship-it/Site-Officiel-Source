import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Monitor, Users, Calculator, Landmark, Network, Briefcase, Scale, TruckIcon,
  Clock, Award, BookOpen, CheckCircle, ArrowRight, CheckCircle2,
  Brain, Shield, HeartPulse
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsClassroom from "@/assets/students-classroom.webp";
import studentsLab from "@/assets/students-lab.webp";
import librarytravail from "@/assets/Espace-travail.webp";
import FormCompta from "@/assets/comptabilité-3.jpg";
import FormDroit from "@/assets/Droit2.webp";
import FormFinance from "@/assets/finance-banque-assurance-2.webp";
import FormRh from "@/assets/rh-1.webp";
import FormQHSE from "@/assets/QHSE-f.webp";
import FormIASD from "@/assets/IASD-1.webp";
import FormIG from "@/assets/GénieInformatique1.webp";
import FormRt from "@/assets/Rt-2.webp";
import FormTL from "@/assets/Management-Chaîne-Logistique1.webp";
import FormME from "@/assets/Management-Entrepreneuriat2.webp";



// NOTRE BASE DE DONNÉES CATÉGORISÉE AVEC IMAGES INTÉGRÉES
const categories = [
  {
    title: "Sciences de Gestion et Droit",
    description: "Des formations conçues pour former les futurs cadres et dirigeants d'entreprises. Les talents en gestion sont cruciaux pour la croissance de toute organisation.",
    programs: [
      {
        id: "ressources-humaines", icon: Users, image: FormRh, title: "Gestion des Ressources Humaines",
        description: "Maîtrisez les techniques de management du capital humain, du recrutement à la gestion des carrières.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Responsable RH", "Chargé de recrutement", "Gestionnaire de paie", "Responsable formation"],
        modules: ["Droit du travail", "Gestion des compétences", "Recrutement et intégration", "Paie"],
      },
      {
        id: "comptabilite", icon: Calculator, image: FormCompta, title: "Comptabilité",
        description: "Formation approfondie en comptabilité générale, analytique, fiscalité et audit pour devenir un expert des chiffres.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Comptable", "Contrôleur de gestion", "Responsable financier", "Auditeur junior"],
        modules: ["Comptabilité générale", "Fiscalité", "Audit comptable", "Finance d'entreprise"],
      },
      {
        id: "banque-finance", icon: Landmark, image: FormFinance, title: "Banque, Assurance et Finances",
        description: "Acquérez les compétences nécessaires pour évoluer dans le secteur bancaire et les assurances.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Chargé de clientèle", "Agent d'assurance", "Analyste financier", "Conseiller financier"],
        modules: ["Économie monétaire", "Techniques bancaires", "Assurance et prévoyance", "Maths financières"],
      },
      {
        id: "logistique", icon: TruckIcon, image: FormTL, title: "Management de la Chaîne Logistique",
        description: "Optimisez les flux de marchandises et d'informations au sein des entreprises grâce à la supply chain.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Responsable logistique", "Supply Chain Manager", "Gestionnaire de stocks", "Planificateur"],
        modules: ["Gestion des stocks", "Transport", "Approvisionnement", "Logistique internationale"],
      },
      {
        id: "management", icon: Briefcase, image: FormME, title: "Management et Entrepreneuriat",
        description: "Développez vos compétences en gestion d'entreprise, leadership et création de projets.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Entrepreneur", "Manager d'entreprise", "Chef de projet", "Business Developer"],
        modules: ["Management stratégique", "Création d'entreprise", "Marketing", "Leadership"],
      },
      {
        id: "droit", icon: Scale, image: FormDroit, title: "Droit",
        description: "Formation juridique complète couvrant le droit des affaires, civil et du travail.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Juriste d'entreprise", "Assistant juridique", "Consultant juridique", "Clerc d'avocat"],
        modules: ["Droit civil", "Droit des affaires", "Droit du travail", "Droit pénal"],
      },
    ]
  },
  {
    title: "Technologies de l'Information",
    description: "La demande pour les professionnels des TIC et de la donnée sur le marché de l'emploi est en forte croissance.",
    programs: [
      {
        id: "genie-informatique", icon: Monitor, image: FormIG, title: "Génie Informatique",
        description: "Formation complète en développement logiciel, administration systèmes et réseaux, bases de données et technologies web et mobile.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Développeur web et mobile", "Développeur logiciel", "Administrateur systèmes", "Chef de projet IT"],
        modules: ["Algorithmique et programmation", "Bases de données", "Développement web", "Réseaux informatiques"],
      },
      {
        id: "reseaux-telecom", icon: Network, image: FormRt, title: "Réseaux et Télécommunication",
        description: "Devenez expert en infrastructure réseau, cybersécurité et systèmes de télécommunication modernes.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Administrateur réseaux", "Technicien télécoms", "Responsable infrastructure IT", "Consultant en cybersécurité"],
        modules: ["Architecture réseau", "Protocoles TCP/IP", "Sécurité des réseaux", "Télécommunications"],
      },
      {
        id: "data-ia", icon: Brain, image: FormIASD, title: "Sciences des Données et Intelligence Artificielle",
        description: "Plongez au cœur de la révolution numérique en maîtrisant l'analyse de données massives et les algorithmes d'IA.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Data Scientist", "Data Analyst", "Ingénieur IA", "Consultant Big Data"],
        modules: ["Machine Learning", "Programmation Python/R", "Statistiques appliquées", "Analyse de données (Big Data)"],
      }
    ]
  },
  {
    title: "Sciences Appliquées",
    description: "Des formations d'excellence répondant aux exigences strictes des secteurs de la santé, de l'industrie et de l'environnement.",
    programs: [
      {
        id: "qhse", icon: Shield, image: FormQHSE, title: "QHSE (Qualité, Hygiène, Sécurité, Environnement)",
        description: "Devenez l'expert indispensable en prévention des risques professionnels, normes de qualité et respect de l'environnement.",
        duration: "3 ans (Licence) / 5 ans (Master)", price: "L1/L2 : 500.000 F / An | L3 : 600.000 F",
        careers: ["Responsable QHSE", "Contrôleur qualité", "Auditeur environnemental", "Consultant en prévention des risques"],
        modules: ["Normes ISO (9001, 14001, 45001)", "Ergonomie et sécurité au travail", "Droit de l'environnement", "Gestion des déchets"],
      },
    ]
  }
];

// NOTE: J'ajoute un faux import pour studentsGroup pour que ça ne bugge pas, assure-toi de l'avoir en haut
import studentsGroup from "@/assets/students-group.jpg";

const FormationsPage = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
       <SEO 
        title="Nos Formations & Filières" 
        description="Découvrez nos filières d'excellence à l'IESC : Génie Informatique, Gestion RH, Comptabilité, Banque & Assurance, Logistique et Droit. Diplômes reconnus." 
      />
      <Navbar />

      <ZoomCarousel
        images={[
          { src: studentsClassroom, alt: "Étudiants en salle de cours" },
          { src: studentsLab, alt: "Laboratoire informatique" },
          { src: librarytravail, alt: "Espaces de Travail et Coworking" },
        ]}
        title="Nos Formations"
        subtitle="10 filières professionnelles conçues pour former les cadres compétents dont le Congo a besoin"
      />

      <section className="relative z-30 -mt-20 mb-20 px-4">
        <div className="container mx-auto" ref={statsRef}>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { icon: BookOpen, value: "10", label: "Filières disponibles" },
              { icon: Clock, value: "3 ans", label: "Durée de formation" },
              { icon: Award, value: "100%", label: "Stage garanti" },
              { icon: CheckCircle, value: "Dès 500.000 F", label: "L'année (Scolarité)" },,
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:-translate-y-2 hover:shadow-xl transition-all duration-300" 
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-[#CC1122]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#CC1122] transition-colors duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                  <stat.icon size={28} className="text-[#CC1122] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-[#CC1122] mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PROGRAMS CATEGORIZED */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="mb-24">
              
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black font-heading mb-4">{cat.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">{cat.description}</p>
                <div className="w-20 h-1 bg-[#CC1122] mx-auto mt-6" />
              </div>

              <div className="space-y-12">
                {cat.programs.map((prog, i) => (
                  <ProgramCard key={prog.id} prog={prog} index={i} />
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      <section className="bg-[#CC1122] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-red-100 mb-8 max-w-lg mx-auto">
            Inscrivez-vous dès maintenant et rejoignez la prochaine promotion de l'IESC.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A4B84] text-white font-bold rounded-md hover:bg-[#113259] hover:scale-105 transition-all shadow-lg"
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

// NOUVEAU COMPOSANT PROGRAM CARD AVEC IMAGE EN HAUT DE LA COLONNE
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
          
          {/* Colonne 1 : IMAGE + Titre et Description */}
          <div className="lg:col-span-1 border-r border-gray-100 flex flex-col group cursor-default">
            
            {/* L'IMAGE SPÉCIFIQUE À LA FILIÈRE (Correction Mobile) */}
            {/* h-64 sur téléphone (plus haut) et lg:h-52 sur PC (plus compact) */}
            <div className="relative h-64 lg:h-52 w-full overflow-hidden bg-gray-100">
              
              <img 
                src={prog.image} 
                alt={prog.title} 
                // Ajout de object-[center_20%] pour ne pas couper le haut des photos !
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700" 
              />
              
              {/* Petit voile noir ultra-léger pour un effet Premium qui disparaît au survol */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

              {/* L'icône posée élégamment sur l'image (décalée un peu à gauche pour les petits écrans) */}
              <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center border border-gray-100 z-10 group-hover:bg-[#CC1122] transition-colors duration-300">
                <prog.icon size={26} className="text-[#CC1122] group-hover:text-white transition-colors duration-300" />
              </div>
            </div>

            <div className="p-8 pt-10 flex-grow flex flex-col">
              {/* Le reste de ton code ne bouge pas... */}
              <h3 className="text-xl font-heading font-bold text-black leading-tight mb-4 group-hover:text-[#CC1122] transition-colors">{prog.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">{prog.description}</p>
              
              {/* Badges d'information */}
              <div className="space-y-2 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <Clock size={16} className="text-black" /> {prog.duration}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700 font-semibold">
                  <CheckCircle2 size={16} className="text-[#CC1122]" /> {prog.price}
                </div>
              </div>

              {/* Boutons d'inscription */}
              <Link
                to="/admissions"
                className="mt-auto inline-flex justify-center items-center gap-2 w-full py-3 bg-[#CC1122] text-white font-bold rounded-lg hover:bg-red-800 transition-colors shadow-md"
              >
                S'inscrire à cette filière
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Colonne 2 : Modules */}
          <div className="p-8 border-r border-gray-100 bg-white">
            <h4 className="font-heading font-bold text-black mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={18} className="text-black" /> Modules principaux
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
          <div className="p-8 bg-white">
            <h4 className="font-heading font-bold text-black mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
              <Award size={18} className="text-black" /> Débouchés professionnels
            </h4>
            <ul className="space-y-3">
              {prog.careers.map((c: string, j: number) => (
                <li key={j} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#CC1122] shrink-0 mt-1.5" />
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