import { useState, useCallback } from "react";
import { MapPin, Phone, Mail, Globe, Clock, Send, Facebook, Linkedin, Instagram, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsGroup from "@/assets/students-group.jpg";
import { sanitizeInput, isValidEmail, isValidPhone, truncateInput, RateLimiter, VALIDATION_LIMITS } from "@/lib/security";

const formRateLimiter = new RateLimiter(3, 60000); // 3 soumissions par minute

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    const nom = formData.nom.trim();
    if (!nom) {
      newErrors.nom = "Le nom est requis.";
    } else if (nom.length < 2) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères.";
    } else if (nom.length > VALIDATION_LIMITS.NOM_MAX) {
      newErrors.nom = `Le nom ne doit pas dépasser ${VALIDATION_LIMITS.NOM_MAX} caractères.`;
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!isValidEmail(formData.email.trim())) {
      newErrors.email = "Veuillez entrer un email valide.";
    }

    if (formData.telephone && !isValidPhone(formData.telephone)) {
      newErrors.telephone = "Veuillez entrer un numéro de téléphone valide.";
    }

    if (!formData.sujet) {
      newErrors.sujet = "Veuillez sélectionner un sujet.";
    }

    const message = formData.message.trim();
    if (!message) {
      newErrors.message = "Le message est requis.";
    } else if (message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    } else if (message.length > VALIDATION_LIMITS.MESSAGE_MAX) {
      newErrors.message = `Le message ne doit pas dépasser ${VALIDATION_LIMITS.MESSAGE_MAX} caractères.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (field: string, value: string) => {
    const limit = VALIDATION_LIMITS[field.toUpperCase() as keyof typeof VALIDATION_LIMITS] || 500;
    setFormData(prev => ({ ...prev, [field]: truncateInput(value, limit) }));
    if (errors[field]) {
      setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!formRateLimiter.canProceed()) {
      setRateLimited(true);
      setTimeout(() => setRateLimited(false), 5000);
      return;
    }

    // Sanitize avant envoi
    const sanitizedData = {
      nom: sanitizeInput(formData.nom),
      email: sanitizeInput(formData.email),
      telephone: sanitizeInput(formData.telephone),
      sujet: sanitizeInput(formData.sujet),
      message: sanitizeInput(formData.message),
    };

    // TODO: envoyer sanitizedData au backend
    console.info("Formulaire soumis (données sanitisées)");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" });
    setErrors({});
  };

  const InputError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="text-destructive text-xs mt-1 flex items-center gap-1 animate-fade-in">
        <AlertCircle size={12} /> {errors[field]}
      </p>
    ) : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <ZoomCarousel
        images={[{ src: studentsGroup, alt: "Étudiants IESC" }]}
        title="Contactez-nous"
        subtitle="N'hésitez pas à nous contacter pour toute question sur nos programmes ou le processus d'inscription"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={formRef}
            className={`grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto transition-all duration-700 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Nos Coordonnées</h2>
                <div className="w-16 h-1 bg-primary mb-8" />
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Adresse", content: "112 Avenue De France, Poto-Poto\nEn face de la Station Afric's\nBrazzaville, République du Congo" },
                  { icon: Phone, title: "Téléphone", content: "(+242) 06 541 98 61\n(+242) 05 022 64 08" },
                  { icon: Mail, title: "Email", content: "info@iesc-cg.net" },
                  { icon: Globe, title: "Site Web", content: "www.iesc-cg.net" },
                  { icon: Clock, title: "Heures d'ouverture", content: "Lundi – Vendredi : 08h00 – 18h00\nSamedi : 08h00 – 13h00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <item.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Suivez-nous</h3>
                <div className="flex gap-3">
                  {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl p-8 md:p-10 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Envoyez-nous un message</h2>
                <p className="text-muted-foreground mb-8">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm animate-fade-in">
                    ✅ Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.
                  </div>
                )}

                {rateLimited && (
                  <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-fade-in">
                    ⚠️ Trop de tentatives. Veuillez patienter avant de réessayer.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet *</label>
                      <input
                        type="text"
                        value={formData.nom}
                        onChange={(e) => handleChange("nom", e.target.value)}
                        maxLength={VALIDATION_LIMITS.NOM_MAX}
                        className={`w-full px-4 py-3 rounded-md border ${errors.nom ? "border-destructive" : "border-input"} bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
                        placeholder="Votre nom"
                        autoComplete="name"
                      />
                      <InputError field="nom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        maxLength={VALIDATION_LIMITS.EMAIL_MAX}
                        className={`w-full px-4 py-3 rounded-md border ${errors.email ? "border-destructive" : "border-input"} bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
                        placeholder="votre@email.com"
                        autoComplete="email"
                      />
                      <InputError field="email" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => handleChange("telephone", e.target.value)}
                        maxLength={VALIDATION_LIMITS.TELEPHONE_MAX}
                        className={`w-full px-4 py-3 rounded-md border ${errors.telephone ? "border-destructive" : "border-input"} bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
                        placeholder="+242 ..."
                        autoComplete="tel"
                      />
                      <InputError field="telephone" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Sujet *</label>
                      <select
                        value={formData.sujet}
                        onChange={(e) => handleChange("sujet", e.target.value)}
                        className={`w-full px-4 py-3 rounded-md border ${errors.sujet ? "border-destructive" : "border-input"} bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all`}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="inscription">Inscription</option>
                        <option value="programme">Informations sur un programme</option>
                        <option value="stage">Stages</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                      <InputError field="sujet" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      maxLength={VALIDATION_LIMITS.MESSAGE_MAX}
                      className={`w-full px-4 py-3 rounded-md border ${errors.message ? "border-destructive" : "border-input"} bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all`}
                      placeholder="Écrivez votre message ici..."
                    />
                    <div className="flex justify-between items-center">
                      <InputError field="message" />
                      <span className="text-xs text-muted-foreground ml-auto">{formData.message.length}/{VALIDATION_LIMITS.MESSAGE_MAX}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-accent hover:scale-105 transition-all"
                  >
                    <Send size={18} />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-alt py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Nous Trouver</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
            <iframe
              title="Localisation IESC"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.5!2d15.2832!3d-4.2634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c46f555555%3A0x12345!2sPoto-Poto%2C%20Brazzaville!5e0!3m2!1sfr!2scg!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
