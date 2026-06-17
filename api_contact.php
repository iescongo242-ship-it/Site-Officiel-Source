<?php
// Autoriser React à communiquer
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// =========================================================================
// 🚨 TES INFORMATIONS SECRÈTES LWS 🚨
// =========================================================================
$host = "91.216.107.183";          // Ex: localhost ou sql.lws-hosting.com
$db_name = "iescc2768694";  // Ex: iescc_inscriptions
$username = "iescc2768694";   // Ex: iescc_admin
$password = "IESc242@2026!";  // Ton mot de passe secret

$email_direction = "info@iesc-cg.net"; // L'email qui recevra les messages
// =========================================================================

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name . ";charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->nom) && !empty($data->email) && !empty($data->sujet) && !empty($data->message)) {
        
        $query = "INSERT INTO contacts (nom, email, telephone, sujet, message) 
                  VALUES (:nom, :email, :telephone, :sujet, :message)";
        
        $stmt = $conn->prepare($query);

        $stmt->bindParam(":nom", $data->nom);
        $stmt->bindParam(":email", $data->email);
        $stmt->bindParam(":telephone", $data->telephone);
        $stmt->bindParam(":sujet", $data->sujet);
        $stmt->bindParam(":message", $data->message);

        if ($stmt->execute()) {
            
            // Envoi de l'email d'alerte
            $sujet_mail = "Nouveau Message Site Web : " . $data->sujet;
            $message_mail = "Vous avez recu un nouveau message depuis la page Contact de l'IESC :\n\n";
            $message_mail .= "👤 Nom : " . $data->nom . "\n";
            $message_mail .= "📧 Email : " . $data->email . "\n";
            $message_mail .= "📞 Telephone : " . $data->telephone . "\n";
            $message_mail .= "📌 Sujet : " . $data->sujet . "\n\n";
            $message_mail .= "📝 Message :\n" . $data->message . "\n";
            
            $headers = "From: contact-web@iesc-cg.net\r\n";
            $headers .= "Reply-To: " . $data->email;

            mail($email_direction, $sujet_mail, $message_mail, $headers);

            echo json_encode(["message" => "Succes"]);
        } else {
            echo json_encode(["message" => "Erreur"]);
        }
    } else {
        echo json_encode(["message" => "Donnees incompletes"]);
    }
} catch(PDOException $exception) {
    echo json_encode(["message" => "Erreur BDD"]);
}
?>