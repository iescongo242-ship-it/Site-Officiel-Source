import { Link } from "react-router-dom";
import {
  Monitor, Users, Calculator, Landmark, Network, Briefcase, Scale, TruckIcon,
  Clock, Award, BookOpen, CheckCircle, ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsClassroom from "@/assets/students-classroom.jpg";
import studentsLab from "@/assets/students-lab.jpg";
import studentsLibrary from "@/assets/students-library.jpg";

const programs = [
  {
    id: "genie-informatique",
    icon: Monitor,
    title: "Génie Informatique",
    description: "Formation complète en développement logiciel, administration systèmes et réseaux, bases de données et technologies web et mobile.",
    duration: "3 ans (Licence) / 5 ans (Master)",
    careers: ["Développeur web et mobile", "Développeur logiciel", "Administrateur systèmes", "Analyste programmeur", "Chef de projet informatique", "Consultant en transformation digitale"],
    modules: ["Algorithmique et programmation", "Bases de données", "Développement web (HTML, CSS, JS)", "Réseaux informatiques", "Systèmes d'exploitation", "Génie logiciel", "Sécurité informatique", "Intelligence artificielle"],
  },
  {
    id: "ressources-humaines",
    icon: Users,
    title: "Gestion des Ressources Humaines",
    description: "Maîtrisez les techniques de management du capital humain, du recrutement à la gestion des carrières en passant par le droit du travail.",
    duration: "3 ans (Licence) / 5 ans (Master)",
    careers: ["Responsable RH", "Chargé de recrutement", "Gestionnaire de paie", "Responsable formation", "Consultant RH", "Assistant RH"],
    modules: ["Droit du travail", "Gestion des compétences", "Recrutement et intégration", "Paie et administration du personnel", "Communication interne", "Psychologie du travail"],
  },
  {
    id: "comptabilite",
    icon: Calculator,
    title: "Comptabilité",
    description: "Formation approfondie en comptabilité générale, analytique, fiscalité et audit pour devenir un expert des chiffres.",
    duration: "3 ans (Licence) / 5 ans (Master)",
    careers: ["Comptable", "Aide-comptable", "Contrôleur de gestion", "Responsable financier", "Consultant comptable", "Auditeur junior"],
    modules: ["Comptabilité générale", "Comptabilité analytique", "Fiscalité", "Audit comptable", "Droit des affaires", "Finance d'entreprise"],
  },
  {
    id: "banque-finance",
    icon: Landmark,
    title: "Banque, Assurance & Finances",
    description: "Acquérez les compétences nécessaires pour évoluer dans le secteur bancaire, les assurances et la gestion financière.",
    duration: "3 ans (Licence) / 5 ans (Master)",
    careers: ["Chargé de clientèle bancaire", "Agent d'assurance", "Analyste financier", "Conseiller financier", "Cadre bancaire", "Gestionnaire de portefeuille"],
    modules: ["Économie monétaire et bancaire", "Techniques bancaires", "Gestion de portefeuille", "Assurance et prévoyance", "Analyse financière", "Mathématiques financières"],
  },
  {
    id: "reseaux-telecom",
    icon: Network,
    title: "Réseaux et Télécommunication",
    description: "Devenez expert en infrastructure réseau, cybersécurité et systèmes de télécommunication modernes.",
    duration: "3 ans (Licence) / 5 ans (Master)",
    careers: ["Administrateur réseaux", "Technicien télécoms", "Responsable infrastructure IT", "Consultant en cybersécurité", "Support technique réseaux", "Technicien réseaux"],
    modules: ["Architecture réseau", "Protocoles TCP/IP", "Sécurité des réseaux", "Télécommunications", "Administration Linux/Windows Server", "Cloud computing"],
  },
  {
    id: "logistique",
    icon: TruckIcon,
    title: "Management de la Chaîne Logistique",
    description: "Optimisez les flux de marchandises et d'informations au sein des entreprises grâce à une formation complète en supply chain.",
    duration: "3 ans (Licence) / 5 ans (Master)",
    careers: ["Responsable logistique", "Supply Chain Manager", "Gestionnaire des stocks", "Responsable des approvisionnements", "Planificateur logistique", "Consultant en logistique"],
    modules: ["Gestion des stocks", "Transport et distribution", "Approvisionnement", "Logistique internationale", "Systèmes d'information logistique", "Lean management"],
  },
  {
    id: "management",
    icon: Briefcase,
    title: "Management & Entrepreneuriat",
    description: "Développez vos compétences en gestion d'entreprise, leadership et création de projets entrepreneuriaux.",
    duration: "3 ans (Licence) / 5 ans (Master)",
    careers: ["Entrepreneur", "Manager d'entreprise", "Chef de projet", "Consultant en management", "Business Developer", "Responsable commercial"],
    modules: ["Management stratégique", "Création d'entreprise", "Marketing", "Gestion de projet", "Leadership", "Négociation commerciale"],
  },
  {
    id: "droit",
    icon: Scale,
    title: "Droit",
    description: "Formation juridique complète couvrant le droit des affaires, le droit civil et le droit du travail pour exercer dans le domaine juridique.",
    duration: "3 ans (Licence) / 5 ans (Master)",
    careers: ["Juriste d'entreprise", "Assistant juridique", "Chargé des affaires juridiques", "Clerc d'avocat", "Consultant juridique", "Greffier"],
    modules: ["Droit civil", "Droit des affaires", "Droit du travail", "Droit pénal", "Droit administratif", "Procédure civile"],
  },
];

const FormationsPage = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
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

      {/* Student images gallery */}
      <section className="py-16 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { img: studentsClassroom, title: "Cours magistraux", desc: "Enseignement théorique de qualité" },
              { img: studentsLab, title: "Travaux pratiques", desc: "Laboratoire informatique moderne" },
              { img: studentsLibrary, title: "Recherche & Études", desc: "Bibliothèque bien fournie" },
            ].map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg group">
                <div className="overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-4 bg-card border-t border-border">
                  <h3 className="font-heading font-bold text-foreground text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4" ref={statsRef}>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { icon: BookOpen, value: "8", label: "Filières disponibles" },
              { icon: Clock, value: "3-5 ans", label: "Durée de formation" },
              { icon: Award, value: "100%", label: "Stage garanti" },
              { icon: CheckCircle, value: "300 000 FCFA en L1", label: "payable par tranche suivant le mois ou le semestre" },
            ].map((stat, i) => (
              <div key={i} className="text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <stat.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((prog, i) => (
              <ProgramCard key={prog.id} prog={prog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Inscrivez-vous dès maintenant et rejoignez la prochaine promotion de l'IESC
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-semibold rounded-md hover:brightness-110 hover:scale-105 transition-all"
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

const ProgramCard = ({ prog, index }: { prog: typeof programs[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      id={prog.id}
      className={`scroll-mt-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${index % 2 === 1 ? "section-alt -mx-4 px-4 py-12 md:-mx-8 md:px-8 rounded-2xl" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center hover:rotate-6 transition-transform duration-300">
                <prog.icon size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground">{prog.title}</h2>
                <span className="text-sm text-gold font-medium">{prog.duration}</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{prog.description}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent hover:gap-3 transition-all"
            >
              S'inscrire à cette filière
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              Modules principaux
            </h3>
            <ul className="space-y-2">
              {prog.modules.map((m, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
              Débouchés professionnels
            </h3>
            <ul className="space-y-2">
              {prog.careers.map((c, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
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
