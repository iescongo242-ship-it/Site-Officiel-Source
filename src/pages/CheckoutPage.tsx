import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ShieldCheck, Smartphone, Info } from "lucide-react";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("MTN"); // 'MTN' ou 'AIRTEL'
  const [transactionId, setTransactionId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // LA CORRECTION EST ICI : on a bien appelé la fonction "handlePayment"
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
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
      transaction_id: transactionId, // C'est l'ID MTN/Airtel tapé par l'étudiant
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
      <Navbar />

      {/* EN-TÊTE SÉCURISÉ */}
      <div className="bg-[#1A4B84] pt-28 pb-12">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="mx-auto text-white mb-4" size={48} />
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
            Paiement Sécurisé
          </h1>
          <p className="text-gray-200">
            Finalisez votre pré-inscription en réglant les frais d'étude de dossier.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* RÉCAPITULATIF (Colonne Gauche) */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-4">Résumé</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Frais de dossier</span>
                <span className="font-bold">30.000 FCFA</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Frais transaction</span>
                <span className="font-bold text-green-600">Offerts</span>
              </div>
              <div className="border-t pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-[#1A4B84]">TOTAL</span>
                <span className="text-2xl font-bold text-[#CC1122]">30.000 FCFA</span>
              </div>
            </div>
          </div>

          {/* ZONE DE PAIEMENT (Colonne Droite) */}
          <div className="md:col-span-2">
            {!isSubmitted ? (
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisissez votre moyen de paiement</h2>
                
                {/* Choix de l'opérateur */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button 
                    onClick={() => setPaymentMethod("MTN")}
                    className={`border-2 rounded-xl p-4 flex flex-col items-center justify-center transition-all ${paymentMethod === "MTN" ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:border-yellow-400"}`}
                  >
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xl mb-2">MTN</div>
                    <span className="font-semibold text-gray-800">Mobile Money</span>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod("AIRTEL")}
                    className={`border-2 rounded-xl p-4 flex flex-col items-center justify-center transition-all ${paymentMethod === "AIRTEL" ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-red-500"}`}
                  >
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-xl mb-2">Airtel</div>
                    <span className="font-semibold text-gray-800">Airtel Money</span>
                  </button>
                </div>

                {/* Instructions de paiement */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
                  <h3 className="font-bold flex items-center gap-2 mb-4 text-[#1A4B84]">
                    <Smartphone size={20} />
                    Instructions de paiement
                  </h3>
                  <ol className="space-y-3 text-gray-700">
                    <li>1. Tapez le code <strong>{paymentMethod === "MTN" ? "*105#" : "*128#"}</strong> sur votre téléphone.</li>
                    <li>2. Choisissez l'option "Transfert d'argent".</li>
                    <li>3. Envoyez <strong className="text-black">30.000 FCFA</strong> au numéro de l'IESC : <strong className="text-xl text-[#CC1122] block mt-1">06 541 98 61</strong></li>
                    <li>4. Attendez le SMS de confirmation contenant l'<strong>ID de Transaction</strong>.</li>
                  </ol>
                </div>

                {/* Formulaire de validation */}
                <form onSubmit={handlePayment}>
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Entrez l'ID de Transaction reçu par SMS *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder={paymentMethod === "MTN" ? "Ex: 1234567890" : "Ex: PP.2005.12345"}
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A4B84] outline-none"
                    />
                  </div>
                  <button type="submit" className="w-full bg-[#1A4B84] hover:bg-[#113259] text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <CheckCircle2 />
                    Confirmer mon paiement
                  </button>
                </form>

              </div>
            ) : (
              // MESSAGE DE SUCCÈS
              <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-600" size={40} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Paiement en vérification !</h2>
                <p className="text-gray-600 mb-6">
                  Merci ! Votre ID de transaction <strong className="text-black">{transactionId}</strong> a bien été transmis à notre service comptabilité.
                </p>
                <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex items-start gap-3 text-left mb-8">
                  <Info className="shrink-0 mt-0.5" />
                  <p className="text-sm">Vous recevrez un email ou un message WhatsApp de confirmation d'ici 24 heures pour valider votre pré-inscription et votre Kit IESC.</p>
                </div>
                <a href="/" className="inline-block bg-gray-900 hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition-colors">
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