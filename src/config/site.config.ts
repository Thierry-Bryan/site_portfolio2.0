/**
 * Configuration générale du site
 */
export const siteConfig = {
  name: "Bryan Thierry",
  title: "Portfolio Bryan Thierry",
  url: "https://portfolio.bryan-thierry.fr",
  description: "Portfolio de Bryan Thierry - Webdesigner & Développeur Front-End",
  
  author: {
    name: "Bryan Thierry",
    email: "bryan.thierry.pro@gmail.com",
  },
  
  social: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/bryan.thierry.75/?hl=fr-ca",
      label: "Inspiration & visuels",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bryan-thierry/",
      label: "Réseau pro",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/bryanthierry1",
      label: "Portfolio créatif",
    },
  ],
  
  emailjs: {
    serviceId: "service_umix94v",
    templateId: "template_6c9qm4d",
    publicKey: "GsG27-bkg0ygtBOHf",
  },
  
  features: {
    enableThemeToggle: true,
    enableContactModal: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
