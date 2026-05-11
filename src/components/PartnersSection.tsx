import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import partnerYtc from "@/assets/partner-ytc.jpg";
import partnerCsjm from "@/assets/partner-csjm.png";
import partnerZando from "@/assets/partner-zando.jpg";

const partners = [
  { name: "Yasmina Training Corp", logo: partnerYtc },
  { name: "Complexe Scolaire Jacqueline Mamoni", logo: partnerCsjm },
  { name: "Zando Market", logo: partnerZando },
];

const PartnersSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nos Partenaires
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Des collaborations solides avec des institutions de renom pour garantir l'excellence de nos formations
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center max-w-4xl mx-auto"
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className={`group bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center gap-4 card-hover transition-all duration-500 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                width={512}
                height={512}
                className="w-24 h-24 object-contain transition-all duration-300"
              />
              <span className="text-sm text-muted-foreground text-center font-medium leading-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
