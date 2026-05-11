import { useState, useEffect } from "react";
import { Cookie, Shield } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-end sm:justify-center pointer-events-none">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto animate-fade-in" />

      {/* Banner */}
      <div className="relative z-10 w-full max-w-2xl mx-4 mb-6 pointer-events-auto animate-slide-up">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground">
              Nous utilisons des cookies 🍪
            </h3>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Ce site utilise des cookies pour améliorer votre expérience de navigation, 
            analyser le trafic et personnaliser le contenu. En cliquant sur « Accepter », 
            vous consentez à l'utilisation de tous les cookies.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md"
            >
              Accepter tout
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-muted hover:bg-muted/80 text-muted-foreground font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Refuser
            </button>
          </div>

          {/* Privacy link */}
          <div className="flex items-center gap-1.5 mt-4 justify-center">
            <Shield className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              Vos données sont protégées et ne sont jamais partagées.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
