const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/242065419861?text=Bonjour%20IESC%2C%20je%20souhaite%20avoir%20plus%20d%27informations.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        {/* Button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 duration-300">
          <svg viewBox="0 0 32 32" fill="white" width="28" height="28">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.13 6.742 3.05 9.378L1.054 31.29l6.12-1.96A15.924 15.924 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.31 22.618c-.39 1.1-2.27 2.04-3.13 2.17-.82.12-1.86.17-3-.19-.7-.22-1.6-.51-2.75-1-4.61-1.97-7.62-6.64-7.85-6.95-.23-.31-1.86-2.48-1.86-4.73s1.18-3.36 1.6-3.82c.42-.46.92-.58 1.22-.58l.88.02c.28.01.66-.11.97.75.33.88 1.13 2.76 1.22 2.96.1.2.17.44.03.7-.13.27-.2.44-.4.68-.2.23-.42.52-.6.7-.2.2-.41.41-.18.81.23.4 1.04 1.72 2.23 2.78 1.54 1.38 2.83 1.81 3.23 2.01.4.2.64.17.87-.1.23-.27 1-.17 1.26.23.27.4.54 2.2.75 2.57.2.38.34.58.2.93-.14.35-.5.52-.9.72z"/>
          </svg>
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Discutez avec nous sur WhatsApp
      </div>
    </a>
  );
};

export default WhatsAppButton;
