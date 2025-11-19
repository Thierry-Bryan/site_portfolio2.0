# Structure PocketBase - Portfolio Bryan Thierry

Ce document décrit la structure des collections PocketBase recommandées pour gérer dynamiquement le contenu du portfolio.

## 📦 Collections Existantes

### 1. `projets` ✅ (Déjà créée)
Gestion des projets portfolio avec leurs relations.

**Champs:**
- `slug` (text, unique, required) - URL-friendly identifier
- `title` (text, required) - Titre du projet
- `description` (text, required) - Description courte
- `contenu` (editor, optional) - Contenu détaillé en rich text
- `theme` (select, required) - Thème visuel (RBA, les-12-fragments, orange, ca-va-trailer, echo-safe, omnisphere, ocean, cyberpunk, sunset, basique, multicolore)
- `image_principale` (file, required) - Image de couverture
- `images` (file, multiple) - Galerie d'images
- `date_realisation` (date, optional) - Date de réalisation
- `url_site` (url, optional) - Lien vers le site
- `url_github` (url, optional) - Lien vers le repo GitHub
- `tags` (relation, multiple) - Relation vers `tags`
- `technologies` (relation, multiple) - Relation vers `technologies`
- `published` (bool, default: false) - Publié ou brouillon
- `order` (number, required) - Ordre d'affichage

**Relations:**
- `tags` → Collection `tags`
- `technologies` → Collection `technologies`

---

### 2. `tags` ✅ (Déjà créée)
Tags pour catégoriser les projets (Web, Mobile, Design, etc.)

**Champs:**
- `name` (text, unique, required)
- `slug` (text, unique, required)
- `color` (text, optional) - Couleur hex pour l'affichage

---

### 3. `technologies` ✅ (Déjà créée)
Technologies utilisées dans les projets (React, Node.js, etc.)

**Champs:**
- `name` (text, unique, required)
- `slug` (text, unique, required)
- `icon` (text, optional) - Nom d'icône ou URL
- `category` (select) - frontend, backend, design, tools

---

## 🆕 Collections Recommandées à Créer

### 4. `pages`
Gestion des pages dynamiques du site.

**Champs:**
- `slug` (text, unique, required) - URL de la page (ex: "services", "a-propos")
- `title` (text, required) - Titre de la page
- `description` (text, optional) - Description courte
- `theme` (select, required) - Thème par défaut de la page
- `seo_title` (text, optional) - Titre SEO
- `seo_description` (text, optional) - Meta description
- `seo_image` (file, optional) - Image OpenGraph
- `published` (bool, default: false)
- `order` (number, required)

**Exemple d'utilisation:**
```typescript
const page = await pb.collection("pages").getFirstListItem(`slug="services"`);
```

---

### 5. `sections`
Sections modulaires pour composer les pages.

**Champs:**
- `page` (relation, required) - Relation vers `pages`
- `type` (select, required) - hero, text, cards, timeline, gallery, cta, custom
- `title` (text, optional) - Titre de la section
- `content` (editor, optional) - Contenu en rich text
- `theme` (select, optional) - Override du thème de la page
- `settings` (json, optional) - Configuration spécifique (ex: nombre de colonnes, layout)
- `order` (number, required) - Ordre d'affichage
- `published` (bool, default: true)

**Exemple de `settings` JSON:**
```json
{
  "columns": 3,
  "layout": "grid",
  "background": "gradient",
  "align": "center"
}
```

**Relation:**
- `page` → Collection `pages`

---

### 6. `competences`
Compétences techniques et soft skills.

**Champs:**
- `name` (text, required) - Nom de la compétence
- `category` (select, required) - frontend, backend, design, tools, soft-skills
- `level` (number, min: 1, max: 5) - Niveau de maîtrise
- `icon` (text, optional) - Nom d'icône
- `order` (number, required)
- `published` (bool, default: true)

**Catégories:**
- `frontend` - HTML, CSS, JavaScript, React, Astro, etc.
- `backend` - Node.js, PHP, Python, Databases, etc.
- `design` - Figma, Photoshop, UI/UX, etc.
- `tools` - Git, Docker, VS Code, etc.
- `soft-skills` - Communication, Gestion de projet, etc.

---

### 7. `experiences`
Expériences professionnelles, formations et projets personnels.

**Champs:**
- `title` (text, required) - Titre du poste ou formation
- `company` (text, required) - Entreprise ou école
- `location` (text, optional) - Lieu
- `type` (select, required) - work, education, personal
- `date_start` (date, required)
- `date_end` (date, optional) - Null si en cours
- `description` (editor, required) - Description détaillée
- `technologies` (json, optional) - Liste des technos utilisées
- `theme` (select, optional) - Thème visuel pour la timeline
- `order` (number, required)
- `published` (bool, default: true)

**Types:**
- `work` - Expérience professionnelle
- `education` - Formation
- `personal` - Projet personnel ou freelance

---

### 8. `config_site`
Configuration globale du site (collection singleton).

**Champs:**
- `site_name` (text, required) - Nom du site
- `site_description` (text, required) - Description globale
- `site_url` (url, required) - URL du site
- `contact_email` (email, required)
- `social_github` (url, optional)
- `social_linkedin` (url, optional)
- `social_twitter` (url, optional)
- `default_theme` (select, default: "ca-va-trailer")
- `seo_image` (file, optional) - Image par défaut

**Note:** Créer un seul enregistrement avec ID fixe.

---

### 9. `navigation`
Items du menu de navigation.

**Champs:**
- `label` (text, required) - Texte affiché
- `url` (text, required) - URL de destination
- `icon` (text, optional) - Nom d'icône
- `order` (number, required)
- `published` (bool, default: true)
- `target` (select, default: "_self") - _self, _blank

**Exemple:**
```typescript
const navItems = await pb.collection("navigation").getFullList({
  filter: "published = true",
  sort: "order",
});
```

---

### 10. `temoignages`
Témoignages clients et retours d'expérience.

**Champs:**
- `author` (text, required) - Nom de l'auteur
- `role` (text, required) - Poste
- `company` (text, optional) - Entreprise
- `content` (text, required) - Témoignage
- `avatar` (file, optional) - Photo de profil
- `rating` (number, min: 1, max: 5, optional)
- `published` (bool, default: false)
- `order` (number, required)

---

### 11. `articles` (Optionnel - Blog)
Articles de blog si vous souhaitez en ajouter.

**Champs:**
- `slug` (text, unique, required)
- `title` (text, required)
- `excerpt` (text, required) - Extrait
- `content` (editor, required) - Contenu complet
- `cover_image` (file, optional)
- `theme` (select, required)
- `tags` (json, optional) - Tags libres
- `author` (text, required)
- `published` (bool, default: false)
- `published_at` (date, optional)

---

## 🔄 Migration depuis le code actuel

### Étapes recommandées:

1. **Créer les nouvelles collections** via l'admin PocketBase
2. **Migrer les données hardcodées** (expériences, compétences, config)
3. **Créer les pages dynamiques** pour `/services`, `/a-propos`, etc.
4. **Composer les sections** pour chaque page
5. **Mettre à jour les composants Astro** pour fetch depuis PocketBase

### Exemple de migration pour la page "À propos":

```typescript
// Créer la page
const page = await pb.collection("pages").create({
  slug: "a-propos",
  title: "À propos",
  description: "Découvrez mon parcours",
  theme: "ca-va-trailer",
  published: true,
  order: 2,
});

// Créer les sections
await pb.collection("sections").create({
  page: page.id,
  type: "hero",
  title: "Bryan Thierry",
  content: "<p>Développeur Full Stack</p>",
  theme: "ca-va-trailer",
  order: 1,
  published: true,
});

await pb.collection("sections").create({
  page: page.id,
  type: "timeline",
  title: "Mon parcours",
  theme: "echo-safe",
  order: 2,
  published: true,
});
```

---

## 📊 Schéma de Relations

```
pages (1) ──────< (n) sections
                        │
                        └─ settings (JSON)

projets (n) ────< (n) tags
projets (n) ────< (n) technologies

experiences (n) ─── technologies (JSON)

navigation (standalone)
competences (standalone)
temoignages (standalone)
config_site (singleton)
articles (standalone, optional)
```

---

## 🎯 Avantages de cette structure

✅ **Pages dynamiques** - Créez des pages sans coder  
✅ **Sections modulaires** - Composez vos pages par blocs  
✅ **Thèmes par section** - Override du thème global  
✅ **SEO géré** - Titres, descriptions, OG images  
✅ **Ordre contrôlé** - Champ `order` pour tout organiser  
✅ **État de publication** - Brouillon / Publié  
✅ **Centralisation** - Toutes les données dans PocketBase  

---

## 🚀 Utilisation dans Astro

### Exemple: Récupérer une page avec ses sections

```typescript
import { pb } from "../utils/pb";

const page = await pb.collection("pages").getFirstListItem(`slug="services"`, {
  expand: "sections_via_page",
});

const sections = await pb.collection("sections").getFullList({
  filter: `page = "${page.id}" && published = true`,
  sort: "order",
});

// Render sections selon leur type
sections.forEach((section) => {
  switch (section.type) {
    case "hero":
      // Render Hero
      break;
    case "cards":
      // Render Cards
      break;
    // ...
  }
});
```

---

## 📝 Notes importantes

- **Pas de duplication** - Les types sont centralisés dans `src/types/index.ts`
- **Validation** - PocketBase valide les données à l'insertion
- **Performance** - Utiliser `getFullList` avec filtres pour optimiser
- **Cache** - Considérer un cache côté Astro pour les pages statiques
- **Images** - PocketBase gère l'upload et le stockage des fichiers

---

**Date de création:** 2025-01-19  
**Version:** 1.0  
**Auteur:** GitHub Copilot
