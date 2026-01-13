# 🎯 Configuration PocketBase Webhook - EXACTE

## ⚡ **Webhook PocketBase → GitHub Actions**

### 📍 **Étapes Précises :**

1. **Créez le token GitHub :**
   - https://github.com/settings/tokens
   - "Generate new token (classic)"
   - Nom : `Portfolio Deploy`
   - Permissions : `repo` et `workflow`
   - **Copiez le token** (commence par `ghp_`)

2. **Configuration PocketBase exacte :**

```
URL: https://api.github.com/repos/Thierry-Bryan/site_portfolio2.0/dispatches
Method: POST

Headers:
Authorization: token ghp_VOTRE_TOKEN_ICI
Content-Type: application/json

Body:
{
  "event_type": "pocketbase-update"
}
```

3. **Collections à surveiller :**
- ☑️ projets (all events)
- ☑️ tags (all events)  
- ☑️ technologies (all events)

## 🧪 **Test Immédiat**

**Testez le webhook directement :**

```bash
# Remplacez TOKEN par votre vrai token GitHub
curl -X POST \
  -H "Authorization: token TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"event_type": "pocketbase-update"}' \
  https://api.github.com/repos/Thierry-Bryan/site_portfolio2.0/dispatches
```

**Si ça marche :** GitHub Actions se lance en 30 secondes !

## ⏰ **Backup : Rebuild toutes les 5 minutes**

J'ai configuré un rebuild automatique **toutes les 5 minutes** pendant que vous configurez le webhook.

**Résultat :** Vos changements apparaîtront **maximum 5 minutes** après modification !

## 🔧 **Dépannage Rapide**

Si le webhook ne fonctionne toujours pas après configuration :

1. **Vérifiez dans PocketBase** que le webhook existe et est activé
2. **Testez avec curl** (commande ci-dessus)  
3. **Regardez GitHub Actions** → doit se déclencher
4. **Logs PocketBase** → vérifiez les erreurs webhook

## 💡 **Backoffice Futur**

Pour ton backoffice plus tard, tu peux :
- Utiliser l'API PocketBase directement
- Trigger le même webhook depuis ton backoffice
- Même délai de 2-3 minutes garantis !