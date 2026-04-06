import PocketBase from "pocketbase";

// ----------------------------------------------------
// CONFIGURATION POCKETBASE POUR VERCEL
// ----------------------------------------------------

// Utiliser la variable d'environnement ou fallback vers le chemin PocketBase
const POCKETBASE_URL =
  import.meta.env.POCKETBASE_URL ||
  process.env.POCKETBASE_URL ||
  'https://portfolio.bryan-thierry.fr/_/';
console.log('PocketBase URL:', POCKETBASE_URL);

// Créer l'instance PocketBase avec gestion d'erreur
export const pb = new PocketBase(POCKETBASE_URL);

// Configuration pour Vercel serverless
pb.autoCancellation(false);

// ----------------------------------------------------
// FONCTIONS DE RÉCUPÉRATION DE DONNÉES
// ----------------------------------------------------

/**
 * Récupérer tous les projets publiés avec leurs relations (incluant themes)
 * @returns {Promise<Array>}
 */
export async function getProjets() {
    try {
        console.log('Tentative de récupération des projets...');
        const records = await pb.collection("projets").getFullList({
            filter: "published = true",
            sort: "order",
            expand: "tags,technologies,theme",
        });
        console.log('Projets récupérés:', records.length);
        return records;
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
        return [];
    }
}

/**
 * Récupérer toutes les technologies/compétences
 * @returns {Promise<Array>}
 */
export async function getTechnologies() {
    try {
        console.log('Tentative de récupération des technologies...');
        const records = await pb.collection("technologies").getFullList({
            sort: "name",
        });
        console.log('Technologies récupérées:', records.length);
        return records;
    } catch (error) {
        console.error('Erreur lors de la récupération des technologies:', error);
        return [];
    }
}/**
 * Récupérer un projet par son slug avec ses relations (incluant theme)
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function getProjetBySlug(slug: string) {
    try {
        const record = await pb
            .collection("projets")
            .getFirstListItem(`slug="${slug}"`, {
                expand: "tags,technologies,theme",
            });
    return record;
  } catch (error) {
    return null;
  }
}/**
 * Obtenir l'URL complète d'un fichier uploadé
 * @param {Object} record - L'enregistrement PocketBase
 * @param {string} filename - Le nom du fichier
 * @param {string} thumb - Taille du thumbnail (optional)
 * @returns {string}
 */
export function getFileUrl(record: any, filename: string, thumb: string = "") {
    return pb.files.getURL(record, filename, { thumb });
}

/**
 * Obtenir toutes les URLs des images d'un champ multiple
 * @param {Object} record - L'enregistrement PocketBase
 * @param {string} fieldName - Nom du champ (ex: 'images')
 * @returns {Array<string>}
 */
export function getMultipleFileUrls(record: any, fieldName: string) {
    if (!record[fieldName] || !Array.isArray(record[fieldName])) {
        return [];
    }
    return record[fieldName].map((filename: string) => getFileUrl(record, filename));
}

/**
 * Récupérer tous les thèmes disponibles
 * @returns {Promise<Array>}
 */
export async function getThemes() {
    try {
        console.log('Tentative de récupération des thèmes...');
        const records = await pb.collection("themes").getFullList({
            sort: "name",
        });
        console.log('Thèmes récupérés:', records.length);
        return records;
    } catch (error) {
        console.error('Erreur lors de la récupération des thèmes:', error);
        return [];
    }
}

/**
 * Générer le CSS dynamique pour un thème
 * @param {Object} themeRecord - L'enregistrement du thème
 * @returns {string} CSS généré
 */
export function generateThemeCSS(themeRecord: any): string {
    if (!themeRecord?.css_variables) {
        console.log('Pas de css_variables trouvées pour le thème:', themeRecord?.name);
        return '';
    }
    
    // Helper pour convertir HEX en RGB
    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    };

    const cssVars = { ...themeRecord.css_variables };
    
    // Valeurs par défaut vitales si manquantes
    if (!cssVars.b1) cssVars.b1 = "#faf9f7";
    if (!cssVars.bc) cssVars.bc = "#000000";
    if (cssVars.b1 && !cssVars["b1-rgb"]) {
        const rgb = hexToRgb(cssVars.b1);
        if (rgb) cssVars["b1-rgb"] = rgb;
    }
    
    // CSS pour le thème principal
    let css = `[data-theme="${themeRecord.name}"] {\n`;
    Object.entries(cssVars).forEach(([key, value]) => {
        css += `  --${key}: ${value};\n`;
    });
    css += `}\n`;
    
    console.log('CSS généré pour', themeRecord.name, ':', css.length, 'caractères');
    return css;
}

/**
 * Récupérer le projet suivant
 * @param {string} currentSlug
 * @returns {Promise<Object|null>}
 */
export async function getNextProjet(currentSlug: string) {
    try {
        const projets = await getProjets();
        const currentIndex = projets.findIndex((p) => p.slug === currentSlug);

        if (currentIndex === -1) return null;

        const nextIndex = (currentIndex + 1) % projets.length;
    return projets[nextIndex];
  } catch (error) {
    return null;
  }
}/**
 * Récupérer le projet précédent
 * @param {string} currentSlug
 * @returns {Promise<Object|null>}
 */
export async function getPreviousProjet(currentSlug: string) {
    try {
        const projets = await getProjets();
        const currentIndex = projets.findIndex((p) => p.slug === currentSlug);

        if (currentIndex === -1) return null;

        const previousIndex =
            currentIndex === 0 ? projets.length - 1 : currentIndex - 1;
        return projets[previousIndex];
    } catch (error) {
        console.error("Erreur lors de la récupération du projet précédent:", error);
        return null;
    }
}
