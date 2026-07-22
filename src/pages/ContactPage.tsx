import SEO from "@/components/SEO";
import { useState, useCallback } from "react";
import { MapPin, Phone, Mail, Globe, Clock, Send, Facebook, AlertCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoomCarousel from "@/components/ZoomCarousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studentsGroup from "@/assets/students-group.webp";
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

   // NOUVEAU VIGILE : Accepte le +, les chiffres et les espaces (de 8 à 18 caractères)
    const phoneRegex = /^\+?[0-9\s\-]{8,18}$/;
    if (formData.telephone && !phoneRegex.test(formData.telephone)) {
      newErrors.telephone = "Veuillez entrer un numéro valide (ex: 06 123 45 67 ou +242...).";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!formRateLimiter.canProceed()) {
      setRateLimited(true);
      setTimeout(() => setRateLimited(false), 5000);
      return;
    }
    
    try {
      // ON ENVOIE LES VRAIES DONNÉES AU SERVEUR LWS
      const response = await fetch("https://www.iesc-cg.net/api_contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //  CORRECTION ICI : On utilise formData au lieu de sanitizedData 
        body: JSON.stringify(formData), 
      });

      const result = await response.json();
      
      if (result.message === "Succes") {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" });
        setErrors({});
      } else {
        alert("Une erreur s'est produite lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      alert("Impossible de contacter le serveur.");
    }
  };
  const InputError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1 flex items-center gap-1 animate-fade-in">
        <AlertCircle size={12} /> {errors[field]}
      </p>
    ) : null;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
       <SEO 
        title="Contactez-nous" 
        description="Une question sur nos formations ou vos inscriptions ? Contactez l'Institut d'Enseignement Supérieur du Congo (IESC) par téléphone, WhatsApp ou email." 
      />
      <Navbar />

      {/* Le ZoomCarousel avec filtre rouge IESC */}
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
            {/* COLONNE GAUCHE : COORDONNÉES */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-black mb-4">Nos Coordonnées</h2>
                <div className="w-16 h-1 bg-[#CC1122] mb-8" />
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Adresse", content: "112 Avenue De France, Poto-Poto\nEn face de la Station Afric'\nBrazzaville, République du Congo" },
                  { icon: Phone, title: "Téléphone", content: "(+242) 06 541 98 61\n(+242) 05 022 64 08" },
                  { icon: Mail, title: "Email", content: "info@iesc-cg.net" },
                  { icon: Globe, title: "Site Web", content: "www.iesc-cg.net" },
                  { icon: Clock, title: "Heures d'ouverture", content: "Lundi – Vendredi : 08h00 – 19h00\nSamedi : 08h00 – 14h00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#CC1122]/10 flex items-center justify-center shrink-0 group-hover:bg-[#CC1122] transition-colors duration-300 shadow-sm">
                      <item.icon size={22} className="text-[#CC1122] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* RÉSEAUX SOCIAUX IESC */}
              <div className="mt-8">
                <h3 className="font-semibold text-black mb-3">Suivez-nous</h3>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/institutiesc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#CC1122]/10 flex items-center justify-center text-[#CC1122] hover:bg-[#CC1122] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
                  >
                    <Facebook size={20} />
                  </a>
                  {/* TikTok (SVG Spécial) */}
                  <a
                    href="https://www.tiktok.com/@iesc_universite?_r=1&_t=ZS-94vQwjUwwPY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#CC1122]/10 flex items-center justify-center text-[#CC1122] hover:bg-[#CC1122] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* COLONNE DROITE : FORMULAIRE */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-heading font-bold text-black mb-2">Envoyez-nous un message</h2>
                <p className="text-gray-500 mb-8 text-sm">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm animate-fade-in flex items-center gap-2">
                    <CheckCircle2 className="text-green-600 shrink-0" size={18} /> 
                    Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.
                  </div>
                )}

                {rateLimited && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm animate-fade-in flex items-center gap-2">
                    <AlertCircle className="text-red-600 shrink-0" size={18} /> 
                    Trop de tentatives. Veuillez patienter avant de réessayer.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet *</label>
                      <input
                        type="text"
                        value={formData.nom}
                        onChange={(e) => handleChange("nom", e.target.value)}
                        maxLength={VALIDATION_LIMITS.NOM_MAX}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.nom ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4B84] transition-all`}
                        placeholder="Votre nom"
                        autoComplete="name"
                      />
                      <InputError field="nom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        maxLength={VALIDATION_LIMITS.EMAIL_MAX}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4B84] transition-all`}
                        placeholder="votre@email.com"
                        autoComplete="email"
                      />
                      <InputError field="email" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => handleChange("telephone", e.target.value)}
                        maxLength={VALIDATION_LIMITS.TELEPHONE_MAX}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.telephone ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4B84] transition-all`}
                        placeholder="+242 ..."
                        autoComplete="tel"
                      />
                      <InputError field="telephone" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Sujet *</label>
                      <select
                        value={formData.sujet}
                        onChange={(e) => handleChange("sujet", e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.sujet ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4B84] transition-all`}
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      maxLength={VALIDATION_LIMITS.MESSAGE_MAX}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4B84] resize-none transition-all`}
                      placeholder="Écrivez votre message ici..."
                    />
                    <div className="flex justify-between items-center mt-1">
                      <InputError field="message" />
                      <span className="text-xs text-gray-400 ml-auto">{formData.message.length}/{VALIDATION_LIMITS.MESSAGE_MAX}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CC1122] text-white font-bold rounded-lg hover:bg-[#A00D1A] hover:scale-105 transition-all shadow-md mt-4"
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

      {/* Map (La carte interactive) */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-black mb-4">Nous Trouver</h2>
          <div className="w-16 h-1 bg-[#CC1122] mx-auto mb-10" />
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <iframe
              title="Localisation IESC"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.5!2d15.2832!3d-4.2634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c46f555555%3A0x12345!2sPoto-Poto%2C%20Brazzaville!5e0!3m2!1sfr!2scg!4v1"
              width="100%"
              height="450"
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