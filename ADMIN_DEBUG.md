# 🔧 Guide de Débogage Admin

## Problème : "Impossible de charger les thèmes/projets/tags"

### ✅ Solutions Appliquées

1. **Authentification renforcée**
   - Le token admin est maintenant sauvegardé dans **Cookie ET LocalStorage**
   - Toutes les pages vérifient l'authentification avant de charger les données
   - Redirection automatique vers `/admin` si non connecté

2. **Logs de débogage ajoutés**
   - Ouvrez la **Console du navigateur** (F12)
   - Vous verrez des messages comme :
     - ✅ `Admin connecté: admin@example.com`
     - ✅ `[PROJETS] 5 projets chargés`
     - ✅ `[THEMES] 3 thèmes chargés`
     - ❌ Si erreur : message détaillé avec la cause

### 🚀 Marche à suivre

1. **Déconnectez-vous complètement**
   - Ouvrez la Console (F12) → Application → Clear Storage
   - Supprimez tous les cookies et le localStorage

2. **Reconnectez-vous à `/admin`**
   - Utilisez vos identifiants admin PocketBase
   - La console doit afficher : ✅ `Admin connecté`

3. **Vérifiez les logs dans la console**
   - Si vous voyez `❌ Erreur`, c'est un problème de **règles API PocketBase**

### 🔒 Vérifications PocketBase (Si ça ne marche pas)

Sur votre VPS (https://portfolio.bryan-thierry.fr/_/), vérifiez :

#### Collection `projets`

- **API Rules → List/View** : `@request.auth.id != ""`  
  (= Accessible uniquement si authentifié)

#### Collection `themes`

- **API Rules → List/View** : `@request.auth.id != ""`

#### Collection `tags`

- **API Rules → List/View** : `@request.auth.id != ""`

#### Collection `technologies`

- **API Rules → List/View** : `@request.auth.id != ""`

### 🐛 Erreurs Chrome Extension

Les erreurs `chrome-extension://invalid/` sont **normales** et **ignorables**.  
Ce sont vos extensions de navigateur (bloqueurs de pub, etc.) qui essaient de s'injecter.

---

**Si le problème persiste après reconnexion :**

- Ouvrez la Console (F12)
- Copiez les messages d'erreur qui commencent par `❌`
- Vérifiez les règles API sur PocketBase
