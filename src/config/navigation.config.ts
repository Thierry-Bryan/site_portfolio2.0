/**
 * Configuration de la navigation du site
 */

export interface NavLink {
  label: string;
  href: string;
}

export const navigationConfig = {
  logo: {
    text: "BRYAN THIERRY",
    href: "/",
  },
  
  links: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Projets",
      href: "/projets",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "À propos",
      href: "/a-propos",
    },
  ],
  
  cta: {
    label: "ME CONTACTER",
    onClick: "openContactModal",
  },
} as const;

export type NavigationConfig = typeof navigationConfig;
