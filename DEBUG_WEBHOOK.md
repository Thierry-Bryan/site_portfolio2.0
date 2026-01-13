# Test du Webhook GitHub Actions

## 🔍 Diagnostic du Problème

### 1. **Test Manuel du Workflow**

Allons sur GitHub Actions pour déclencher manuellement :
- GitHub.com → Votre repo → Actions onglet
- "Deploy to Infomaniak via FTP" → Run workflow
- Vérifiez si ça fonctionne

### 2. **Vérification des Secrets GitHub**

Dans votre repo → Settings → Secrets and variables → Actions, vérifiez que vous avez :

```
✅ FTP_SERVER
✅ FTP_USERNAME  
✅ FTP_PASSWORD
✅ POCKETBASE_URL
🚨 WEBHOOK_TOKEN (probablement manquant)
```

### 3. **Test Webhook PocketBase**

Ouvrez votre PocketBase Admin et testez le webhook :

**URL à utiliser :** 
```
https://api.github.com/repos/VOTRE-USERNAME/site_portfolio2.0/dispatches
```

**Headers requis :**
```
Authorization: token ghp_VOTRE_TOKEN_GITHUB
Content-Type: application/json
```

**Body :**
```json
{
  "event_type": "pocketbase-update"
}
```

### 4. **URL Webhook Correcte**

Remplacez `VOTRE-USERNAME` par votre vrai nom d'utilisateur GitHub dans l'URL du webhook.

### 5. **Test Rapide**

Créez ce fichier de test et poussez-le :