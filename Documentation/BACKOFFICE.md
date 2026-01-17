# 🔐 GUIDE BACKOFFICE ADMIN

## Accès au Backoffice

### URL de connexion

```
https://portfolio.bryan-thierry.fr/admin
```

### Créer ton compte admin PocketBase

**Option 1 : Via le terminal PocketBase (sur le serveur)**

```bash
cd /srv/customer/sites/portfolio.bryan-thierry.fr/Backend/pocketbase
./pocketbase admin create email@example.com motdepasse123
```

**Option 2 : Via l'interface PocketBase**

1. Va sur `https://portfolio.bryan-thierry.fr/_/`
2. Crée un compte admin
3. Utilise ces identifiants sur `/admin`

---

## 📋 Fonctionnalités du Backoffice

### 1. **Dashboard** (`/admin/dashboard`)

- Vue d'ensemble des statistiques
- Nombre de projets, thèmes, tags, technologies
- Accès rapide aux différentes sections

### 2. **Gestion des Thèmes** (`/admin/themes`)

✨ **NOUVEAUTÉ : Color Picker Visuel**

**Créer un nouveau thème :**

1. Cliquer sur "NOUVEAU THÈME"
2. Choisir un nom (slug, ex: "mon-super-theme")
3. Sélectionner les couleurs avec les color pickers :
   - **Primaire (p)** : Couleur principale des boutons/liens
   - **Secondaire (s)** : Couleur secondaire
   - **Accent (a)** : Couleur d'accentuation
   - **Fond Base (b1)** : Couleur de fond
   - **Texte Base (bc)** : Couleur du texte
4. (Optionnel) Définir les couleurs du mode sombre
5. **Aperçu en temps réel** pendant que tu choisis les couleurs
6. Enregistrer

**Modifier un thème existant :**

- Cliquer sur "MODIFIER" sur un thème
- Ajuster les couleurs
- Enregistrer

**Supprimer un thème :**

- Cliquer sur 🗑️
- Confirmer la suppression

### 3. **Gestion des Projets** (`/admin/projets`)

_(À venir dans la prochaine version)_

- Créer, modifier, supprimer des projets
- Upload d'images
- Association avec tags, technologies et thèmes

### 4. **Gestion des Tags & Technologies**

_(À venir)_

- Gérer les catégories
- Gérer les technologies

---

## 🎨 Comment utiliser les thèmes sur les projets

Une fois ton thème créé via le backoffice :

1. Va dans PocketBase Admin : `https://portfolio.bryan-thierry.fr/_/`
2. Collection `projets`
3. Édite un projet
4. Dans le champ `theme`, sélectionne ton nouveau thème
5. Le projet utilisera automatiquement les couleurs que tu as définies !

---

## 🔒 Sécurité

- Seuls les **admins PocketBase** peuvent accéder au backoffice
- Connexion sécurisée via authentification PocketBase
- Session persistante (reste connecté)
- Bouton déconnexion sur le dashboard

---

## 💡 Astuces

### Tester un thème rapidement

1. Crée le thème dans `/admin/themes`
2. Utilise l'aperçu en temps réel pour voir le rendu
3. Applique-le à un projet de test
4. Visite la page du projet pour voir le résultat final

### Cohérence des couleurs

- Utilise des couleurs contrastées entre fond (b1) et texte (bc)
- La couleur primaire (p) doit ressortir sur le fond
- Teste avec et sans mode sombre

### Nommage des thèmes

- Utilise des noms descriptifs : `projet-rba`, `ca-va-trailer`, etc.
- Évite les espaces (utilise des tirets)
- Minuscules uniquement

---

## 🚀 Déploiement automatique

Toute modification dans le backoffice met à jour **immédiatement** PocketBase, donc :

- ✅ Les changements sont instantanés
- ✅ Pas besoin de redéployer le site
- ✅ Les thèmes sont synchronisés automatiquement

---

## 📞 Support

En cas de problème :

1. Vérifie que tu es bien connecté en tant qu'admin
2. Consulte la console du navigateur (F12) pour les erreurs
3. Vérifie que PocketBase est accessible sur `https://portfolio.bryan-thierry.fr/_/`

---

## 🎯 Prochaines fonctionnalités prévues

- [ ] Gestion complète des projets avec upload d'images
- [ ] Gestion des tags et technologies
- [ ] Prévisualisation live des projets
- [ ] Export/Import de thèmes
- [ ] Statistiques avancées
- [ ] Gestion des médias (images, vidéos)
