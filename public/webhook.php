<?php
// Webhook endpoint pour PocketBase -> GitHub Actions
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Gestion des requêtes OPTIONS pour CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Log de debug (à supprimer en production)
error_log('Webhook called: ' . $_SERVER['REQUEST_METHOD'] . ' from ' . $_SERVER['REMOTE_ADDR']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Configuration GitHub (VOUS DEVEZ MODIFIER CES VALEURS)
    $githubRepo = 'Thierry-Bryan/site_portfolio2.0';
    $githubToken = 'ghp_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE'; // À REMPLACER !
    
    $webhookUrl = "https://api.github.com/repos/{$githubRepo}/dispatches";
    
    // Préparer les données du webhook
    $payload = [
        'event_type' => 'pocketbase-update',
        'client_payload' => [
            'timestamp' => date('c'),
            'source' => 'pocketbase-webhook',
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ]
    ];
    
    // Headers pour GitHub API
    $headers = [
        'Authorization: token ' . $githubToken,
        'Accept: application/vnd.github.everest-preview+json',
        'Content-Type: application/json',
        'User-Agent: PocketBase-Webhook/1.0'
    ];
    
    // Faire l'appel à GitHub
    $ch = curl_init($webhookUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($payload),
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_FOLLOWLOCATION => false
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    
    // Log pour debug
    error_log("GitHub API response: HTTP {$httpCode}, Error: {$curlError}");
    
    // Réponse
    if ($httpCode === 204 && empty($curlError)) {
        http_response_code(200);
        echo json_encode([
            'status' => 'success',
            'message' => 'Rebuild triggered successfully',
            'timestamp' => date('c'),
            'github_status' => $httpCode
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'Failed to trigger rebuild',
            'github_status' => $httpCode,
            'error' => $curlError ?: 'Unknown error',
            'timestamp' => date('c')
        ]);
    }
} else {
    // GET request - statut de l'endpoint
    http_response_code(200);
    echo json_encode([
        'status' => 'ready',
        'message' => 'PocketBase webhook endpoint is operational',
        'endpoint' => 'POST to this URL to trigger rebuild',
        'timestamp' => date('c')
    ]);
}
?>