import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import eventCineDebat from "@/assets/event-cine-debat.jpg";
import eventGraduation from "@/assets/event-graduation.jpg";
import eventConference from "@/assets/event-conference.jpg";

const upcomingEvents = [
  {
    title: "Soirée Ciné-Débat",
    date: "25 Avril 2026",
    time: "14h00 - 17h00",
    location: "112, Avenue de France, Poto-Poto",
    description: "L'IESC organise une soirée ciné-débat ouverte à tous. PAF : 1.000 FCFA. Venez nombreux !",
    image: eventCineDebat,
    category: "Ciné-Débat",
  },
  {
    title: "Conférence : L'IA et l'Avenir de l'Emploi en Afrique",
    date: "28 Octobre 2025",
    time: "14h00 - 17h00",
    location: "Amphithéâtre Principal",
    description: "Des experts nationaux et internationaux discuteront de l'impact de l'intelligence artificielle sur le marché de l'emploi.",
    image: eventConference,
    category: "Conférence",
  },
  {
    title: "Cérémonie de Remise des Diplômes",
    date: "20 Décembre 2025",
    time: "10h00 - 13h00",
    location: "Salle des Fêtes, Brazzaville",
    description: "Célébrons ensemble la réussite de nos diplômés de la promotion 2024-2025.",
    image: eventGraduation,
    category: "Cérémonie",
  },
];

const pastEvents = [
  { title: "Hackathon IESC 2024", date: "Mars 2024", description: "48 heures de créativité et d'innovation technologique entre étudiants." },
  { title: "Semaine de l'Entrepreneuriat", date: "Janvier 2024", description: "Ateliers, conférences et pitchs avec des entrepreneurs congolais." },
  { title: "Forum Emploi & Stages", date: "Novembre 2023", description: "Rencontre entre nos étudiants et plus de 20 entreprises partenaires." },
  { title: "Journée Mondiale du Droit", date: "Octobre 2023", description: "Conférences-débats animées par des magistrats et avocats au barreau de Brazzaville." },
];

const EvenementsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ZoomCarousel
        images={[
          { src: eventCineDebat, alt: "Soirée Ciné-Débat IESC" },
          { src: eventGraduation, alt: "Remise de diplômes" },
          { src: eventConference, alt: "Conférence" },
        ]}
        title="Événements"
        subtitle="Découvrez les temps forts de la vie à l'IESC : conférences, cérémonies, journées portes ouvertes et bien plus."
        badge="Vie Universitaire"
      />

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Agenda</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Événements à Venir</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-10">
            {upcomingEvents.map((event, i) => (
              <EventCard key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Rétrospective</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Événements Passés</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <PastEventsGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Users size={48} className="mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Restez Informé</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Suivez-nous sur les réseaux sociaux pour ne manquer aucun événement de l'IESC.
          </p>
          <a
            href="https://www.facebook.com/institutiesc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-background/90 hover:scale-105 transition-all"
          >
            Suivez-nous sur Facebook <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const EventCard = ({ event, index }: { event: typeof upcomingEvents[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg border border-border transition-all duration-700 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="md:w-1/2 h-64 md:h-80 overflow-hidden group">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="md:w-1/2 p-8">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
          {event.category}
        </span>
        <h3 className="font-heading text-2xl font-bold mb-3">{event.title}</h3>
        <p className="text-muted-foreground mb-5 leading-relaxed">{event.description}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            {event.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            {event.location}
          </div>
        </div>
      </div>
    </div>
  );
};

const PastEventsGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {pastEvents.map((event, i) => (
        <div
          key={i}
          className={`bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-500 group ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <Calendar size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="text-sm font-semibold text-primary">{event.date}</span>
          </div>
          <h3 className="font-heading text-lg font-bold mb-2">{event.title}</h3>
          <p className="text-muted-foreground text-sm">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EvenementsPage;
