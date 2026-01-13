<?php
/**
 * Index simple pour Astro en mode server sur Apache
 * Sans utilisation d'exec() pour compatibilité hébergement mutualisé
 */

// Récupération de l'URL demandée
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Si c'est une requête pour les assets statiques, les servir directement
if (preg_match('/\.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$/', $requestUri)) {
    // Laisser Apache servir les fichiers statiques
    return false;
}

// Configuration des headers
header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

// Chargement du contenu Astro pre-rendu si disponible
$staticFile = __DIR__ . '/client' . $requestUri;
if ($requestUri === '/') {
    $staticFile = __DIR__ . '/client/index.html';
}

// Si le fichier statique existe, le servir
if (file_exists($staticFile) && is_file($staticFile)) {
    readfile($staticFile);
    exit;
}

// Page d'erreur simple si rien n'est trouvé
http_response_code(200);
?><!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Bryan Thierry - En cours de chargement</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        }
        .container { max-width: 500px; padding: 2rem; }
        .logo { font-size: 3rem; margin-bottom: 1rem; }
        .title { font-size: 2rem; margin-bottom: 1rem; font-weight: 600; }
        .message { font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.9; }
        .loading { 
            animation: spin 1s linear infinite; 
            display: inline-block; 
            font-size: 2rem;
            margin: 1rem 0;
        }
        @keyframes spin { 
            from { transform: rotate(0deg); } 
            to { transform: rotate(360deg); } 
        }
        .btn {
            background: rgba(255,255,255,0.1);
            border: 2px solid rgba(255,255,255,0.3);
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-size: 1rem;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }
    </style>
    <script>
        // Auto-refresh toutes les 5 secondes
        setTimeout(() => window.location.reload(), 5000);
    </script>
</head>
<body>
    <div class="container">
        <div class="logo">🚀</div>
        <h1 class="title">Portfolio Bryan Thierry</h1>
        <p class="message">Site en cours de chargement...</p>
        <div class="loading">⚙️</div>
        <p style="margin: 2rem 0;">Le site se met à jour automatiquement</p>
        <a href="/" class="btn">↻ Actualiser</a>
        <p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.7;">
            Actualisation automatique dans 5 secondes
        </p>
    </div>
</body>
</html>