🎯 **CONFIGURATION WEBHOOK POCKETBASE**

## 📝 À faire maintenant :

### 1. **Créer Token GitHub** 
- Allez sur: https://github.com/settings/tokens
- Cliquez "Generate new token (classic)"  
- Nom: `Portfolio Webhook`
- Cochez: `repo` (contrôle total des dépôts)
- Copiez le token

### 2. **Ajouter Secret GitHub**
- Dans votre repo → Settings → Secrets → Actions
- Nom: `WEBHOOK_TOKEN`
- Valeur: [le token du point 1]

### 3. **Configuration PocketBase Railway**
URL Admin: https://votre-pocketbase-url.up.railway.app/_/
→ Settings → Webhooks → Add New

```
Name: GitHub Auto Deploy
URL: https://api.github.com/repos/VOTRE-USERNAME/site_portfolio2.0/dispatches
Method: POST

Headers:
Authorization: token VOTRE_GITHUB_TOKEN
Content-Type: application/json

Body:
{
  "event_type": "pocketbase-update"
}

Collections à surveiller:
☑️ projets (create, update, delete)
☑️ tags (create, update, delete)  
☑️ technologies (create, update, delete)
```

## 🧪 **Test Final**

1. Commitez les changements: `git add . && git commit -m "Config webhook" && git push`
2. Dans PocketBase: modifiez un projet
3. GitHub Actions → vérifiez qu'un workflow se lance
4. Site mis à jour en ~3 minutes !

## ✅ **Avantages**

- Mode static = compatible Apache ✅
- Mises à jour auto PocketBase → Site ✅  
- Performances optimales ✅
- Zéro coût supplémentaire ✅