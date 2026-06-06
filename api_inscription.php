<?php
// 1. Autoriser React à communiquer avec ce fichier (Sécurité CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Gérer la requête de vérification de React
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// =========================================================================
// 🚨 TES INFORMATIONS SECRÈTES À REMPLIR ICI 🚨
// =========================================================================
$host = "91.216.107.183";          // Ex: localhost ou sql.lws-hosting.com
$db_name = "iescc2768694";  // Ex: iescc_inscriptions
$username = "iescc2768694";   // Ex: iescc_admin
$password = "IESc242@2026!";  // Ton mot de passe secret

// L'adresse email de la direction qui recevra l'alerte
$email_direction = "admissions@iesc-cg.net"; 
// =========================================================================


try {
    // 2. Connexion à la Base de données MySQL
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name . ";charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 3. Récupération des données envoyées par React
    $data = json_decode(file_get_contents("php://input"));

    // 4. Vérification que rien n'est vide
    if (!empty($data->prenom) && !empty($data->nom) && !empty($data->telephone) && !empty($data->filiere) && !empty($data->transaction_id)) {
        
        // 5. Préparation de la requête SQL (Sécurisée contre les pirates)
        $query = "INSERT INTO pre_inscriptions (prenom, nom, telephone, email, filiere, transaction_id) 
                  VALUES (:prenom, :nom, :telephone, :email, :filiere, :transaction_id)";
        
        $stmt = $conn->prepare($query);

        // Remplissage des tiroirs
        $stmt->bindParam(":prenom", $data->prenom);
        $stmt->bindParam(":nom", $data->nom);
        $stmt->bindParam(":telephone", $data->telephone);
        $stmt->bindParam(":email", $data->email);
        $stmt->bindParam(":filiere", $data->filiere);
        $stmt->bindParam(":transaction_id", $data->transaction_id);

        // 6. Sauvegarde et envoi du Mail !
        if ($stmt->execute()) {
            
            // Préparation du Mail d'alerte pour la RH
            $sujet = "🚨 Nouvelle pre-inscription Web : " . $data->prenom . " " . $data->nom;
            $message = "Bonjour,\n\nUne nouvelle pre-inscription a ete validee sur le site de l'IESC !\n\n";
            $message .= "👤 Nom : " . $data->prenom . " " . $data->nom . "\n";
            $message .= "🎓 Filiere : " . $data->filiere . "\n";
            $message .= "📞 Telephone : " . $data->telephone . "\n";
            $message .= "📧 Email : " . $data->email . "\n";
            $message .= "💳 ID de Transaction (MTN/Airtel) : " . $data->transaction_id . "\n\n";
            $message .= "Veuillez verifier cette transaction sur votre telephone.\n";
            
            $headers = "From: automatique@iesc-cg.net";

            // On envoie le mail
            mail($email_direction, $sujet, $message, $headers);

            // On répond à React que c'est un succès
            echo json_encode(["message" => "Succes"]);
        } else {
            echo json_encode(["message" => "Erreur d'enregistrement"]);
        }
    } else {
        echo json_encode(["message" => "Donnees incompletes"]);
    }
} catch(PDOException $exception) {
    echo json_encode(["message" => "Erreur de connexion BDD"]);
}
?>