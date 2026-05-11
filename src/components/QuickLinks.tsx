import { GraduationCap, BookOpen, Globe, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const links = [
  { icon: BookOpen, title: "Licence (BAC+3)", description: "Programmes de premier cycle dans 8 filières professionnelles", href: "#programmes" },
  { icon: GraduationCap, title: "Master (BAC+5)", description: "Formations avancées pour les cadres de demain", href: "#programmes" },
  { icon: Globe, title: "Formation Continue", description: "Cours du soir pour professionnels et fonctionnaires", href: "#programmes" },
  { icon: Award, title: "Stages Garantis", description: "Un stage professionnel garanti en fin de formation", href: "#admissions" },
];

const QuickLinks = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative z-20 -mt-16">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`card-hover group bg-card rounded-lg p-6 shadow-lg border border-border transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <link.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{link.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
