#!/bin/bash
# Surveillance des fichiers et redémarrage automatique

cd /srv/customer/sites/portfolio.bryan-thierry.fr

echo "🔄 Surveillance démarrée..."

# Fonction de redémarrage
restart_server() {
    echo "🚀 Redémarrage du serveur..."
    
    # Arrêter
    pm2 stop portfolio 2>/dev/null || echo "Pas de PM2"
    pm2 delete portfolio 2>/dev/null || echo "Pas de PM2"
    pkill -f "node" 2>/dev/null || echo "Pas de Node"
    
    # Variables env
    echo "POCKETBASE_URL=https://pocketbase-portfolio-production.up.railway.app" > .env
    echo "PUBLIC_POCKETBASE_URL=https://pocketbase-portfolio-production.up.railway.app" >> .env
    
    # Démarrer
    pm2 start dist/server/entry.mjs --name portfolio --env HOST=0.0.0.0 --env PORT=4321
    pm2 save
    
    echo "✅ Serveur redémarré!"
}

# Surveillance des fichiers dist/
while true; do
    inotifywait -r -e modify,create,delete dist/ 2>/dev/null
    echo "📁 Changement détecté dans dist/"
    sleep 3
    restart_server
    sleep 10
done