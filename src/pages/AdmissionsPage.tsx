import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText, CreditCard, CheckCircle, ArrowRight, Calendar,
  ClipboardList, AlertCircle, Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsAdmission from "@/assets/students-admission.jpg";
import studentsGroup from "@/assets/students-group.jpg";

const steps = [
  { step: "01", title: "Préparez votre dossier", description: "Rassemblez tous les documents nécessaires listés ci-dessous" },
  { step: "02", title: "Déposez votre candidature", description: "Rendez-vous au campus ou envoyez votre dossier par email" },
  { step: "03", title: "Entretien d'admission", description: "Passez un entretien avec notre commission pédagogique" },
  { step: "04", title: "Confirmation & Inscription", description: "Recevez votre lettre d'admission et finalisez votre inscription" },
];

const documents = [
  "Copie du dernier diplôme (BAC minimum)",
  "Relevés de notes des 2 dernières années",
  "Photocopie en couleur de l'acte de naissance",
  "4 photos d'identité format passeport",
  "Enveloppe Kaki format A4",
  "Un paquet de RAM A4",
  "Un paquet de marqueurs pour tableau blanc",
  "Copie de la carte d'identité ou du passeport",
];

const faqs = [
  { q: "Quelles sont les dates d'inscription ?", a: "Les inscriptions sont ouvertes tout au long de l'année. La rentrée principale a lieu en octobre, avec une session de rattrapage en janvier." },
  { q: "Puis-je m'inscrire sans le BAC ?", a: "Le BAC est requis pour les programmes de Licence. Cependant, nous proposons des formations continues accessibles avec un niveau BAC sous conditions." },
  { q: "Les cours du soir sont-ils disponibles ?", a: "Oui, l'IESC propose des cours du soir pour les professionnels et fonctionnaires souhaitant poursuivre leur formation continue." },
  { q: "Y a-t-il des bourses disponibles ?", a: "L'IESC offre des facilités de paiement. Contactez le service des admissions pour discuter de votre situation personnelle." },
  { q: "Le stage est-il garanti ?", a: "Oui, un stage professionnel est garanti en fin de formation grâce à nos partenariats avec des entreprises locales et internationales." },
];

const AdmissionsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ZoomCarousel
        images={[
          { src: studentsAdmission, alt: "Admissions IESC" },
          { src: studentsGroup, alt: "Étudiants IESC" },
        ]}
        title="Admissions"
        subtitle="Rejoignez l'IESC et construisez votre avenir professionnel. Découvrez les étapes d'inscription et les conditions d'admission."
      />

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Comment s'inscrire ?</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`relative text-center transition-all duration-500 ${
                  stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-heading font-bold hover:scale-110 transition-transform duration-300">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                )}
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Fees */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <ClipboardList size={24} className="text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">Dossier d'inscription</h2>
              </div>
              <ul className="space-y-3">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-primary rounded-xl p-8 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                      <CreditCard size={24} className="text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary-foreground">Frais de scolarité</h2>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-3">
                      <span className="text-primary-foreground/80">Frais d'inscription</span>
                      <span className="text-xl font-bold text-gold">30.000 FCFA</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-3">
                      <span className="text-primary-foreground/80">Coût de la Formation</span>
                      <span className="text-xl font-bold text-gold">300.000 FCFA en L1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-foreground/80">Modalité de paiement</span>
                      <span className="text-primary-foreground font-medium">Par tranche suivant le mois ou le semestre</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex w-full justify-center items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-md hover:brightness-110 hover:scale-[1.02] transition-all"
                  >
                    Postuler maintenant
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Facilités de paiement</h3>
                    <p className="text-sm text-muted-foreground">
                      Des facilités de paiement sont disponibles. Contactez notre service des admissions pour en discuter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Calendrier Académique</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { period: "Juin – Septembre", event: "Inscriptions ouvertes", icon: FileText },
              { period: "Octobre", event: "Rentrée académique", icon: Calendar },
              { period: "Janvier", event: "Session de rattrapage", icon: ClipboardList },
              { period: "Décembre – Janvier", event: "Examens 1er semestre", icon: FileText },
              { period: "Mai – Juin", event: "Examens 2ème semestre", icon: FileText },
              { period: "Juillet – Septembre", event: "Stages en entreprise", icon: Download },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border card-hover group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <item.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gold">{item.period}</div>
                  <div className="text-foreground font-medium">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Questions Fréquentes</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium text-foreground pr-4">{faq.q}</span>
                  <span
                    className={`text-primary transition-transform duration-300 shrink-0 text-xl font-bold ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student life */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg group">
              <img src={studentsGroup} alt="Étudiants IESC" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Rejoignez une communauté dynamique</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                À l'IESC, vous intégrez une communauté d'étudiants motivés et ambitieux. Notre environnement favorise l'entraide, le travail collaboratif et l'excellence académique.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-accent hover:scale-105 transition-all"
              >
                Nous contacter
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;
