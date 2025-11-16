export const projets = [
  {
    id: "echosafe",
    title: "ECHO SAFE",
    subtitle: "Application solidaire contre le harcèlement",
    theme: "echo-safe",
    type: "Mobile",
    year: 2024,
    tags: ["React Native", "UI/UX", "Social"],
    hero: {
      backgroundImage: "/mes-projets/mes-projets_echosafe.webp",
      title: "ECHO SAFE",
      description:
        "Application solidaire pour lutter contre le harcèlement : messagerie sécurisée, mood tracker et kit de secours, pensée pour l'humain et la simplicité.",
    },
    content: {
      description:
        "Echo Safe est né d'un constat aussi simple que révoltant : chaque année 15 million de personnes sont victimes de harcèlement, souvent livrées à elles-mêmes vers qui se tourner. Nous avons donc voulu offrir une application bienveillante où chaque victime puisse trouver un soutien rapide et personnel.",
      features: [
        "Aide de mes pairs : nous sommes passés par toutes les étapes : définir une stratégie de communication claire, penser l'expérience utilisateur à acquérir l'interface, puis coder le tout pour que ce prenne vie.",
        "Notre solution : une messagerie sécurisée pour mettre en relation victimes et bénévoles, un mood tracker pour suivre son état d'esprit au quotidien, et un kit de secours regroupant les numéros d'urgence et des ressources essentielles. Simple, direct et humain.",
      ],
    },
    images: {
      mockups: [
        "/projets/echosafe/echosafe-mockup-1.webp",
        "/projets/echosafe/echosafe-mockup-2.webp",
      ],
      screens: [
        "/projets/echosafe/echosafe-screen-1.webp",
        "/projets/echosafe/echosafe-screen-2.webp",
      ],
    },
  },
  {
    id: "12-fragments",
    title: "LES 12 FRAGMENTS",
    subtitle: "Site créatif autour de 12 avatars pixel art",
    theme: "les-12-fragments",
    type: "Web",
    year: 2023,
    tags: ["Pixel Art", "Animation", "Storytelling"],
    hero: {
      backgroundImage: "/mes-projets/mes-projets_12-fragments.webp",
      title: "LES 12 FRAGMENTS",
      description:
        "Site créatif autour de 12 avatars pixel art, chacun avec son histoire, ses univers interactif et narratif unique.",
    },
    content: {
      description:
        "Ce projet explore la création d'avatars personnalisables, intégralement conçus au pixel art via Illustrator.",
      features: [
        "J'ai défini 12 avatars aux différentes postes, représentant chacun un élève de ma classe, avec je ai ensuite inspirées d'écrire un web story de chacun pourpent.",
        "Le coeur du projet réside dans son storytelling : la chaque personnage à sa propre histoire ancrée dans un univers narratif commun.",
        "Le site est enrichi par une multitude d'animations interactives, élévé de l'expérience des personnages à travers production à profiter de l'utilisateur dans l'univers conçu pour enregistrer l'utilisateur dans l'univers.",
      ],
    },
    images: {
      mockups: ["/projets/12-fragments/12-fragments-mockup-1.webp"],
      screens: [
        "/projets/12-fragments/12-fragments-screen-1.webp",
        "/projets/12-fragments/12-fragments-screen-2.webp",
      ],
    },
  },
  {
    id: "omnisphere",
    title: "OMNISPHERE",
    subtitle: "Site immersif questionnant l'avenir des relations humaines",
    theme: "omnisphere",
    type: "Web",
    year: 2024,
    tags: ["Design", "UX/UI", "Immersif"],
    hero: {
      backgroundImage: "/mes-projets/mes-projets_omnisphere.webp",
      title: "OMNISPHERE",
      description:
        "Site immersif questionnant l'avenir des relations humaines avec design futuriste.",
    },
    content: {
      description:
        "Omnisphere est un projet de réflexion sur l'évolution des interactions humaines dans un monde de plus en plus digitalisé.",
      features: [
        "Design futuriste explorant les codes visuels de la science-fiction",
        "Interface immersive questionnant notre rapport à la technologie",
        "Expérience utilisateur pensée pour susciter la réflexion",
      ],
    },
    images: {
      mockups: ["/projets/omnisphere/omnisphere-mockup-1.webp"],
      screens: ["/projets/omnisphere/omnisphere-screen-1.webp"],
    },
  },
  {
    id: "cavatrailer",
    title: "ÇA VA TRAILER",
    subtitle: "Vitrine immersive pour un festival de cinéma",
    theme: "ca-va-trailer",
    type: "Web",
    year: 2024,
    tags: ["Cinéma", "Design", "Vitrine"],
    hero: {
      backgroundImage: "/mes-projets/mes-projets_cavatrailer.webp",
      title: "ÇA VA TRAILER",
      description:
        "Vitrine immersive pour un festival de cinéma avec identité visuelle forte.",
    },
    content: {
      description:
        "Site vitrine créé pour un festival de cinéma, mettant en avant l'identité visuelle et l'expérience immersive.",
      features: [
        "Design cinématographique adapté à l'univers du festival",
        "Interface immersive pour présenter la programmation",
        "Identité visuelle forte et cohérente",
      ],
    },
    images: {
      mockups: ["/projets/cavatrailer/cavatrailer-mockup-1.webp"],
      screens: ["/projets/cavatrailer/cavatrailer-screen-1.webp"],
    },
  },
  {
    id: "rba",
    title: "RBA",
    subtitle: "Refonte identité visuelle association biodiversité",
    theme: "RBA",
    type: "Design",
    year: 2023,
    tags: ["Branding", "Identité visuelle", "Environnement"],
    hero: {
      backgroundImage: "/mes-projets/mes-projets_rba.webp",
      title: "RBA",
      description:
        "Refonte complète de l'identité visuelle pour l'association biodiversité.",
    },
    content: {
      description:
        "Projet de refonte complète de l'identité visuelle pour une association dédiée à la préservation de la biodiversité.",
      features: [
        "Création d'une nouvelle identité visuelle moderne",
        "Adaptation aux enjeux environnementaux actuels",
        "Communication claire et engageante",
      ],
    },
    images: {
      mockups: ["/projets/rba/rba-mockup-1.webp"],
      screens: ["/projets/rba/rba-screen-1.webp"],
    },
  },
];

export function getProjet(id) {
  return projets.find(projet => projet.id === id);
}

export function getNextProjet(currentId) {
  const currentIndex = projets.findIndex(projet => projet.id === currentId);
  const nextIndex = (currentIndex + 1) % projets.length;
  return projets[nextIndex];
}

export function getPreviousProjet(currentId) {
  const currentIndex = projets.findIndex(projet => projet.id === currentId);
  const previousIndex = currentIndex === 0 ? projets.length - 1 : currentIndex - 1;
  return projets[previousIndex];
}