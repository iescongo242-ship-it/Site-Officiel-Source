import { FileText, CreditCard, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AdmissionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="admissions" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Admissions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Rejoignez l'IESC et construisez votre avenir professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Dossier */}
          <div className={`bg-card rounded-lg p-8 shadow-md border border-border card-hover transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
            <div className="w-14 h-14 rounded-full bg-iesc-blue flex items-center justify-center mb-6">
              <FileText size={28} className="text-iesc-blue-foreground" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Dossier d'inscription</h3>
            <ul className="space-y-3">
              {["Copie du dernier diplôme (BAC)", "Enveloppe Kaki A4", "Un paquet de RAM A4", "Un paquet de marqueurs pour tableau blanc", "Photocopie en couleur de l'acte de naissance"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-iesc-blue mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Frais */}
          <div className={`bg-primary rounded-lg p-8 shadow-md card-hover relative overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`} style={{ transitionDelay: "350ms" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-6">
                <CreditCard size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-foreground mb-4">Coût de la formation</h3>
              <div className="text-5xl font-heading font-bold text-iesc-blue mb-2">300.000</div>
              <div className="text-primary-foreground/80 text-lg mb-2">FCFA en L1 payable par tranche suivant le mois ou le semestre</div>
              <div className="text-primary-foreground/70 text-sm mb-6">Montant inscription: 30.000 FCFA</div>
              <a href="#contact" className="inline-flex w-full justify-center items-center px-6 py-3 bg-iesc-blue text-iesc-blue-foreground font-semibold rounded-md hover:brightness-110 transition-all">
                Postuler maintenant
              </a>
            </div>
          </div>

          {/* Avantages */}
          <div className={`bg-card rounded-lg p-8 shadow-md border border-border card-hover transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
              <CheckCircle size={28} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Nos Atouts</h3>
            <ul className="space-y-3">
              {["Formations théoriques et pratiques", "Caméras de surveillance", "Bibliothèque moderne", "Stage garanti en fin de formation", "Cours du soir disponibles"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-iesc-blue mt-0.5 shrink-0" />
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
