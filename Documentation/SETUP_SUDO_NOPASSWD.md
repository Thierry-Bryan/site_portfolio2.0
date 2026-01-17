# Configuration sudo sans mot de passe pour nginx

## Étapes à effectuer sur le VPS :

1. Connectez-vous à votre VPS en SSH
2. Exécutez : `sudo visudo`
3. Ajoutez cette ligne à la fin du fichier (remplacez `votre_utilisateur` par votre nom d'utilisateur SSH) :

```
votre_utilisateur ALL=(ALL) NOPASSWD: /usr/bin/mv * /etc/nginx/sites-available/portfolio, /bin/ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/, /bin/rm -f /etc/nginx/sites-enabled/default, /usr/sbin/nginx -t, /bin/systemctl reload nginx
```

4. Sauvegardez et quittez (Ctrl+X, puis Y, puis Entrée)

## Puis modifiez le workflow pour utiliser sudo sans mot de passe :

```yaml
# Remplacez les commandes sudo -S par sudo directement
sudo mv /tmp/portfolio.conf /etc/nginx/sites-available/portfolio
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

Cette approche est plus sécurisée car elle limite les commandes qui peuvent être exécutées sans mot de passe.