#!/bin/bash
# Script auto-deploy simple - vérification périodique

cd /srv/customer/sites/portfolio.bryan-thierry.fr

while true; do
    git fetch origin main >/dev/null 2>&1
    
    LOCAL=$(git rev-parse HEAD 2>/dev/null)
    REMOTE=$(git rev-parse origin/main 2>/dev/null)
    
    if [ "$LOCAL" != "$REMOTE" ]; then
        echo "🚀 Mise à jour détectée..."
        git pull origin main
        npm ci >/dev/null 2>&1
        npm run build >/dev/null 2>&1
        pm2 restart portfolio >/dev/null 2>&1 || pm2 start npm --name "portfolio" -- start >/dev/null 2>&1
        echo "✅ Déploiement terminé!"
    fi
    
    sleep 10
done