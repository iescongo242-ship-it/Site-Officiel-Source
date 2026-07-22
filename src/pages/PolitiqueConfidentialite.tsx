import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Scale, Lock, Database, CreditCard, BookOpen } from "lucide-react";

const PolitiqueConfidentialite = () => {
  // Date de mise à jour dynamique
  const lastUpdate = "22 Juillet 2026";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SEO 
        title="Mentions Légales & Confidentialité" 
        description="Consultez les mentions légales, la politique de confidentialité et les conditions générales de l'Institut d'Enseignement Supérieur du Congo (IESC)." 
      />
      <Navbar />

      {/* EN-TÊTE JURIDIQUE */}
      <div className="bg-black pt-28 pb-16 border-b-4 border-[#CC1122]">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="mx-auto text-[#CC1122] mb-6" size={64} />
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Mentions Légales et Politique de Confidentialité
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparence, sécurité et respect de vos données personnelles.
          </p>
        </div>
      </div>

      {/* CONTENU LÉGAL */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* Barre de mise à jour */}
          <div className="bg-gray-100 px-8 py-4 border-b border-gray-200 text-sm text-gray-500 font-semibold flex items-center justify-between">
            <span>Document officiel de l'IESC</span>
            <span>Dernière mise à jour : {lastUpdate}</span>
          </div>

          <div className="p-8 md:p-12 space-y-12 text-gray-700 leading-relaxed">

            {/* SECTION 1 : ÉDITEUR */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Scale className="text-[#CC1122]" size={28} />
                <h2 className="text-2xl font-bold text-black font-heading">1. Éditeur du Site (Mentions Légales)</h2>
              </div>
              <p className="mb-4">Le présent site web (www.iesc-cg.net) est la propriété exclusive de l'<strong>Institut d'Enseignement Supérieur du Congo (IESC)</strong>, établissement privé d'enseignement supérieur agréé par le Ministère de tutelle de la République du Congo.</p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <ul className="space-y-3 text-sm">
                  <li><strong className="text-black">Dénomination sociale :</strong> Institut d'Enseignement Supérieur du Congo (IESC)</li>
                  <li><strong className="text-black">Siège social :</strong> 112 Avenue De France, Poto-Poto, Brazzaville, Congo</li>
                  <li><strong className="text-black">RCCM :</strong> <em>CG-BZV-01-2025-B13-00498</em></li>
                  <li><strong className="text-black">Contact :</strong> info@iesc-cg.net | (+242) 06 541 98 61</li>
                  <li><strong className="text-black">Hébergement :</strong> Ligne Web Services (LWS), Paris, France.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 2 : DONNÉES PERSONNELLES */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-[#CC1122]" size={28} />
                <h2 className="text-2xl font-bold text-black font-heading">2. Collecte et Traitement des Données</h2>
              </div>
              <p className="mb-4">Dans le cadre de son activité académique et de son processus d'admission en ligne, l'IESC est amené à collecter des données à caractère personnel (nom, prénom, numéro de téléphone, adresse e-mail, filière choisie).</p>
              <p className="mb-4">Ces données sont collectées dans le but exclusif de :</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-600">
                <li>Gérer les dossiers de pré-inscription et d'admission.</li>
                <li>Communiquer avec les candidats concernant leur orientation académique.</li>
                <li>Assurer le suivi comptable et la vérification des transactions (ID de paiement).</li>
              </ul>
              <div className="border-l-4 border-[#CC1122] pl-4 py-2 bg-red-50 text-black font-semibold rounded-r-lg">
                L'IESC s'engage formellement à ne jamais vendre, louer ou céder vos données personnelles à des tiers à des fins commerciales ou publicitaires.
              </div>
            </section>

            {/* SECTION 3 : SÉCURITÉ */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="text-[#CC1122]" size={28} />
                <h2 className="text-2xl font-bold text-black font-heading">3. Sécurité et Droits des Utilisateurs</h2>
              </div>
              <p className="mb-4">Les données recueillies sont stockées sur des serveurs sécurisés. Seuls les membres habilités de l'Administration (Direction, Scolarité, RH, Comptabilité) ont accès aux informations strictement nécessaires à l'exercice de leurs fonctions.</p>
              <p>Conformément à la législation en vigueur, tout utilisateur dispose d'un droit d'accès, de rectification, de portabilité et de suppression de ses données personnelles. Pour exercer ce droit, l'utilisateur peut adresser une demande formelle par courriel à : <strong>info@iesc-cg.net</strong>.</p>
            </section>

            {/* SECTION 4 : PAIEMENT ET CGV */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-[#CC1122]" size={28} />
                <h2 className="text-2xl font-bold text-black font-heading">4. Conditions Générales de Paiement (CGV)</h2>
              </div>
              <p className="mb-4">Le site permet le règlement des frais administratifs d'étude de dossier (50.000 FCFA) par validation d'ID de transaction (MTN Mobile Money, Airtel Money). Ces paiements constituent des frais de gestion incompressibles.</p>
              <p className="font-semibold text-black">Politique de remboursement :</p>
              <p className="mt-2">Les frais d'inscription et d'étude de dossier payés en ligne ou en présentiel <strong>ne sont pas remboursables</strong>, quel que soit le motif de désistement de l'étudiant, l'acte de candidature constituant une mobilisation des ressources administratives de l'Institut.</p>
            </section>

            {/* SECTION 5 : PROPRIÉTÉ INTELLECTUELLE */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-[#CC1122]" size={28} />
                <h2 className="text-2xl font-bold text-black font-heading">5. Propriété Intellectuelle et Cookies</h2>
              </div>
              <p className="mb-4">L'ensemble des éléments constituant ce site (textes, logos, charte graphique, images, code source) est la propriété exclusive de l'IESC. Toute reproduction, représentation ou diffusion, totale ou partielle, est strictement interdite sans autorisation écrite préalable.</p>
              <p><strong>Gestion des Cookies :</strong> Le site de l'IESC limite l'utilisation des cookies au strict nécessaire (fonctionnement technique du site, sécurité du formulaire de paiement). Nous n'utilisons pas de cookies de traçage publicitaire invasif.</p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;