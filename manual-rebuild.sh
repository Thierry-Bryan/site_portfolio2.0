#!/bin/bash

# Script de rebuild manuel pour dépannage
# Usage: ./manual-rebuild.sh

echo "🔄 Déclenchement manuel du rebuild..."

# Option 1 : Via GitHub CLI (si installé)
if command -v gh &> /dev/null; then
    echo "📡 Déclenchement via GitHub CLI..."
    gh workflow run "Auto Rebuild - Scheduled & Webhook"
    echo "✅ Workflow déclenché ! Vérifiez sur GitHub Actions."
    exit 0
fi

# Option 2 : Via curl
echo "📡 Déclenchement via API GitHub..."

read -p "Entrez votre token GitHub : " GITHUB_TOKEN
read -p "Entrez votre nom d'utilisateur GitHub : " GITHUB_USERNAME

curl -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/repos/$GITHUB_USERNAME/site_portfolio2.0/actions/workflows/auto-rebuild.yml/dispatches \
  -d '{"ref":"main"}'

echo "✅ Commande envoyée ! Vérifiez GitHub Actions."