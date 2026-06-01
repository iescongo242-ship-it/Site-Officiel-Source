import { Link } from "react-router-dom";
import {
  Monitor, BookOpen, Shield, Wifi, Users, MapPin, ArrowRight,
  Camera, Library, GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import campusImg from "@/assets/hero-3.jpg";
import labImg from "@/assets/campus-lab.jpg";
import libraryImg from "@/assets/campus-library.jpg";
import classroomImg from "@/assets/campus-classroom.jpg";

const facilities = [
  {
    image: classroomImg,
    title: "Salles de cours modernes",
    description: "Des salles climatisées équipées de vidéoprojecteurs et tableaux blancs interactifs pour un enseignement de qualité.",
    icon: BookOpen,
  },
  {
    image: labImg,
    title: "Laboratoire informatique",
    description: "Un laboratoire équipé d'ordinateurs performants avec accès internet haut débit pour les travaux pratiques.",
    icon: Monitor,
  },
  {
    image: libraryImg,
    title: "Bibliothèque",
    description: "Une bibliothèque riche en ouvrages académiques et professionnels, avec des espaces de lecture confortables.",
    icon: Library,
  },
];

const features = [
  { icon: Wifi, title: "Wi-Fi haut débit", desc: "Accès internet sur tout le campus" },
  { icon: Camera, title: "Vidéosurveillance", desc: "Sécurité assurée 24h/24" },
  { icon: Shield, title: "Environnement sécurisé", desc: "Gardiennage permanent" },
  { icon: Users, title: "Espaces collaboratifs", desc: "Zones de travail en groupe" },
  { icon: GraduationCap, title: "Encadrement qualifié", desc: "Professeurs expérimentés" },
  { icon: MapPin, title: "Emplacement central", desc: "Au cœur de Poto-Poto, Brazzaville" },
];

const CampusPage = () => {
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ZoomCarousel
        images={[
          { src: campusImg, alt: "Campus IESC" },
          { src: classroomImg, alt: "Salle de cours" },
          { src: labImg, alt: "Laboratoire" },
        ]}
        title="Notre Campus"
        subtitle="Un environnement moderne et stimulant au cœur de Brazzaville, conçu pour favoriser votre réussite académique"
      />

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Nos Infrastructures</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Des installations modernes pour un apprentissage de qualité</p>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {facilities.map((f, i) => (
              <FacilityCard key={i} facility={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Les Atouts du Campus</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div ref={featRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <div
                key={i}
                className={`bg-card rounded-lg p-6 border border-border card-hover text-center group transition-all duration-500 ${
                  featVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <f.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Comment nous trouver</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div>
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">Adresse</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      112 Avenue De France, Poto-Poto<br />
                      En face de la Station Afric's<br />
                      Brazzaville, République du Congo
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>🚌 <strong>Transport :</strong> Accessible par les lignes de bus desservant Poto-Poto</p>
                  <p>🅿️ <strong>Parking :</strong> Places de stationnement disponibles à proximité</p>
                  <p>📍 <strong>Repère :</strong> En face de la Station Afric's</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <iframe
                title="Localisation IESC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.5!2d15.2832!3d-4.2634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c46f555555%3A0x12345!2sPoto-Poto%2C%20Brazzaville!5e0!3m2!1sfr!2scg!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Venez découvrir notre campus</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Planifiez une visite ou contactez-nous pour en savoir plus</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-iesc-blue text-iesc-blue-foreground font-semibold rounded-md hover:brightness-110 hover:scale-105 transition-all"
          >
            Planifier une visite
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FacilityCard = ({ facility: f, index: i }: { facility: typeof facilities[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
    >
      <div className={i % 2 === 1 ? "md:order-2" : ""}>
        <div className="overflow-hidden rounded-xl shadow-lg group">
          <img
            src={f.image}
            alt={f.title}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
      <div className={i % 2 === 1 ? "md:order-1" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center hover:rotate-6 transition-transform duration-300">
            <f.icon size={24} className="text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground">{f.title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-lg">{f.description}</p>
      </div>
    </div>
  );
};

export default CampusPage;
