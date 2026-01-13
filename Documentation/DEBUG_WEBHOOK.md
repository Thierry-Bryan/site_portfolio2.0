# 🚨 Diagnostic Webhook - Problèmes Courants

## ✅ **Actions à vérifier MAINTENANT :**

### 1. **GitHub Actions a-t-il été déclenché ?**
➡️ Allez sur : `https://github.com/Thierry-Bryan/site_portfolio2.0/actions`
➡️ Vérifiez si le workflow "Deploy to Infomaniak via FTP" s'est lancé après le dernier push

### 2. **URL Webhook PocketBase (EXACTE)**
```
https://api.github.com/repos/Thierry-Bryan/site_portfolio2.0/dispatches
```

### 3. **Configuration Complète PocketBase**
Dans Railway PocketBase Admin → Settings → Webhooks :

```
Name: GitHub Auto Deploy
URL: https://api.github.com/repos/Thierry-Bryan/site_portfolio2.0/dispatches
Method: POST

Headers:
Authorization: token ghp_VOTRE_TOKEN_ICI
Content-Type: application/json

Body:
{
  "event_type": "pocketbase-update"
}

Events:
☑️ projets (onCreate, onUpdate, onDelete)
☑️ tags (onCreate, onUpdate, onDelete)
☑️ technologies (onCreate, onUpdate, onDelete)
```

### 4. **SOLUTION DE DÉPANNAGE**

J'ai créé `auto-rebuild.yml` qui rebuild automatiquement toutes les 30 minutes.

**Test immédiat :**
1. Allez sur GitHub → Actions 
2. "Auto Rebuild - Scheduled & Webhook"
3. "Run workflow" 
4. Attendez 3 minutes
5. Vérifiez votre site

### 5. **Dépannage Rapide**

Si vous êtes pressé, utilisez le rebuild manuel :