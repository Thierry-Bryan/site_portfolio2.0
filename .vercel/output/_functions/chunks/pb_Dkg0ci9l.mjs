import PocketBase from 'pocketbase';

const POCKETBASE_URL = process.env.POCKETBASE_URL || "https://pocketbase-portfolio-production.up.railway.app";
console.log("PocketBase URL:", POCKETBASE_URL);
const pb = new PocketBase(POCKETBASE_URL);
pb.autoCancellation(false);
async function getProjets() {
  try {
    console.log("Tentative de récupération des projets...");
    const records = await pb.collection("projets").getFullList({
      filter: "published = true",
      sort: "order",
      expand: "tags,technologies"
    });
    console.log("Projets récupérés:", records.length);
    return records;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    return [];
  }
}
async function getProjetBySlug(slug) {
  try {
    const record = await pb.collection("projets").getFirstListItem(`slug="${slug}"`, {
      expand: "tags,technologies"
    });
    return record;
  } catch (error) {
    return null;
  }
}
function getFileUrl(record, filename, thumb = "") {
  return pb.files.getURL(record, filename, { thumb });
}
function getMultipleFileUrls(record, fieldName) {
  if (!record[fieldName] || !Array.isArray(record[fieldName])) {
    return [];
  }
  return record[fieldName].map((filename) => getFileUrl(record, filename));
}
async function getNextProjet(currentSlug) {
  try {
    const projets = await getProjets();
    const currentIndex = projets.findIndex((p) => p.slug === currentSlug);
    if (currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % projets.length;
    return projets[nextIndex];
  } catch (error) {
    return null;
  }
}
async function getPreviousProjet(currentSlug) {
  try {
    const projets = await getProjets();
    const currentIndex = projets.findIndex((p) => p.slug === currentSlug);
    if (currentIndex === -1) return null;
    const previousIndex = currentIndex === 0 ? projets.length - 1 : currentIndex - 1;
    return projets[previousIndex];
  } catch (error) {
    console.error("Erreur lors de la récupération du projet précédent:", error);
    return null;
  }
}

export { getNextProjet as a, getPreviousProjet as b, getFileUrl as c, getMultipleFileUrls as d, getProjets as e, getProjetBySlug as g, pb as p };
