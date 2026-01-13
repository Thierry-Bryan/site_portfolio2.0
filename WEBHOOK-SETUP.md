# 🚀 Configuration Webhook PocketBase -> GitHub

## ÉTAPES OBLIGATOIRES :

### 1. Créer un Personal Access Token GitHub
1. Aller sur https://github.com/settings/tokens
2. Cliquer "Generate new token (classic)"
3. Donner un nom : "PocketBase Webhook"
4. Sélectionner les permissions :
   - [x] `repo` (Full control of private repositories)
   - [x] `workflow` (Update GitHub Action workflows)
5. Cliquer "Generate token"
6. **COPIER LE TOKEN** (vous ne le verrez qu'une fois !)

### 2. Configurer le webhook
1. Ouvrir `public/webhook.php`
2. Remplacer `ghp_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE` par votre vrai token
3. Commiter et pusher

### 3. Configurer PocketBase
Dans votre PocketBase Admin (https://pocketbase-portfolio-production.up.railway.app/_/):

1. Aller dans **Settings** > **Hooks**
2. Ajouter un hook pour les collections `projets`, `tags`, `technologies`
3. **URL du webhook** : `https://portfolio.bryan-thierry.fr/webhook.php`
4. **Méthode** : POST
5. **Headers** : `Content-Type: application/json`

### 4. Tester
- Modifier un projet dans PocketBase
- Le site se rebuild automatiquement en ~30 secondes !

## URL du webhook : 
```
https://portfolio.bryan-thierry.fr/webhook.php
```