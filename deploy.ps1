# 🚀 Script de déploiement Infomaniak Node.js
Write-Host "🔄 Démarrage du déploiement..." -ForegroundColor Green

# Build local
Write-Host "🏗️ Build de l'application..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build échoué!" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Upload et déploiement sur Infomaniak..." -ForegroundColor Yellow

# Commandes SSH pour déployer
$sshCommands = @'
cd /srv/customer/sites/portfolio.bryan-thierry.fr || exit 1
git pull origin main || exit 1
echo "POCKETBASE_URL=https://pocketbase-portfolio-production.up.railway.app" > .env
echo "PUBLIC_POCKETBASE_URL=https://pocketbase-portfolio-production.up.railway.app" >> .env
npm install || exit 1
npm run build || exit 1
pkill -f "node" || echo "No processes found"
pm2 stop portfolio || echo "No PM2 process"
pm2 delete portfolio || echo "No PM2 process"
sleep 2
pm2 start dist/server/entry.mjs --name portfolio --env HOST=0.0.0.0 --env PORT=4321
pm2 save
echo "✅ Déploiement terminé!"
pm2 status
'@

# Exécution SSH
ssh Hr2eaRMsArq_bryan_portfolio@57-106538.ssh.hosting-ik.com $sshCommands

Write-Host "🎉 Déploiement terminé!" -ForegroundColor Green
Write-Host "🌍 Site disponible sur: https://portfolio.bryan-thierry.fr" -ForegroundColor Cyan