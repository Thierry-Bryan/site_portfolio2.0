#!/bin/bash
# Auto-restart simple et efficace

PORT=3001
echo "🔗 Serveur de redémarrage sur port $PORT"

# Serveur de redémarrage simple
while true; do
  echo "HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nOK" | nc -l -p $PORT
  
  echo "🚀 Redémarrage déclenché..."
  
  # Aller dans le bon répertoire
  cd /srv/customer/sites/portfolio.bryan-thierry.fr
  
  # Arrêter les processus
  pm2 stop portfolio 2>/dev/null || echo "Pas de PM2"
  pm2 delete portfolio 2>/dev/null || echo "Pas de PM2"
  pkill -f "node" 2>/dev/null || echo "Pas de Node"
  
  # Variables d'environnement
  echo "POCKETBASE_URL=https://pocketbase-portfolio-production.up.railway.app" > .env
  echo "PUBLIC_POCKETBASE_URL=https://pocketbase-portfolio-production.up.railway.app" >> .env
  
  # Redémarrer
  pm2 start dist/server/entry.mjs --name portfolio --env HOST=0.0.0.0 --env PORT=4321
  pm2 save
  
  echo "✅ Serveur redémarré!"
  pm2 status
  
  sleep 5
done