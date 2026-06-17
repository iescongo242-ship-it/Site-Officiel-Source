import { Target, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="apropos" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            À Propos de l'IESC
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            L'Institut d'Enseignement Supérieur du Congo est un établissement privé agréé qui forme
            des cadres compétents et opérationnels à travers des formations professionnelles orientées
            sur les compétences.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card rounded-lg p-8 shadow-md border border-border card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <Target size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">Notre Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Former des professionnels qualifiés, responsables et innovants, capables de répondre
              efficacement aux besoins des entreprises, des administrations et de l'économie nationale,
              à travers des formations axées sur les compétences, la pratique et l'employabilité.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-md border border-border card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <Eye size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">Notre Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Devenir une institution de référence en enseignement supérieur au Congo et en Afrique
              centrale, reconnue pour la qualité de ses formations, l'excellence de ses diplômés et sa
              contribution active au développement économique et social par le capital humain.
            </p>
          </div>
        </div>

        {/* Stats with counter animation */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto transition-all duration-700 delay-300 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "8+", label: "Filières" },
            { value: "200+", label: "Étudiants" },
            { value: "100%", label: "Stage garanti" },
            { value: "Dès 50.000", label: "FCFA en L1/L2 (60.000 en L3)" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
