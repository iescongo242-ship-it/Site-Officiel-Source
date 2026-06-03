import { MapPin, Phone, Mail, Globe, Facebook } from "lucide-react";
import logoWhite from "../assets/logo-iesc-white.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logoWhite} alt="IESC" className="h-24 w-auto mb-4 rounded p-1" />
            <p className="text-background/70 text-sm leading-relaxed">
              Institut d'Enseignement Supérieur du Congo — Établissement privé agréé formant les cadres de demain.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {["Accueil", "À Propos", "Programmes", "Admissions"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s/g, "").replace("à", "a")}`}
                    className="text-sm text-background/70 hover:text-iesc-blue transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Filières */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Filières</h4>
            <ul className="space-y-2">
              {[
                "Génie Informatique",
                "Comptabilité",
                "Droit",
                "Management",
                "Réseaux & Télécoms",
              ].map((f) => (
                <li key={f} className="text-sm text-background/70">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-iesc-blue" />
                112 Avenue De France, Poto-Poto, Brazzaville, Congo
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone size={16} className="shrink-0 text-iesc-blue" />
                (+242) 06 541 98 61 / 05 022 64 08
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail size={16} className="shrink-0 text-iesc-blue" />
                info@iesc-cg.net
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Globe size={16} className="shrink-0 text-iesc-blue" />
                <a href="https://www.iesc-cg.net" target="_blank" rel="noopener noreferrer" className="hover:text-iesc-blue transition-colors">www.iesc-cg.net</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/institutiesc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-iesc-blue transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.tiktok.com/@iesc_universite?_r=1&_t=ZS-94vQwjUwwPY" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-iesc-blue transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          © {new Date().getFullYear()} IESC — Institut d'Enseignement Supérieur du Congo. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;