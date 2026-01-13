# 🔧 Configuration Webhook PocketBase → GitHub Actions

## 📋 Étapes de Configuration

### 1. **Créer un Token GitHub**
1. Allez sur GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Cliquez "Generate new token (classic)"
3. Nom: `Portfolio PocketBase Webhook`
4. Sélectionnez: `repo` (Full control of private repositories)
5. Copiez le token généré

### 2. **Ajouter le Secret GitHub**
1. Dans votre repo GitHub → Settings → Secrets and variables → Actions
2. Cliquez "New repository secret"
3. Name: `WEBHOOK_TOKEN`
4. Value: [Le token généré ci-dessus]

### 3. **Configuration Webhook dans PocketBase**

Connectez-vous à votre PocketBase Railway et allez dans:
**Admin UI → Settings → Webhooks → Add New Webhook**

```
Name: GitHub Deploy Trigger
URL: https://api.github.com/repos/VOTRE-USERNAME/VOTRE-REPO/dispatches
Method: POST

Headers:
Authorization: token VOTRE_GITHUB_TOKEN
Content-Type: application/json

Body (JSON):
{
  "event_type": "pocketbase-update"
}

Events to trigger:
☑️ onCreate (projets)
☑️ onUpdate (projets) 
☑️ onDelete (projets)
☑️ onCreate (tags)
☑️ onUpdate (tags)
☑️ onDelete (tags)
☑️ onCreate (technologies)
☑️ onUpdate (technologies)
☑️ onDelete (technologies)
```

### 4. **Variables d'Environnement Manquantes**

Ajoutez ces secrets dans GitHub si pas déjà fait:
```
POCKETBASE_URL: https://votre-pocketbase-railway-url.up.railway.app
FTP_SERVER: ftp.infomaniak.com (ou votre serveur FTP)
FTP_USERNAME: votre-username-infomaniak
FTP_PASSWORD: votre-password-infomaniak
```

## 🔥 Comment ça marche

1. **Vous modifiez** quelque chose dans PocketBase (projet, tag, techno)
2. **PocketBase envoie** un webhook vers GitHub
3. **GitHub Actions se déclenche** automatiquement
4. **Site se rebuild** avec les nouvelles données
5. **Déploiement automatique** sur Infomaniak
6. **Votre site est à jour** en 2-3 minutes !

## 🧪 Test

1. Modifiez un projet dans PocketBase
2. Allez dans votre repo GitHub → Actions
3. Vous devriez voir un nouveau workflow qui se lance
4. Une fois terminé, vérifiez votre site

## ⚡ Avantages de cette solution

- ✅ **100% Apache compatible** (mode static)
- ✅ **Mises à jour automatiques** (webhook)
- ✅ **Performances optimales** (site statique)
- ✅ **Zéro coût supplémentaire** (GitHub Actions gratuit)
- ✅ **Logs complets** (debug facile dans GitHub Actions)