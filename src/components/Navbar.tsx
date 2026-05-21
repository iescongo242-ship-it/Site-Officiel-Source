import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logoIesc from "../assets/logo-iesc-color.png";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus" },
  { label: "Actualités & Vie Étudiante", href: "/evenements" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const searchablePages = [
    { label: "Accueil", href: "/", keywords: "accueil bienvenue iesc" },
    { label: "Formations", href: "/formations", keywords: "formations filières programmes cours gestion informatique" },
    { label: "Admissions", href: "/admissions", keywords: "admissions inscription inscrire dossier" },
    { label: "Campus", href: "/campus", keywords: "campus localisation bâtiment" },
    { label: "Actualités & Vie Étudiante", href: "/evenements", keywords: "événements activités conférence actualités vie étudiante" },
    { label: "Contact", href: "/contact", keywords: "contact téléphone email adresse" },
  ];

  const filteredPages = searchQuery.trim()
    ? searchablePages.filter((p) =>
        (p.label + " " + p.keywords).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* DÉBUT DE LA BANNIÈRE JPO */}
      <div className="bg-[#800000] text-white text-center py-3 px-4 text-sm md:text-base font-semibold shadow-md z-50 relative">
        📢 GRANDE JOURNÉE PORTES OUVERTES ! Venez découvrir le Campus de l'IESC le <span className="text-yellow-300">Samedi 27 Juin à 08h00</span>. 
        <a href="/admissions" className="underline ml-2 hover:text-gray-200 transition-colors">
          Inscrivez-vous ici !
        </a>
      </div>
      {/* FIN DE LA BANNIÈRE JPO */}
       
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIesc} alt="Logo IESC" className="h-20 w-auto" />
          </Link>

          {/* Search bar */}
          <div className="hidden lg:flex relative items-center">
            <div className="flex items-center border border-border rounded-md bg-muted/50 px-3 py-1.5">
              <Search size={16} className="text-muted-foreground mr-2" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                placeholder="Rechercher..."
                className="bg-transparent text-sm w-40 focus:w-56 transition-all focus:outline-none placeholder:text-muted-foreground"
              />
            </div>
            {searchOpen && filteredPages.length > 0 && (
              <div className="absolute top-full mt-2 left-0 w-64 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                {filteredPages.map((page) => (
                  <button
                    key={page.href}
                    onMouseDown={() => {
                      navigate(page.href);
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                  >
                    {page.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                  location.pathname === link.href
                    ? "text-primary after:w-full"
                    : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Les 2 boutons d'action (Ordinateur et Tablette) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => alert("L'Espace Étudiant sera bientôt disponible pour la prochaine rentrée !")}
              className="items-center px-4 py-2.5 border-2 border-primary text-primary text-sm font-semibold rounded-md hover:bg-primary/5 transition-colors"
            >
              Espace Étudiant
            </button>
            
            <Link
              to="/admissions"
              className="items-center px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-accent transition-colors"
            >
              S'inscrire
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {/* Mobile search */}
              <div className="flex items-center border border-border rounded-md bg-muted/50 px-3 py-2 mb-2">
                <Search size={16} className="text-muted-foreground mr-2" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="bg-transparent text-sm flex-1 focus:outline-none placeholder:text-muted-foreground"
                />
              </div>
              {searchQuery.trim() && filteredPages.length > 0 && (
                <div className="mb-2 border border-border rounded-lg bg-card py-1">
                  {filteredPages.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      onClick={() => { setSearchQuery(""); setIsOpen(false); }}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => alert("L'Espace Étudiant sera bientôt disponible !")}
                className="mt-2 text-center px-6 py-2.5 border-2 border-primary text-primary font-semibold rounded-md"
              >
                Espace Étudiant
              </button>
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;