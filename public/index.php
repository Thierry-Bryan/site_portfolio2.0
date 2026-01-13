<?php
/**
 * Proxy PHP pour application Astro en mode server
 * Permet de faire fonctionner Astro SSR sur Apache/PHP
 */

// Configuration
$ASTRO_SERVER_PORT = 3000; // Port où tournera le serveur Astro
$ASTRO_SERVER_HOST = 'localhost';

// Vérification si le serveur Astro est en cours d'exécution
function isAstroServerRunning($host, $port) {
    $connection = @fsockopen($host, $port, $errno, $errstr, 1);
    if ($connection) {
        fclose($connection);
        return true;
    }
    return false;
}

// Démarrage du serveur Astro si nécessaire
if (!isAstroServerRunning($ASTRO_SERVER_HOST, $ASTRO_SERVER_PORT)) {
    // Tentative de démarrage du serveur en arrière-plan
    $command = "cd " . __DIR__ . " && npm run start > /dev/null 2>&1 &";
    exec($command);
    
    // Attendre que le serveur démarre
    $attempts = 0;
    while (!isAstroServerRunning($ASTRO_SERVER_HOST, $ASTRO_SERVER_PORT) && $attempts < 30) {
        usleep(500000); // Attendre 0.5 seconde
        $attempts++;
    }
}

// Si le serveur Astro est disponible, faire le proxy
if (isAstroServerRunning($ASTRO_SERVER_HOST, $ASTRO_SERVER_PORT)) {
    $url = "http://{$ASTRO_SERVER_HOST}:{$ASTRO_SERVER_PORT}" . $_SERVER['REQUEST_URI'];
    
    // Initialiser cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);
    
    // Transférer les headers
    $headers = [];
    foreach ($_SERVER as $key => $value) {
        if (strpos($key, 'HTTP_') === 0) {
            $header = str_replace('HTTP_', '', $key);
            $header = str_replace('_', '-', $header);
            $headers[] = $header . ': ' . $value;
        }
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
    // Transférer le body pour POST/PUT
    if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, file_get_contents('php://input'));
    }
    
    // Exécuter la requête
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
    curl_close($ch);
    
    // Renvoyer la réponse
    http_response_code($httpCode);
    if ($contentType) {
        header('Content-Type: ' . $contentType);
    }
    echo $response;
    
} else {
    // Fallback : servir une page d'erreur temporaire
    http_response_code(503);
    echo '<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site en cours de démarrage - Portfolio Bryan Thierry</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .loading { animation: spin 1s linear infinite; display: inline-block; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    </style>
    <script>
        // Actualiser la page toutes les 3 secondes
        setTimeout(() => location.reload(), 3000);
    </script>
</head>
<body>
    <h1>🚀 Site en cours de démarrage</h1>
    <p>Le serveur démarre, veuillez patienter quelques instants...</p>
    <div class="loading">⚙️</div>
    <p><small>Actualisation automatique dans 3 secondes</small></p>
</body>
</html>';
}
?>