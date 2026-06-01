import {
  Monitor, Users, Calculator, Landmark, Network, Briefcase, Scale, TruckIcon,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const programs = [
  { icon: Monitor, title: "Génie Informatique", careers: ["Développeur web et mobile", "Administrateur systèmes", "Chef de projet informatique", "Consultant en transformation digitale"] },
  { icon: Users, title: "Gestion des Ressources Humaines", careers: ["Responsable RH", "Chargé de recrutement", "Gestionnaire de paie", "Consultant RH"] },
  { icon: Calculator, title: "Comptabilité", careers: ["Comptable", "Contrôleur de gestion", "Responsable financier", "Auditeur junior"] },
  { icon: Landmark, title: "Banque, Assurance & Finances", careers: ["Agent d'assurance", "Analyste financier", "Cadre bancaire", "Gestionnaire de portefeuille"] },
  { icon: Network, title: "Réseaux et Télécommunication", careers: ["Administrateur réseaux", "Technicien télécoms", "Consultant en cybersécurité", "Responsable infrastructure IT"] },
  { icon: TruckIcon, title: "Management de la Chaîne Logistique", careers: ["Responsable logistique", "Supply Chain Manager", "Gestionnaire des stocks", "Planificateur logistique"] },
  { icon: Briefcase, title: "Management & Entrepreneuriat", careers: ["Entrepreneur", "Chef de projet", "Business Developer", "Responsable commercial"] },
  { icon: Scale, title: "Droit", careers: ["Juriste d'entreprise", "Assistant juridique", "Consultant juridique", "Clerc d'avocat"] },
];

const ProgramsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05);

  return (
    <section id="programmes" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nos Programmes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez nos 8 filières professionnelles conçues pour répondre aux besoins du marché de l'emploi
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <div
              key={i}
              className={`card-hover group bg-card rounded-lg border border-border overflow-hidden transition-all duration-500 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="h-2 bg-primary group-hover:bg-accent transition-colors" />
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <prog.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-3 text-lg">{prog.title}</h3>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Débouchés</p>
                <ul className="space-y-1">
                  {prog.careers.map((c, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-iesc-blue mt-1.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
