#!/bin/bash

# Test webhook direct pour déclencher GitHub Actions
# Usage: ./test-webhook.sh

echo "🚀 Test du webhook GitHub Actions..."

# Demander le token GitHub
read -p "Token GitHub (ghp_...): " GITHUB_TOKEN

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Token requis !"
    exit 1
fi

echo "📡 Envoi webhook vers GitHub..."

response=$(curl -s -X POST \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"event_type": "pocketbase-update"}' \
    https://api.github.com/repos/Thierry-Bryan/site_portfolio2.0/dispatches)

echo "✅ Webhook envoyé !"
echo "🔍 Vérifiez GitHub Actions : https://github.com/Thierry-Bryan/site_portfolio2.0/actions"
echo "⏱️ Le site sera mis à jour dans 2-3 minutes"