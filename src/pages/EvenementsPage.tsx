import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import eventJournée from "@/assets/Prochaine-journee.webp";
import eventRentrer from "@/assets/Prochaine-rentrer.webp";
import eventConference from "@/assets/conference_ia.webp";

const upcomingEvents = [
  {
    title: "Prochaine Journée Portes Ouvertes (JPO)",
    date: "Date à venir",
    time: "À déterminer",
    location: "Campus de l'IESC, Brazzaville",
    description: "Suite au grand succès de notre dernière édition, nous préparons déjà la prochaine JPO ! Restez à l'écoute pour découvrir la nouvelle date. D'ici là, nos pré-inscriptions en ligne restent ouvertes.",
    image: eventJournée, // Garde ta variable d'image
    category: "Événement à venir",
  },
  
  {
    title: "Rentrée Solennelle et Journée d'Intégration",
    date: "Octobre 2026",
    time: "09h00 - 16h00",
    location: "Campus de l'IESC, Brazzaville",
    description: "Célébrons le lancement de notre deuxième année académique ! Accueil chaleureux des nouveaux bacheliers en L1, retrouvailles pour nos étudiants de L2, présentation du corps professoral et activités d'intégration au programme.",
    image: eventRentrer, // J'ai changé l'image pour éviter de montrer des toques de diplômés !
    category: "Rentrée Académique",
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
];

const pastEvents = [
  // On a basculé la JPO du 27 Juin ici !
  { 
    title: "Journée Portes Ouvertes (Édition Juin 2026)", 
    date: "27 Juin 2026", 
    description: "Une journée exceptionnelle de découvertes de notre campus, d'ateliers et de rencontres avec notre équipe pédagogique." 
  },
  { 
    title: "L'IESC à l'événement de l'innovation MTN", 
    date: "Mai 2026", 
    description: "Participation de notre institution à la présentation des solutions technologiques innovantes organisée par MTN Congo. Échanges exclusifs et interviews des acteurs de la Tech." 
  },
  { 
    title: "Soirée Ciné-Débat", 
    date: "Avril 2026", 
    description: "Une soirée riche en débats et en partage organisée par nos étudiants sur le campus." 
  },
  { 
    title: "Hackathon IESC 2026", 
    date: "Mars 2026", 
    description: "48 heures de créativité et d'innovation technologique réunissant les meilleurs talents de l'école." 
  },
];

const EvenementsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
       <SEO 
        title="Actualités et Vie Étudiante" 
        description="Plongez dans la vie de campus de l'IESC Brazzaville : actualités, journées portes ouvertes, conférences, hackathons et cérémonies de remise de diplômes." 
      />
      <Navbar />

      <ZoomCarousel
        images={[
          { src: eventJournée, alt: "Vie étudiante IESC" },
          { src: eventRentrer, alt: "Remise de diplômes" },
          { src: eventConference, alt: "Conférence" },
        ]}
        title="Actualités et Vie Étudiante"
        subtitle="Découvrez les temps forts de l'IESC : notre participation aux grands événements, nos conférences, et la vie sur le campus."
        badge="Le Magazine de l'IESC"
      />

      {/* Upcoming Events / Agenda */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#CC1122] font-semibold text-sm uppercase tracking-wider">Agenda</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-black">Événements à Venir</h2>
            <div className="w-20 h-1 bg-[#CC1122] mx-auto mt-6" />
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {upcomingEvents.map((event, i) => (
              <EventCard key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events / Actualités (MTN, etc.) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#CC1122] font-semibold text-sm uppercase tracking-wider">À la une</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-black">Dernières Actualités</h2>
            <div className="w-20 h-1 bg-[#CC1122] mx-auto mt-6" />
          </div>

          <PastEventsGrid />
        </div>
      </section>

      {/* CTA (Revu avec les couleurs institutionnelles) */}
      <section className="py-20 bg-[#CC1122] text-white">
        <div className="container mx-auto px-4 text-center">
          <Users size={48} className="mx-auto mb-6 opacity-90 text-white" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Restez Informé</h2>
          <p className="text-red-100 max-w-lg mx-auto mb-8 text-lg">
            Suivez-nous sur les réseaux sociaux pour ne manquer aucune actualité de l'IESC.
          </p>
          <a
            href="https://www.facebook.com/institutiesc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A4B84] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#113259] hover:scale-105 transition-all shadow-lg"
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
      className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-0 items-center bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-700 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="md:w-1/2 h-72 md:h-96 w-full overflow-hidden group">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="md:w-1/2 p-8 md:p-12 w-full">
        <span className="inline-block bg-[#CC1122]/10 text-[#CC1122] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
          {event.category}
        </span>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">{event.title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">{event.description}</p>
        
        <div className="space-y-3 text-sm text-gray-700 font-semibold bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div className="flex items-center gap-3">
            <Calendar size={18} className="text-[#CC1122]" />
            {event.date}
          </div>
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-[#CC1122]" />
            {event.time}
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-[#CC1122]" />
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
    <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {pastEvents.map((event, i) => (
        <div
          key={i}
          className={`bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 group cursor-default shadow-sm ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#CC1122]/10 flex items-center justify-center group-hover:bg-[#CC1122] transition-colors duration-300 shadow-sm shrink-0">
              <Calendar size={24} className="text-[#CC1122] group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-bold text-[#CC1122] uppercase tracking-wider">{event.date}</span>
          </div>
          <h3 className="font-heading text-xl font-bold text-black mb-3 leading-tight group-hover:text-[#CC1122] transition-colors">{event.title}</h3>
          <p className="text-gray-600 leading-relaxed">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EvenementsPage;