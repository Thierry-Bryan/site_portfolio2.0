# Service Webhook PocketBase → Vercel

## 🎯 Ce service surveille PocketBase et déclenche automatiquement un rebuild Vercel

### Configuration :
1. **Déployez ce service sur Railway** (nouveau projet)
2. **Ajoutez la variable d'environnement** :
   - `VERCEL_DEPLOY_HOOK` = Votre URL de Deploy Hook Vercel
3. **Le service vérifie automatiquement toutes les 2 minutes**

### URLs utiles :
- `/` : Statut du service
- `/check` : Déclencher une vérification manuelle

### ✅ Avantages :
- ✅ Pas de modification du site Astro
- ✅ Mode static conservé 
- ✅ Surveillance automatique
- ✅ Déclenche uniquement si changements détectés
- ✅ Gratuit sur Railway