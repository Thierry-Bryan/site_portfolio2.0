import PocketBase from "pocketbase";

// ----------------------------------------------------
// CONFIGURATION POCKETBASE POUR VERCEL
// ----------------------------------------------------

// Utiliser la variable d'environnement ou fallback
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
 * Récupérer tous les projets publiés avec leurs relations
 * @returns {Promise<Array>}
 */
export async function getProjets() {
    try {
        console.log('Tentative de récupération des projets...');
        const records = await pb.collection("projets").getFullList({
            filter: "published = true",
            sort: "order",
            expand: "tags,technologies",
        });
        console.log('Projets récupérés:', records.length);
        return records;
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
        return [];
    }
}/**
 * Récupérer un projet par son slug avec ses relations
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function getProjetBySlug(slug: string) {
    try {
        const record = await pb
            .collection("projets")
            .getFirstListItem(`slug="${slug}"`, {
                expand: "tags,technologies",
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
