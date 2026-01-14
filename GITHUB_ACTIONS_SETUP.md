# 🚀 Auto-Déploiement GitHub Actions → Infomaniak Node.js

## ⚙️ Configuration des Secrets GitHub

Pour que l'auto-déploiement fonctionne, vous devez configurer ces secrets dans GitHub :

### 📋 Étapes de configuration :

1. **Allez sur GitHub** : https://github.com/Thierry-Bryan/site_portfolio2.0
2. **Settings** → **Secrets and variables** → **Actions**  
3. **Cliquez "New repository secret"**

### 🔐 Secrets à ajouter : 

| Secret | Description | Exemple |
|--------|-------------|---------|
| `INFOMANIAK_HOST` | Adresse SSH externe | `57-106538.ssh.hosting-ik.com` |
| `INFOMANIAK_USER` | Nom d'utilisateur SSH | `client` |  
| `INFOMANIAK_PASSWORD` | Mot de passe SSH | `votre-password` |
| `INFOMANIAK_PORT` | Port SSH (optionnel) | `22` |

### 📝 Comment trouver ces infos :

1. **Connectez-vous à Infomaniak Manager**
2. **Node.js** → **Votre application**
3. **Console SSH** → Notez les identifiants

### 🎯 Fonctionnement :

- ✅ **Auto-déclenchement** : À chaque `git push` sur `main`
- ✅ **Déploiement complet** : `git pull` + `npm install` + `npm run build`  
- ✅ **Redémarrage automatique** : Restart de l'app Node.js
- ✅ **Déclenchement manuel** : Via l'onglet Actions GitHub

### 🔍 Monitoring :

- **GitHub Actions** : Voir les logs de déploiement
- **Infomaniak Console** : Vérifier l'état de l'app

---

**Une fois configuré, vos commits seront automatiquement déployés !** 🚀