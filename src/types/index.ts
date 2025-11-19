/**
 * Types centralisés pour le portfolio
 * Source unique de vérité pour éviter les duplications
 */

// ============================================
// THÈMES
// ============================================

export type ThemeName =
  | "RBA"
  | "les-12-fragments"
  | "orange"
  | "ca-va-trailer"
  | "basique"
  | "echo-safe"
  | "omnisphere"
  | "ocean"
  | "cyberpunk"
  | "sunset"
  | "multicolore";

export type HeaderContrast = "light" | "dark";

export interface ThemeColors {
  primary: string;
  secondary: string;
  b1RGB: {
    light: string;
    dark: string;
  };
}

export interface ThemeConfig extends ThemeColors {
  headerContrast: {
    light: HeaderContrast;
    dark: HeaderContrast;
  };
}

// ============================================
// POCKETBASE - PROJETS
// ============================================

export interface ProjetTag {
  id: string;
  name: string;
  slug: string;
}

export interface ProjetTechnology {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface Projet {
  id: string;
  slug: string;
  title: string;
  description: string;
  theme: ThemeName;
  image_principale: string;
  images?: string[];
  tags?: ProjetTag[];
  technologies?: ProjetTechnology[];
  url_site?: string;
  url_github?: string;
  published: boolean;
  order: number;
  created: string;
  updated: string;
  contenu?: string;
  date_realisation?: string;
  expand?: {
    tags?: ProjetTag[];
    technologies?: ProjetTechnology[];
  };
}

// ============================================
// POCKETBASE - PAGES DYNAMIQUES
// ============================================

export interface Page {
  id: string;
  slug: string;
  title: string;
  description?: string;
  theme: ThemeName;
  published: boolean;
  order: number;
  seo_title?: string;
  seo_description?: string;
  seo_image?: string;
  created: string;
  updated: string;
}

export interface Section {
  id: string;
  page: string; // ID de la page parente
  type: "hero" | "text" | "cards" | "timeline" | "gallery" | "cta" | "custom";
  title?: string;
  content?: string;
  theme?: ThemeName; // Override du thème de la page
  order: number;
  settings?: Record<string, any>; // JSON flexible pour config spécifique
  published: boolean;
  created: string;
  updated: string;
}

// ============================================
// POCKETBASE - COMPÉTENCES
// ============================================

export interface Competence {
  id: string;
  name: string;
  category: "frontend" | "backend" | "design" | "tools" | "soft-skills";
  level: 1 | 2 | 3 | 4 | 5;
  icon?: string;
  order: number;
  published: boolean;
}

// ============================================
// POCKETBASE - EXPÉRIENCES
// ============================================

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  type: "work" | "education" | "personal";
  date_start: string;
  date_end?: string;
  description: string;
  technologies?: string[];
  theme?: ThemeName;
  order: number;
  published: boolean;
}

// ============================================
// POCKETBASE - CONFIGURATION SITE
// ============================================

export interface ConfigSite {
  id: string;
  site_name: string;
  site_description: string;
  site_url: string;
  contact_email: string;
  social_github?: string;
  social_linkedin?: string;
  social_twitter?: string;
  default_theme: ThemeName;
  seo_image?: string;
}

// ============================================
// POCKETBASE - NAVIGATION
// ============================================

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
  order: number;
  published: boolean;
  target?: "_blank" | "_self";
}

// ============================================
// POCKETBASE - TÉMOIGNAGES
// ============================================

export interface Temoignage {
  id: string;
  author: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  published: boolean;
  order: number;
  created: string;
}

// ============================================
// POCKETBASE - ARTICLES/BLOG
// ============================================

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  theme: ThemeName;
  tags?: string[];
  author: string;
  published: boolean;
  published_at?: string;
  created: string;
  updated: string;
}

// ============================================
// COMPOSANTS
// ============================================

export interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  theme?: ThemeName;
  href?: string;
  className?: string;
}
