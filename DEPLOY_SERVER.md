# 🚀 Déploiement Mode Serveur sur Apache

## ⚡ Configuration TEMPS RÉEL

**Ton site est maintenant configuré en mode serveur :**
- ✅ Données PocketBase en temps réel
- ✅ Modifications instantanées (0 délai)
- ✅ Plus besoin de rebuild

## 🔧 Déploiement Apache avec Node.js

### Option 1 : VPS avec Node.js (Recommandée)

```bash
# Sur ton serveur
npm ci
npm run build
node dist/server/entry.mjs
```

### Option 2 : Proxy Apache vers Node.js

Configuration Apache (`/etc/apache2/sites-available/portfolio.conf`):

```apache
<VirtualHost *:80>
    ServerName portfolio.bryan-thierry.fr
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    # Headers pour WebSocket si nécessaire
    ProxyPassMatch ^/(.*) http://localhost:3000/$1
</VirtualHost>
```

### Option 3 : PM2 pour Process Management

```bash
# Installation PM2
npm install -g pm2

# Démarrage
pm2 start dist/server/entry.mjs --name "portfolio"

# Auto-restart au redémarrage serveur
pm2 startup
pm2 save
```

## 🧪 Test Local

```bash
npm run build
node dist/server/entry.mjs
# Ton site tourne sur http://localhost:4321
```

## 🎯 Avantages Mode Serveur

- **Temps réel** : Modifications PocketBase = instantanées
- **Performance** : Cache intelligent côté serveur
- **SEO** : Rendu côté serveur conservé
- **Debugging** : Logs serveur en temps réel

## ⚠️ Si Apache seul

Si tu ne peux pas utiliser Node.js, retourne au mode static:
```js
// astro.config.mjs
output: "static"
```

Mais avec le mode serveur, **tes modifications PocketBase seront visibles IMMÉDIATEMENT !** 🔥