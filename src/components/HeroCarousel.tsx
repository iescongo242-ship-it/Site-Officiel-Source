import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero3.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero002.webp";

const slides = [
  {
    image: hero1,
    title: "Excellence Académique",
    subtitle: "Formez-vous aux métiers de demain avec des programmes de qualité internationale",
    cta: "Découvrir nos programmes",
    href: "/formations",
  },
  {
    image: hero2,
    title: "Votre Réussite, Notre Mission",
    subtitle: "Rejoignez une communauté de diplômés qui façonnent l'avenir du Congo",
    cta: "S'inscrire maintenant",
    href: "/admissions",
  },
  {
    image: hero3,
    title: "Un Campus Moderne",
    subtitle: "Des infrastructures adaptées pour un apprentissage optimal et innovant",
    cta: "Visiter le campus",
    href: "/campus",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="accueil" className="relative w-full h-[500px] lg:h-auto lg:aspect-video overflow-hidden bg-black">
      {/* La boîte s'adapte parfaitement au 16:9 sur ordinateur */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                    i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-lg md:text-xl text-gray-100 mb-8 font-body leading-relaxed transition-all duration-700 delay-200 ${
                    i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
                
                <a
                  href={slide.href}
                  className={`inline-flex items-center px-8 py-4 bg-iesc-red text-white font-semibold rounded-md hover:bg-iesc-blue transition-colors duration-500 delay-400 ${
                    i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.cta}
                </a>
                
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-iesc-red transition-colors"
        aria-label="Précédent"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-iesc-red transition-colors"
        aria-label="Suivant"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-iesc-red w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;