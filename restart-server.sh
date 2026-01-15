#!/bin/bash
# Surveillance simple sans inotify

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

# Démarrage initial
restart_server

# Surveillance par polling simple
LAST_MOD=""
while true; do
    if [ -d "dist/" ]; then
        CURRENT_MOD=$(find dist/ -type f -exec stat -c %Y {} \; 2>/dev/null | sort -n | tail -1)
        if [ "$CURRENT_MOD" != "$LAST_MOD" ] && [ -n "$CURRENT_MOD" ]; then
            if [ -n "$LAST_MOD" ]; then
                echo "📁 Changement détecté dans dist/"
                sleep 2
                restart_server
            fi
            LAST_MOD=$CURRENT_MOD
        fi
    fi
    sleep 5
done