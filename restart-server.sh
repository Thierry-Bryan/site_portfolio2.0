#!/bin/bash
# Surveillance simple sans inotify

cd /srv/customer/sites/portfolio.bryan-thierry.fr

echo "🔄 Surveillance démarrée..."

# Fonction de redémarrage
restart_server() {
    echo "🚀 Redémarrage du serveur..."
    
    # Arrêter tous les processus node
    pkill -f "node" 2>/dev/null || echo "Pas de Node"
    
    # Variables env pour PocketBase local
    echo "POCKETBASE_URL=https://portfolio.bryan-thierry.fr" > .env
    echo "PUBLIC_POCKETBASE_URL=https://portfolio.bryan-thierry.fr" >> .env
    
    # Attendre un peu
    sleep 2
    
    # Démarrer le serveur en arrière-plan
    export HOST=0.0.0.0
    export PORT=4321
    nohup node dist/server/entry.mjs > app.log 2>&1 &
    
    echo "✅ Serveur redémarré!"
    echo "🔍 Processus Node.js actifs:"
    ps aux | grep node | grep -v grep
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