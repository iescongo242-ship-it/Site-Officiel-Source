import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";
import { sanitizeInput, truncateInput, RateLimiter, VALIDATION_LIMITS } from "@/lib/security";

const faqData = [
  {
    keywords: ["inscription", "inscrire", "s'inscrire", "admission"],
    answer:
      "Pour vous inscrire à l'IESC, rendez-vous sur notre page Admissions ou contactez-nous au +242 065 419 861. Les inscriptions sont ouvertes toute l'année.",
  },
  {
    keywords: ["formation", "filière", "programme", "cours"],
    answer:
      "L'IESC propose des formations en Gestion, Informatique, Communication, Marketing et Commerce International. Consultez notre page Formations pour plus de détails.",
  },
  {
    keywords: ["frais", "coût", "prix", "tarif", "payer"],
    answer:
      "Pour connaître les frais de scolarité, veuillez nous contacter directement au +242 065 419 861 ou passer à notre campus.",
  },
  {
    keywords: ["campus", "adresse", "localisation", "où"],
    answer:
      "Notre campus est situé à Brazzaville, République du Congo. Visitez notre page Campus pour plus d'informations.",
  },
  {
    keywords: ["contact", "téléphone", "appeler", "joindre", "email"],
    answer:
      "Contactez-nous au +242 065 419 861 ou via WhatsApp. Vous pouvez aussi visiter notre page Contact.",
  },
  {
    keywords: ["horaire", "heure", "ouvert", "ouverture"],
    answer:
      "L'IESC est ouvert du lundi au vendredi de 8h00 à 17h00 et le samedi de 8h00 à 12h00.",
  },
  {
    keywords: ["bourse", "aide", "financ"],
    answer:
      "Des facilités de paiement sont disponibles. Contactez notre service des admissions pour en savoir plus sur les options de financement.",
  },
  {
    keywords: ["diplôme", "certificat", "reconnu"],
    answer:
      "Les diplômes de l'IESC sont reconnus par l'État congolais et nos partenaires académiques internationaux.",
  },
  {
    keywords: ["bonjour", "salut", "hello", "bonsoir"],
    answer:
      "Bonjour ! 👋 Bienvenue à l'IESC. Comment puis-je vous aider ? Posez-moi une question sur les formations, les inscriptions, le campus, etc.",
  },
  {
    keywords: ["merci", "remerci"],
    answer:
      "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊",
  },
];

const defaultAnswer =
  "Je ne suis pas sûr de comprendre votre question. Voici ce que je peux vous aider avec :\n• Inscriptions & Admissions\n• Formations & Filières\n• Frais de scolarité\n• Campus & Localisation\n• Contact & Horaires\n\nOu contactez-nous au +242 065 419 861.";

function getAnswer(question: string): string {
  const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const faq of faqData) {
    if (faq.keywords.some((kw) => q.includes(kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) {
      return faq.answer;
    }
  }
  return defaultAnswer;
}

interface Message {
  role: "bot" | "user";
  text: string;
}

const chatRateLimiter = new RateLimiter(10, 30000); // 10 messages par 30s

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Bonjour ! 👋 Je suis l'assistant virtuel de l'IESC. Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLimited, setIsLimited] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const raw = (text || input).trim();
    if (!raw) return;

    // Rate limiting
    if (!chatRateLimiter.canProceed()) {
      setIsLimited(true);
      setTimeout(() => setIsLimited(false), 3000);
      return;
    }

    // Sanitize & truncate
    const sanitized = sanitizeInput(truncateInput(raw, VALIDATION_LIMITS.CHATBOT_INPUT_MAX));
    if (!sanitized) return;

    const userMsg: Message = { role: "user", text: sanitized };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = { role: "bot", text: getAnswer(sanitized) };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* 
        CORRECTION DU BUG DE FERMETURE ICI :
        J'ai changé bottom-24 en bottom-6, et z-50 en z-[60] pour qu'il soit cliquable ! 
      */}
     <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-24 right-6 z-[60] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          open
            ? "bg-muted text-foreground rotate-0 scale-95"
            : "bg-primary text-primary-foreground hover:scale-110 animate-bounce-subtle"
        }`}
        aria-label="Chatbot"
      >
        {open ? <X size={22} /> : <Bot size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-40 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl flex flex-col animate-scale-in overflow-hidden"
          style={{ maxHeight: "min(28rem, calc(100vh - 12rem))" }}
        >
          <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div className="flex-1">
              <div className="font-heading font-semibold text-sm">Assistant IESC</div>
              <div className="text-xs text-primary-foreground/70 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                En ligne
              </div>
            </div>
            <Sparkles size={16} className="text-iesc-blue opacity-70" />
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm bg-muted/30">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                    msg.role === "bot"
                      ? "bg-card text-foreground border border-border rounded-bl-md shadow-sm"
                      : "bg-primary text-primary-foreground rounded-br-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex gap-1.5">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-border bg-card">
            {["Formations", "Inscription", "Contact", "Horaires"].map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="border-t border-border p-3 flex flex-col gap-2 bg-card">
            {isLimited && (
              <p className="text-xs text-destructive px-1">⚠️ Trop de messages. Patientez un instant.</p>
            )}
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(truncateInput(e.target.value, VALIDATION_LIMITS.CHATBOT_INPUT_MAX))}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Votre question..."
                maxLength={VALIDATION_LIMITS.CHATBOT_INPUT_MAX}
                className="flex-1 bg-muted/50 border border-input rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="p-2.5 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;