/**
 * Gestionnaire de navigation entre projets
 * Gère la navigation circulaire entre projets avec animation fluide
 * et mise à jour du contenu sans rechargement de page
 */

import { getThemeConfig } from "../config";

export interface ProjetData {
  slug: string;
  theme: string;
  backgroundImage: string;
  title: string;
  description: string;
  contentDescription: string;
  images: string[];
  siteUrl?: string;
  prevId: string;
  nextId: string;
  technologies: any[];
}

export type ProjetsDataMap = Record<string, ProjetData>;

/**
 * Génère la map de projets avec navigation circulaire
 */
export function generateProjetsData(allProjets: any[]): ProjetsDataMap {
  const projetsData: ProjetsDataMap = {};
  
  allProjets.forEach((p, index) => {
    const prevIndex = index === 0 ? allProjets.length - 1 : index - 1;
    const nextIndex = index === allProjets.length - 1 ? 0 : index + 1;
    projetsData[p.slug] = {
      slug: p.slug,
      theme: p.theme,
      backgroundImage: p.backgroundImage,
      title: p.title,
      description: p.description,
      contentDescription: p.contentDescription,
      images: p.images,
      siteUrl: p.siteUrl,
      prevId: allProjets[prevIndex].slug,
      nextId: allProjets[nextIndex].slug,
      technologies: p.technologies || [],
    };
  });
  
  return projetsData;
}

/**
 * Récupère l'ID du projet actuel depuis l'URL
 */
export function getCurrentProjetId(): string | null {
  const path = window.location.pathname;
  const match = path.match(/\/projets\/([^\/]+)/);
  return match ? match[1] : null;
}

/**
 * Initialise le thème de la page projet
 */
export function initializeProjetTheme(currentTheme: string): void {
  const htmlElement = document.documentElement;
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  const themeToApply = isDarkMode ? currentTheme + "-dark" : currentTheme;
  htmlElement.setAttribute("data-theme", themeToApply);

  // Mettre à jour le data-theme du header et footer avec le thème du projet
  const header = document.getElementById("header");
  const footer = document.querySelector("footer");
  
  if (header) {
    header.setAttribute("data-theme", themeToApply);
    // Forcer la mise à jour immédiate du background du header
    setTimeout(() => {
      const headerComputedStyle = getComputedStyle(header);
      const bgColor = headerComputedStyle.getPropertyValue("--b1").trim();
      header.style.backgroundColor = `${bgColor}f5`;
    }, 10);
  }
  
  // Le footer doit toujours prendre le thème du projet actuel
  if (footer) footer.setAttribute("data-theme", themeToApply);

  // Mettre à jour la section contenu
  const contenuSection = document.getElementById("contenu");
  if (contenuSection) contenuSection.setAttribute("data-theme", themeToApply);

  // Mettre à jour le bandeau défilant
  const projetBanner = document.getElementById("projet-banner");
  if (projetBanner) projetBanner.setAttribute("data-theme", themeToApply);

  // Mettre à jour les flèches (ArrowButton) avec le bon data-theme
  updateArrowsTheme(themeToApply);
}

/**
 * Met à jour le thème des flèches de navigation
 */
function updateArrowsTheme(themeToApply: string): void {
  const prevArrowWrapper = document.getElementById("prev-arrow-wrapper");
  const nextArrowWrapper = document.getElementById("next-arrow-wrapper");
  
  if (prevArrowWrapper) {
    const prevButton = prevArrowWrapper.querySelector("button");
    if (prevButton) prevButton.setAttribute("data-theme", themeToApply);
  }
  
  if (nextArrowWrapper) {
    const nextButton = nextArrowWrapper.querySelector("button");
    if (nextButton) nextButton.setAttribute("data-theme", themeToApply);
  }
}

/**
 * Gère la navigation vers le projet suivant/précédent
 */
export async function handleArrowClick(
  isPrev: boolean,
  projetsData: ProjetsDataMap,
  currentTheme: string
): Promise<void> {
  const currentId = getCurrentProjetId();
  if (!currentId || !projetsData[currentId]) return;

  const currentProjet = projetsData[currentId];
  const nextId = isPrev ? currentProjet.prevId : currentProjet.nextId;
  if (!nextId || !projetsData[nextId]) return;

  const newProjet = projetsData[nextId];
  const newColors = getThemeConfig(newProjet.theme);

  const heroDevice = document.getElementById("hero-device") as HTMLImageElement;
  if (!heroDevice) return;

  // Animation de sortie fluide de l'image uniquement
  heroDevice.style.opacity = "0";
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Gérer le mode sombre
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  const themeToApply = isDarkMode ? newProjet.theme + "-dark" : newProjet.theme;

  // Mise à jour du thème global
  const htmlElement = document.documentElement;
  htmlElement.setAttribute("data-theme", themeToApply);

  // Mettre à jour header et footer
  updateHeaderFooter(themeToApply);

  // Mise à jour du contenu
  updateHeroContent(newProjet, heroDevice);
  updateTriangleAndBackground(newColors);
  updateArrows(newProjet, newColors, themeToApply);
  updateContentSection(newProjet, themeToApply);
  updateBanner(newProjet, themeToApply);

  // Mise à jour de l'URL sans rechargement
  window.history.pushState({}, "", `/projets/${nextId}`);
  document.title = `${newProjet.title} - Portfolio Bryan Thierry`;

  // Animation d'entrée de l'image
  await new Promise((resolve) => setTimeout(resolve, 50));
  heroDevice.style.opacity = "1";
}

/**
 * Met à jour le header et footer avec le nouveau thème
 */
function updateHeaderFooter(themeToApply: string): void {
  const header = document.getElementById("header");
  const footer = document.querySelector("footer");
  
  if (header) header.setAttribute("data-theme", themeToApply);
  if (footer) footer.setAttribute("data-theme", themeToApply);
}

/**
 * Met à jour le contenu hero (titre, description, image)
 */
function updateHeroContent(newProjet: ProjetData, heroDevice: HTMLImageElement): void {
  heroDevice.src = newProjet.backgroundImage;
  
  const heroTitle = document.querySelector(".hero-title");
  const heroDescription = document.querySelector(".hero-description");
  
  if (heroTitle) heroTitle.textContent = newProjet.title;
  if (heroDescription) heroDescription.textContent = newProjet.description;
}

/**
 * Met à jour le triangle de droite et le background comics
 */
function updateTriangleAndBackground(newColors: { primary: string; secondary: string }): void {
  const triangleRight = document.querySelector(".triangle-right") as HTMLElement;
  if (triangleRight) {
    triangleRight.style.background = newColors.primary;
  }

  const backgroundComics = document.getElementById("background-comics");
  if (backgroundComics) {
    const gradientDiv = backgroundComics.querySelector(
      'div[style*="linear-gradient"]'
    ) as HTMLElement;
    if (gradientDiv) {
      gradientDiv.style.background = `linear-gradient(90deg, ${newColors.secondary} 0%, ${newColors.primary} 100%)`;
    }
  }
}

/**
 * Met à jour les flèches de navigation
 */
function updateArrows(
  newProjet: ProjetData,
  newColors: { primary: string; secondary: string },
  themeToApply: string
): void {
  const prevWrapper = document.getElementById("prev-arrow-wrapper");
  const nextWrapper = document.getElementById("next-arrow-wrapper");

  if (prevWrapper) {
    prevWrapper.setAttribute("data-prev-projet", newProjet.prevId);
    const prevButton = prevWrapper.querySelector("button") as HTMLElement;
    if (prevButton) {
      prevButton.setAttribute("data-theme", themeToApply);
      prevButton.style.background = newColors.primary;
      prevButton.style.boxShadow = `-5px 5px 0 0 rgba(255, 255, 255, 1)`;
    }
  }

  if (nextWrapper) {
    nextWrapper.setAttribute("data-next-projet", newProjet.nextId);
    const nextButton = nextWrapper.querySelector("button") as HTMLElement;
    if (nextButton) {
      nextButton.setAttribute("data-theme", themeToApply);
      nextButton.style.boxShadow = `-5px 5px 0 0 ${newColors.primary}`;
      const nextSvg = nextButton.querySelector("svg") as SVGElement;
      if (nextSvg) {
        nextSvg.style.color = newColors.primary;
      }
    }
  }
}

/**
 * Met à jour la section contenu (description, images, bouton, technologies)
 */
function updateContentSection(newProjet: ProjetData, themeToApply: string): void {
  const contenuSection = document.getElementById("contenu");
  if (!contenuSection) return;

  contenuSection.setAttribute("data-theme", themeToApply);

  // Mettre à jour la description
  const descriptionDiv = document.getElementById("projet-description");
  if (descriptionDiv) {
    descriptionDiv.innerHTML = newProjet.contentDescription || "";
  }

  // Mettre à jour les images
  const imagesContainer = document.getElementById("projet-images-container");
  if (imagesContainer && newProjet.images) {
    imagesContainer.innerHTML = newProjet.images
      .map(
        (image, index) => `
      <div>
        <img
          src="${image}"
          alt="${newProjet.title} - Mockup ${index + 1}"
          class="w-full h-auto object-cover"
        />
      </div>
    `
      )
      .join("");
  }

  // Mettre à jour le bouton site web
  const buttonContainer = document.getElementById("projet-button-container");
  if (buttonContainer) {
    if (newProjet.siteUrl) {
      buttonContainer.style.display = "block";
      const buttonLink = buttonContainer.querySelector("a") as HTMLAnchorElement;
      if (buttonLink) {
        buttonLink.href = newProjet.siteUrl;
        buttonLink.setAttribute("data-theme", themeToApply);
      }
    } else {
      buttonContainer.style.display = "none";
    }
  }

  // Mettre à jour dynamiquement les badges technologies
  const techContainer = document.querySelector("#projet-technologies") as HTMLElement | null;
  if (techContainer) {
    // Toujours garder le conteneur visible
    techContainer.style.display = "flex";
    if (Array.isArray(newProjet.technologies) && newProjet.technologies.length > 0) {
      techContainer.innerHTML = newProjet.technologies
        .map(
          (tech: any) =>
            `<span class=\"px-2 py-1 text-xs font-secondary border border-(--bc) text-(--bc)\">${tech.name}</span>`
        )
        .join("");
    } else {
      techContainer.innerHTML = "";
    }
  }
}

/**
 * Met à jour le bandeau défilant
 */
function updateBanner(newProjet: ProjetData, themeToApply: string): void {
  const bannerContent = document.getElementById("banner-content");
  const projetBanner = document.getElementById("projet-banner");
  const newColors = getThemeConfig(newProjet.theme);

  if (bannerContent) {
    const newBannerHTML = Array.from({ length: 20 })
      .map(
        () => `
        <span class="font-primary text-2xl md:text-3xl italic transform -rotate-2 banner-title" style="color: var(--bc);">
          ${newProjet.title}
        </span>
        <span class="text-4xl" style="color: var(--p);">★</span>
      `
      )
      .join("");
    bannerContent.innerHTML = newBannerHTML;
  }

  if (projetBanner) {
    (projetBanner as HTMLElement).style.borderColor = newColors.primary;
    projetBanner.setAttribute("data-theme", themeToApply);
  }
}

/**
 * Configure les event listeners pour les flèches
 */
export function setupArrowListeners(
  projetsData: ProjetsDataMap,
  currentTheme: string
): void {
  const prevArrowWrapper = document.getElementById("prev-arrow-wrapper");
  const nextArrowWrapper = document.getElementById("next-arrow-wrapper");

  if (prevArrowWrapper) {
    prevArrowWrapper.addEventListener("click", () =>
      handleArrowClick(true, projetsData, currentTheme)
    );
  }

  if (nextArrowWrapper) {
    nextArrowWrapper.addEventListener("click", () =>
      handleArrowClick(false, projetsData, currentTheme)
    );
  }
}

/**
 * Écoute les changements de thème pour mettre à jour les flèches
 */
export function listenThemeChanges(projetsData: ProjetsDataMap): void {
  window.addEventListener("themeChanged", () => {
    // Récupérer le thème du projet actuel
    const currentId = getCurrentProjetId();
    if (!currentId || !projetsData[currentId]) return;
    
    const currentProjet = projetsData[currentId];
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    const themeToApply = isDarkMode ? currentProjet.theme + "-dark" : currentProjet.theme;
    
    // Mettre à jour header, footer et flèches avec le thème du projet
    updateHeaderFooter(themeToApply);
    updateArrowsTheme(themeToApply);
    
    // Mettre à jour la section contenu
    const contenuSection = document.getElementById("contenu");
    if (contenuSection) contenuSection.setAttribute("data-theme", themeToApply);
    
    // Mettre à jour le bandeau
    const projetBanner = document.getElementById("projet-banner");
    if (projetBanner) projetBanner.setAttribute("data-theme", themeToApply);
  });
}
