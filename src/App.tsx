import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FormationsPage from "./pages/FormationsPage.tsx";
import AdmissionsPage from "./pages/AdmissionsPage.tsx";
import CampusPage from "./pages/CampusPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import EvenementsPage from "./pages/EvenementsPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ChatBot from "./components/ChatBot.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";
import WeatherWidget from "./components/WeatherWidget.tsx";
import CookieConsent from "./components/CookieConsent.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/campus" element={<CampusPage />} />
          <Route path="/evenements" element={<EvenementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
        <WhatsAppButton />
        <div className="fixed top-24 right-4 z-40 hidden xl:block w-64">
          <WeatherWidget />
        </div>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
