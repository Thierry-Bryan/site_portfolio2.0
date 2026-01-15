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
sleep 2
nohup bash -c 'HOST=0.0.0.0 PORT=4321 node dist/server/entry.mjs' > app.log 2>&1 &
echo "✅ Déploiement terminé!"
'@

# Exécution SSH
ssh Hr2eaRMsArq_bryan_portfolio@57-106538.ssh.hosting-ik.com $sshCommands

Write-Host "🎉 Déploiement terminé!" -ForegroundColor Green
Write-Host "🌍 Site disponible sur: https://portfolio.bryan-thierry.fr" -ForegroundColor Cyan