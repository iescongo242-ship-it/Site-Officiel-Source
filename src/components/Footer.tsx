import { Link } from "react-router-dom"; // <-- LA LIGNE MAGIQUE QUI RÉPARE TOUT !
import { MapPin, Phone, Mail, Globe, Facebook } from "lucide-react";
import logoWhite from "../assets/logo-iesc-white.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-iesc-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. BRAND (Logo et description) */}
          <div>
            <img src={logoWhite} alt="IESC" className="h-24 w-auto mb-6 rounded p-1" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Institut d'Enseignement Supérieur du Congo — Établissement privé agréé formant les cadres de demain.
            </p>
          </div>

          {/* 2. LIENS RAPIDES (Corrigés avec les vraies routes React) */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", path: "/" },
                { label: "Nos Formations", path: "/formations" },
                { label: "Inscriptions & Admissions", path: "/admissions" },
                { label: "Notre Campus", path: "/campus" },
                { label: "Actualités & Événements", path: "/evenements" },
                { label: "Contact", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. FILIÈRES */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Filières</h4>
            <ul className="space-y-3">
              {[
                "Génie Informatique",
                "Comptabilité",
                "Droit",
                "Management",
                "Réseaux & Télécoms",
                "Banque, Assurance et Finances",
                "Intelligence Artifiecielle et Sciences de Données",
                "QHSE (Qualité, Hygiène, Sécurité, Environnement)",
              ].map((f) => (
                <li key={f} className="text-sm text-gray-400">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT & RÉSEAUX */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400 group cursor-default">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white/60 group-hover:text-white transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  112 Avenue de France, Poto-Poto, Brazzaville
                </span>
              </li>
              
              <li className="flex items-center gap-3 text-sm text-gray-400 group cursor-default">
                <Phone size={18} className="shrink-0 text-white/60 group-hover:text-white transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  (+242) 06 541 98 61 / 05 022 64 08
                </span>
              </li>
              
              <li className="flex items-center gap-3 text-sm text-gray-400 group cursor-default">
                <Mail size={18} className="shrink-0 text-white/60 group-hover:text-white transition-colors duration-300" />
                <a href="mailto:info@iesc-cg.net" className="group-hover:text-white transition-colors duration-300">
                  info@iesc-cg.net
                </a>
              </li>
              
              <li className="flex items-center gap-3 text-sm text-gray-400 group cursor-default">
                <Globe size={18} className="shrink-0 text-white/60 group-hover:text-white transition-colors duration-300" />
                <a href="https://www.iesc-cg.net" target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-colors duration-300">
                  www.iesc-cg.net
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-8">
              <a href="https://www.facebook.com/institutiesc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#CC1122] hover:scale-110 transition-all duration-300 shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@iesc_universite?_r=1&_t=ZS-94vQwjUwwPY" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#CC1122] hover:scale-110 transition-all duration-300 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* LIGNE DU BAS : Copyright et Lien vers la page de Confidentialité */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} IESC — Institut d'Enseignement Supérieur du Congo. Tous droits réservés.</p>
          
          <Link to="/confidentialite" className="hover:text-white transition-colors underline">
            Mentions Légales & Politique de Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;