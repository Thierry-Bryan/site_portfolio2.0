import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_yuAGbZrg.mjs';
import { $ as $$Layout, a as $$BackgroundComics } from '../chunks/Layout_-GPg4m4z.mjs';
import { p as pb, c as getFileUrl } from '../chunks/pb_CZZwb-7T.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let tags = [];
  try {
    tags = await pb.collection("tags").getFullList({
      sort: "name"
    });
  } catch (error) {
    console.log("Erreur lors de la r\xE9cup\xE9ration des tags:", error);
    tags = [];
  }
  let projets = [];
  try {
    projets = await pb.collection("projets").getFullList({
      sort: "order",
      expand: "tags,technologies"
    });
  } catch (error) {
    console.log("Erreur lors de la r\xE9cup\xE9ration des projets:", error);
    projets = [];
  }
  const filterOptions = ["Tous", ...tags.map((tag) => tag.name)];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mes Projets", "theme": "ca-va-trailer", "data-astro-cid-5etv5t6g": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-(--b1) min-h-screen py-30 px-4 md:px-6" data-astro-cid-5etv5t6g> <div class="max-w-7xl mx-auto" data-astro-cid-5etv5t6g> <!-- Header --> <div class="flex items-center justify-center mb-12" data-astro-cid-5etv5t6g> <h2 class="text-4xl md:text-6xl text-(--bc) font-primary" data-astro-cid-5etv5t6g>
MES PROJETS
</h2> </div> <!-- Filtres et Vue --> <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12" data-astro-cid-5etv5t6g> <!-- Filtres de type --> <div class="flex flex-wrap gap-3 justify-center md:justify-start" id="type-filters" data-astro-cid-5etv5t6g> ${filterOptions.map((filterName) => renderTemplate`<button class="filter-btn px-6 py-2 border-2 border-(--bc) bg-(--b1) text-(--bc) font-primary cursor-pointer transition-all duration-300 hover:bg-(--p) hover:text-(--b1) hover:border-(--p)"${addAttribute(filterName, "data-type")} data-astro-cid-5etv5t6g> ${filterName} </button>`)} </div> <!-- Toggle vue grille/ligne --> <div class="flex gap-2 p-1 bg-(--b1) border-2 border-(--bc)" data-astro-cid-5etv5t6g> <button id="grid-view-btn" class="view-btn active px-4 py-2 transition-all duration-300" aria-label="Vue grille" data-astro-cid-5etv5t6g> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5etv5t6g> <rect x="3" y="3" width="7" height="7" rx="1" data-astro-cid-5etv5t6g></rect> <rect x="14" y="3" width="7" height="7" rx="1" data-astro-cid-5etv5t6g></rect> <rect x="14" y="14" width="7" height="7" rx="1" data-astro-cid-5etv5t6g></rect> <rect x="3" y="14" width="7" height="7" rx="1" data-astro-cid-5etv5t6g></rect> </svg> </button> <button id="list-view-btn" class="view-btn px-4 py-2 transition-all duration-300" aria-label="Vue liste" data-astro-cid-5etv5t6g> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5etv5t6g> <line x1="8" y1="6" x2="21" y2="6" stroke-width="2" data-astro-cid-5etv5t6g></line> <line x1="8" y1="12" x2="21" y2="12" stroke-width="2" data-astro-cid-5etv5t6g></line> <line x1="8" y1="18" x2="21" y2="18" stroke-width="2" data-astro-cid-5etv5t6g></line> <rect x="3" y="4" width="2" height="4" rx="1" data-astro-cid-5etv5t6g></rect> <rect x="3" y="10" width="2" height="4" rx="1" data-astro-cid-5etv5t6g></rect> <rect x="3" y="16" width="2" height="4" rx="1" data-astro-cid-5etv5t6g></rect> </svg> </button> </div> </div> <!-- Grille de projets --> <div id="projets-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center transition-all duration-300" data-astro-cid-5etv5t6g> ${projets.map((projet) => {
    const projetTags = projet.expand?.tags || [];
    const tagTokens = projetTags.map((tag) => (tag?.name || "").trim()).filter(Boolean);
    const tagNames = tagTokens.join(" ");
    const tagNamesLower = tagTokens.map((t) => t.toLowerCase()).join(" ");
    const projetTechnologies = projet.expand?.technologies || [];
    return renderTemplate`<a${addAttribute(`/projets/${projet.slug}`, "href")} class="projet-card block w-full max-w-[350px]"${addAttribute(tagNames, "data-tags")}${addAttribute(tagNamesLower, "data-tags-lower")} data-astro-cid-5etv5t6g>  <div class="grid-view-content border-2 border-(--bc) bg-(--b1) h-full flex flex-col group" data-astro-cid-5etv5t6g> <div class="w-full h-[220px] flex items-center justify-center overflow-visible relative cursor-pointer"${addAttribute(projet.theme, "data-theme")} data-astro-cid-5etv5t6g> ${renderComponent($$result2, "BackgroundComics", $$BackgroundComics, { "theme": projet.theme, "data-astro-cid-5etv5t6g": true })} <img${addAttribute(
      projet.hero_image ? getFileUrl(projet, projet.hero_image) : "/images/placeholder.webp",
      "src"
    )}${addAttribute(projet.title, "alt")} class="absolute z-10 h-[220px] object-cover drop-shadow-2xl transform transition-all duration-300 group-hover:h-[250px]" data-astro-cid-5etv5t6g> </div>  <div class="p-4 flex-1 flex flex-col" data-astro-cid-5etv5t6g> <h3 class="text-xl font-primary text-(--bc) mb-2" data-astro-cid-5etv5t6g> ${projet.title} </h3> <p class="text-sm font-secondary text-(--bc) mb-3 flex-1" data-astro-cid-5etv5t6g> ${projet.subtitle || ""} </p> <div class="flex flex-wrap gap-2" data-astro-cid-5etv5t6g> ${projetTechnologies.map((tech) => renderTemplate`<span class="px-2 py-1 text-xs font-secondary border border-(--bc) text-(--bc)" data-astro-cid-5etv5t6g> ${tech.name} </span>`)} </div> </div> </div>  <div class="list-view-content hidden" data-astro-cid-5etv5t6g> <div class="list-row flex items-center bg-(--b1) border-2 border-(--bc) overflow-hidden group h-20 md:h-20 px-4 w-full" data-astro-cid-5etv5t6g> <div class="flex flex-col w-full md:flex-row md:items-center md:justify-between" data-astro-cid-5etv5t6g> <h3 class="text-2xl font-primary text-(--bc) text-left leading-tight mb-1 md:mb-0" data-astro-cid-5etv5t6g> ${projet.title} </h3> <div class="flex flex-wrap gap-2 items-center justify-start md:justify-end" data-astro-cid-5etv5t6g> ${projetTechnologies.map((tech) => renderTemplate`<span class="px-2 py-1 text-xs font-secondary border border-(--bc) text-(--bc)" data-astro-cid-5etv5t6g> ${tech.name} </span>`)} </div> </div> </div> </div> </a>`;
  })} <!-- Projet À venir --> <div class="projet-card projet-a-venir block w-full max-w-[350px]" data-tags="" data-astro-cid-5etv5t6g> <div class="grid-view-content border-2 border-(--bc) bg-(--b1) h-full flex items-center justify-center min-h-[220px]" data-astro-cid-5etv5t6g> <span class="text-(--bc) text-2xl font-primary" data-astro-cid-5etv5t6g>À VENIR</span> </div> <div class="list-view-content hidden" data-astro-cid-5etv5t6g> <div class="coming-soon-list flex items-center justify-center bg-(--b1) border-2 border-(--bc) h-[180px] w-full" data-astro-cid-5etv5t6g> <span class="text-(--bc) text-2xl font-primary" data-astro-cid-5etv5t6g>À VENIR</span> </div> </div> </div> </div> <!-- Message si aucun projet supprimé --> </div> </section> ` })}  ${renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/projets/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/projets/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/projets/index.astro";
const $$url = "/projets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
