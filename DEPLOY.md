# 🚀 Guide de Déploiement - Portfolio Optimisé

## 📋 Pré-requis

- Node.js 18+ installé
- PM2 installé globalement: `npm install -g pm2`
- Git configuré

## 🔧 Étapes de Déploiement

### 1. Build du Projet

```bash
# Installer les dépendances
npm install

# Build de production
npm run build
```

✅ **Vérification:** Le dossier `dist/` doit être créé avec les fichiers compressés (.br et .gz)

### 2. Test Local de la Compression

```bash
# Tester les fichiers compressés
node test-compression.mjs
```

**Résultats attendus:**
- CSS: 103.40 KB → 15.17 KB (85.3% Brotli)
- JS: Réduction de 60-70%
- Middleware et server-compression.mjs trouvés ✅

### 3. Configuration PM2

Créer ou vérifier `ecosystem.config.cjs` :

```javascript
module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: './dist/server/entry.mjs',
      cwd: '/chemin/vers/site_portfolio2.0',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 4321
      },
      instances: 1,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '500M',
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    }
  ]
};
```

### 4. Démarrer avec PM2

```bash
# Créer le dossier logs si nécessaire
mkdir -p logs

# Démarrer l'application
pm2 start ecosystem.config.cjs

# Vérifier le statut
pm2 status

# Voir les logs
pm2 logs portfolio
```

### 5. Tester en Production

#### Option A: Avec Git Bash / WSL

```bash
# Tester la page d'accueil
curl -H "Accept-Encoding: br" -I http://localhost:4321/

# Tester un fichier CSS
curl -H "Accept-Encoding: br" -I http://localhost:4321/_astro/style.C-TNuVJ1.css

# Résultat attendu:
# Content-Encoding: br
# Cache-Control: public, max-age=31536000, immutable
# X-Content-Type-Options: nosniff
```

#### Option B: Avec PowerShell

```powershell
# Tester la page d'accueil
$r = Invoke-WebRequest -Uri "http://localhost:4321/" -Method Head -Headers @{"Accept-Encoding"="br"} -UseBasicParsing
$r.Headers

# Vérifier les headers spécifiques
Write-Host "Cache-Control: $($r.Headers['Cache-Control'])"
Write-Host "Content-Encoding: $($r.Headers['Content-Encoding'])"
```

### 6. Configuration Nginx (Optionnel)

Si vous utilisez Nginx en reverse proxy :

```nginx
server {
    listen 80;
    server_name portfolio.bryan-thierry.fr;

    # Compression Brotli (si nginx-module-brotli installé)
    brotli on;
    brotli_comp_level 6;
    brotli_types text/plain text/css application/javascript application/json image/svg+xml;

    # Gzip fallback
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/javascript application/json;

    # Cache statique
    location ~* \.(css|js|jpg|jpeg|png|gif|svg|webp|avif|woff2|woff|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Proxy vers Node.js
    location / {
        proxy_pass http://localhost:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🔍 Monitoring

### Commandes PM2 Utiles

```bash
# Statut de l'application
pm2 status

# Logs en temps réel
pm2 logs portfolio --lines 100

# Redémarrer après modifications
pm2 restart portfolio

# Sauvegarder la configuration PM2
pm2 save

# Auto-démarrage au boot
pm2 startup
```

### Vérifier les Performances

```bash
# Utiliser test-compression.mjs
node test-compression.mjs

# Vérifier la taille des bundles
ls -lh dist/client/_astro/

# Monitorer la RAM/CPU
pm2 monit
```

## 📊 Métriques Attendues

| Métrique | Cible | Statut |
|----------|-------|--------|
| Compression CSS (Brotli) | ≥85% | ✅ 85.3% |
| Compression JS (Brotli) | ≥60% | ✅ 64-71% |
| Cache headers | 30/30 | ✅ |
| Inline styles | <20 | ✅ 16 |
| Requêtes HTTP | <27 | ✅ ~25 |
| Domaines externes | <6 | ✅ 6 |
| Score GreenIT | Grade A | 🎯 |

## 🐛 Troubleshooting

### Le serveur ne démarre pas

```bash
# Vérifier le port
lsof -i :4321  # Linux/Mac
netstat -ano | findstr :4321  # Windows

# Tuer le processus si nécessaire
pm2 kill
pm2 start ecosystem.config.cjs
```

### Les fichiers compressés ne sont pas servis

1. Vérifier que les fichiers .br/.gz existent :
   ```bash
   ls dist/client/_astro/*.br
   ls dist/client/_astro/*.gz
   ```

2. Vérifier le middleware :
   ```bash
   cat src/middleware.ts
   ```

3. Rebuilder si nécessaire :
   ```bash
   npm run build
   ```

### Headers de cache non présents

- Vérifier que `src/middleware.ts` est bien présent
- Le middleware Astro s'applique automatiquement en mode SSR
- Redémarrer PM2 : `pm2 restart portfolio`

## 🎯 Prochaines Optimisations

1. **Self-host Google Fonts** pour supprimer 1 domaine externe supplémentaire
2. **Optimiser les images** avec Sharp quality:80
3. **Mettre en place un CDN** (Cloudflare) pour cache global

## 📚 Documentation

- Configuration compression : `COMPRESSION_CONFIG.md`
- Middleware Astro : `src/middleware.ts`
- Compression serveur : `server-compression.mjs`
- Test automatique : `test-compression.mjs`

---

✨ **Félicitations !** Votre portfolio est optimisé pour le grade A GreenIT !
