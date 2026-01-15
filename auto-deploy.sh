#!/bin/bash
# Script à placer sur le serveur pour auto-déploiement

cd /srv/customer/sites/portfolio.bryan-thierry.fr

# Vérifier s'il y a des changements toutes les 30 secondes
while true; do
    # Fetch les derniers changements
    git fetch origin main
    
    # Comparer avec la version locale
    LOCAL=$(git rev-parse HEAD)
    REMOTE=$(git rev-parse origin/main)
    
    if [ $LOCAL != $REMOTE ]; then
        echo "🚀 Nouveau déploiement détecté..."
        git pull origin main
        npm ci
        npm run build
        pm2 restart portfolio
        echo "✅ Déploiement terminé !"
    fi
    
    sleep 30
done