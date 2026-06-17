import SEO from "@/components/SEO";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ShieldCheck, Smartphone, Info } from "lucide-react";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("MTN"); // 'MTN' ou 'AIRTEL'
  const [transactionId, setTransactionId] = useState("");
  const [transactionError, setTransactionError] = useState(""); // Notre variable d'erreur
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setTransactionError(""); // On efface les anciennes erreurs

    // --- LE VIGILE DE SÉCURITÉ (REGEX) ---
    if (paymentMethod === "MTN") {
      // MTN : Seulement des chiffres, entre 9 et 12 chiffres
      const mtnRegex = /^\d{9,12}$/;
      if (!mtnRegex.test(transactionId)) {
        setTransactionError("Format MTN invalide. L'ID doit contenir uniquement des chiffres (ex: 1234567890).");
        return; // On bloque l'envoi !
      }
    } else if (paymentMethod === "AIRTEL") {
      // AIRTEL : Lettres, chiffres, et points autorisés, entre 8 et 16 caractères (ex: PP.2005.12345)
      const airtelRegex = /^[A-Za-z0-9.]{8,16}$/;
      if (!airtelRegex.test(transactionId)) {
        setTransactionError("Format Airtel invalide. Vérifiez votre SMS (ex: PP.2005.12345).");
        return; // On bloque l'envoi !
      }
    }
    // -------------------------------------

    setIsSubmitted(true);

    // 1. On récupère les infos stockées lors de l'étape précédente (Admissions)
    const savedData = JSON.parse(localStorage.getItem("form_admissions") || "{}");

    // 2. On prépare les données à envoyer
    const dataToSend = {
      prenom: savedData.prenom || "Inconnu",
      nom: savedData.nom || "Inconnu",
      telephone: savedData.telephone || "Inconnu",
      email: savedData.email || "",
      filiere: savedData.filiere || "Non renseignée",
      transaction_id: transactionId, 
    };

    try {
      // 3. On appelle notre "Cuisinier" PHP sur LWS
      const response = await fetch("https://www.iesc-cg.net/api_inscription.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      console.log("Réponse du serveur :", result);
    } catch (error) {
      console.error("Erreur d'envoi :", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SEO 
        title="Paiement Sécurisé" 
        description="Finalisez votre pré-inscription à l'IESC en réglant vos frais d'étude de dossier de manière sécurisée via MTN Mobile Money ou Airtel Money." 
      />
      <Navbar />

      {/* EN-TÊTE SÉCURISÉ (Noir IESC pour l'autorité) */}
      <div className="bg-black pt-28 pb-12 border-b-4 border-[#CC1122]">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="mx-auto text-green-400 mb-4" size={56} />
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
            Paiement Sécurisé
          </h1>
          <p className="text-gray-300 text-lg">
            Finalisez votre pré-inscription en réglant les frais d'étude de dossier.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* RÉCAPITULATIF (Colonne Gauche) */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold font-heading text-black mb-4 border-b border-gray-100 pb-4">Résumé</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Frais d'inscription</span>
                <span className="font-bold text-black">50.000 FCFA</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Frais transaction</span>
                <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs">Offerts</span>
              </div>
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-black">TOTAL</span>
                <span className="text-2xl font-bold text-[#CC1122]">50.000 FCFA</span>
              </div>
            </div>
          </div>

          {/* ZONE DE PAIEMENT (Colonne Droite) */}
          <div className="md:col-span-2">
            {!isSubmitted ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold font-heading text-black mb-6">Choisissez votre moyen de paiement</h2>
                
                {/* Choix de l'opérateur (Couleurs des marques conservées pour la confiance) */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button 
                    onClick={() => {
                      setPaymentMethod("MTN");
                      setTransactionError(""); // On efface l'erreur si on change de méthode
                    }}
                    className={`border-2 rounded-xl p-4 flex flex-col items-center justify-center transition-all ${paymentMethod === "MTN" ? "border-yellow-400 bg-yellow-50 shadow-md scale-105" : "border-gray-100 hover:border-yellow-400 hover:bg-yellow-50/50"}`}
                  >
                    <div className="w-16 h-16 bg-[#FFCC00] rounded-full flex items-center justify-center font-bold text-black text-xl mb-3 shadow-sm">MTN</div>
                    <span className="font-bold text-gray-800">Mobile Money</span>
                  </button>

                  <button 
                    onClick={() => {
                      setPaymentMethod("AIRTEL");
                      setTransactionError(""); // On efface l'erreur si on change de méthode
                    }}
                    className={`border-2 rounded-xl p-4 flex flex-col items-center justify-center transition-all ${paymentMethod === "AIRTEL" ? "border-red-500 bg-red-50 shadow-md scale-105" : "border-gray-100 hover:border-red-500 hover:bg-red-50/50"}`}
                  >
                    <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center font-bold text-white text-xl mb-3 shadow-sm">Airtel</div>
                    <span className="font-bold text-gray-800">Airtel Money</span>
                  </button>
                </div>

                {/* Instructions de paiement (Le Numéro change automatiquement) */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                  <h3 className="font-bold flex items-center gap-2 mb-4 text-black">
                    <Smartphone size={20} className="text-[#CC1122]" />
                    Instructions de paiement
                  </h3>
                  <ol className="space-y-4 text-gray-700 font-medium">
                    <li className="flex gap-3"><span className="text-gray-400">1.</span> <span>Tapez le code <strong className="text-black bg-white px-2 py-1 border border-gray-200 rounded-md shadow-sm">{paymentMethod === "MTN" ? "*105#" : "*128#"}</strong> sur votre téléphone.</span></li>
                    <li className="flex gap-3"><span className="text-gray-400">2.</span> <span>Choisissez l'option "Transfert d'argent".</span></li>
                    <li className="flex gap-3"><span className="text-gray-400">3.</span> <span>Envoyez <strong>50.000 FCFA</strong> au numéro de l'IESC : <strong className="text-2xl text-[#CC1122] block mt-2 font-heading tracking-wider">{paymentMethod === "MTN" ? "06 541 98 61" : "05 022 64 08"}</strong></span></li>
                    <li className="flex gap-3"><span className="text-gray-400">4.</span> <span>Attendez le SMS de confirmation contenant l'<strong>ID de Transaction</strong>.</span></li>
                  </ol>
                </div>

                {/* Formulaire de validation avec le Vigile */}
                <form onSubmit={handlePayment}>
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-black mb-2">
                      Entrez l'ID de Transaction reçu par SMS *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder={paymentMethod === "MTN" ? "Ex: 1234567890" : "Ex: PP.2005.12345"}
                      value={transactionId}
                      onChange={(e) => {
                        setTransactionId(e.target.value);
                        setTransactionError(""); // On efface l'erreur quand l'étudiant re-tape
                      }}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-[#CC1122] focus:border-transparent outline-none transition-all shadow-sm text-lg uppercase ${transactionError ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                    />
                    
                    {/* AFFICHAGE DE L'ERREUR ROUGE SI LE VIGILE BLOQUE */}
                    {transactionError && (
                      <p className="text-red-600 text-sm font-semibold mt-2 flex items-center gap-1 animate-fade-in">
                        <Info size={16} /> {transactionError}
                      </p>
                    )}
                  </div>

                  {/* BOUTON D'ACTION ROUGE IESC */}
                  <button type="submit" className="w-full bg-[#CC1122] hover:bg-red-800 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]">
                    <CheckCircle2 size={22} />
                    Confirmer mon paiement
                  </button>
                </form>

              </div>
            ) : (
              // MESSAGE DE SUCCÈS
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle2 className="text-green-600" size={48} />
                </div>
                <h2 className="text-3xl font-bold font-heading text-black mb-4">Paiement en vérification !</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Merci ! Votre ID de transaction <strong className="text-black bg-gray-100 px-3 py-1 rounded-md">{transactionId}</strong> a bien été transmis.
                </p>
                <div className="bg-blue-50 text-[#1A4B84] p-5 rounded-xl flex items-start gap-3 text-left mb-8 border border-blue-100">
                  <Info className="shrink-0 mt-0.5" size={24} />
                  <p className="text-sm font-medium">Vous recevrez un email ou un message WhatsApp de confirmation d'ici 24 heures pour valider votre pré-inscription et réclamer votre Kit IESC.</p>
                </div>
                <a href="/" className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-md">
                  Retour à l'accueil
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;