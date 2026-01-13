import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML, e as defineScriptVars, f as renderScript } from '../../chunks/astro/server_yuAGbZrg.mjs';
import { $ as $$Layout, a as $$BackgroundComics } from '../../chunks/Layout_-GPg4m4z.mjs';
import { $ as $$Button } from '../../chunks/Button_Bo0Bj-8a.mjs';
import 'clsx';
/* empty css                                   */
import { g as getProjetBySlug, a as getNextProjet, b as getPreviousProjet, c as getFileUrl, d as getMultipleFileUrls, e as getProjets } from '../../chunks/pb_Dkg0ci9l.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://portfolio.bryan-thierry.fr");
const $$ArrowButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowButton;
  const {
    direction,
    dataAttribute,
    className = "",
    theme = "ca-va-trailer",
    style = {}
  } = Astro2.props;
  const isPrev = direction === "prev";
  const btnClass = `
  arrow-${direction}
  flex items-center justify-center
  relative
  transition-all duration-300
  cursor-pointer
  w-full h-full
  ${className}
`.trim();
  const wrapperClass = `arrow-wrapper arrow-wrapper-${direction} relative inline-block w-28 h-10 md:w-36 md:h-14`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(wrapperClass, "class")}> <button${addAttribute(isPrev ? dataAttribute : void 0, "data-prev-projet")}${addAttribute(!isPrev ? dataAttribute : void 0, "data-next-projet")}${addAttribute(btnClass, "class")}${addAttribute(theme, "data-theme")}${addAttribute(isPrev ? { ...style || {}, background: "var(--p) !important" } : style, "style")}> <svg${addAttribute(`w-10 h-6 md:w-12 md:h-7 relative z-10 ${isPrev ? "text-[var(--b1)]" : "text-[var(--p)]"}`, "class")} fill="none" stroke="currentColor" viewBox="0 0 28 24" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(isPrev ? "M23 12H5m0 0l7 7m-7-7l7-7" : "M5 12h18m0 0l-7-7m7 7l-7 7", "d")}></path> </svg> </button> </div>`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/ArrowButton.astro", void 0);

const $$Astro$1 = createAstro("https://portfolio.bryan-thierry.fr");
const $$ProjetBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjetBanner;
  const { title, theme = "ca-va-trailer" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-4 overflow-hidden border-t-4 border-b-4 transition-colors duration-300 banner-bg" id="projet-banner"${addAttribute(theme, "data-theme")} data-astro-cid-l7boyr7q> <div class="flex whitespace-nowrap animate-scroll" data-astro-cid-l7boyr7q> <div class="flex items-center gap-8 pr-8" id="banner-content" data-astro-cid-l7boyr7q> ${Array.from({ length: 20 }).map(() => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-l7boyr7q": true }, { "default": ($$result2) => renderTemplate` <span class="font-primary text-2xl md:text-3xl italic transform -rotate-2 banner-title transition-colors duration-300 text-color-bc" data-astro-cid-l7boyr7q> ${title.toUpperCase()} </span> <span class="text-4xl text-color-p" data-astro-cid-l7boyr7q>★</span> ` })}`)} </div> </div> </section> `;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/ProjetBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://portfolio.bryan-thierry.fr");
async function getStaticPaths() {
  const projets = await getProjets();
  return projets.map((projet) => ({
    params: { id: projet.slug }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const projet = await getProjetBySlug(id);
  const nextProjet = await getNextProjet(id);
  const previousProjet = await getPreviousProjet(id);
  if (!projet) {
    return Astro2.redirect("/");
  }
  const heroImageUrl = getFileUrl(projet, projet.hero_image);
  const imagesUrls = getMultipleFileUrls(projet, "images");
  projet.expand?.technologies || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "theme": projet.theme, "title": `${projet.title} - Portfolio Bryan Thierry` }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section class="relative h-[calc(120vh-7rem)] flex items-stretch overflow-hidden"> <div class="w-full h-full relative"> <!-- Zone gauche : Texte sur fond avec angle prononc\xE9 (desktop uniquement) --> <div class="hidden md:flex absolute left-0 top-0 h-full flex-col justify-center pl-12 md:pl-16 lg:pl-20 pr-8 py-12 w-[35%] min-w-[340px] z-30"> <div class="absolute inset-0 -z-10 shadow-left clip-hero-left"></div> <h1 class="hero-title text-4xl md:text-5xl lg:text-7xl mb-5 md:mb-6 leading-[0.95] transition-colors duration-700 text-color-p transform-rotate-title"> ', ' </h1> <p class="hero-description text-sm md:text-base lg:text-lg font-medium max-w-md leading-relaxed transition-colors duration-700 text-color-bc"> ', ' </p> </div> <!-- Zone centrale : comics + device (desktop uniquement) --> <div class="hidden md:flex absolute left-[38%] top-0 h-full items-center justify-center w-[60%] z-20 clip-hero-center" id="hero-center"> <!-- Background pattern comics --> <div class="absolute inset-0 w-full h-full overflow-visible transition-all duration-700" id="background-comics"> ', ' </div> </div> <!-- Background comics plein \xE9cran mobile uniquement --> <div class="md:hidden absolute inset-0 w-full h-full overflow-visible transition-all duration-700 z-10" id="background-comics-mobile"> ', ' </div> <!-- Titre mobile en blanc, positionn\xE9 en haut --> <h1 class="md:hidden absolute top-32 left-0 right-0 z-30 text-5xl leading-tight text-center px-6 text-white"> ', ' </h1> <!-- Device image : centr\xE9e mobile, d\xE9cal\xE9e desktop --> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-[70px] z-20 md:z-22"> <img', "", ' class="block mx-auto w-[100vw] max-w-[420px] max-h-[500px] md:max-h-[280px] lg:max-h-[360px] h-auto transition-opacity duration-500 drop-shadow-hero" id="hero-device"> </div> <!-- Zone droite : triangle avec angle prononc\xE9 (desktop uniquement) --> <div class="triangle-right hidden md:block absolute right-0 top-0 h-full w-[25%] min-w-[160px] z-25 pointer-events-none transition-all duration-700 card-bg-p clip-hero-right"> <div class="absolute inset-0 -z-10 shadow-right clip-triangle-right"></div> </div> <!-- Fl\xE8ches de navigation : centr\xE9es mobile, positionn\xE9es desktop --> <div class="absolute bottom-24 left-8 md:bottom-20 md:left-[35%] z-40 cursor-pointer" id="prev-arrow-wrapper"', "> ", ' </div> <div class="absolute bottom-24 right-8 md:bottom-20 md:right-[17%] z-40 cursor-pointer" id="next-arrow-wrapper"', "> ", " </div> </div> </section>  ", " ", " <script data-projet-init>(function(){", '\n    // Stocker les donn\xE9es pour le script\n    document.documentElement.dataset.currentTheme = currentTheme;\n    document.documentElement.dataset.allProjets = JSON.stringify(allProjets);\n  })();<\/script>  <section id="contenu" class="pt-8 pb-35 card-bg-b1 transition-bg-color"', '> <div class="mx-4 md:mx-8 lg:mx-16"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> <!-- Contenu texte sticky --> <div class="lg:sticky lg:top-8"> <div> <div class="flex flex-wrap items-center gap-4 mb-6"> <h2 class="font-primary text-4xl transform -rotate-1 m-0">\nDESCRIPTION\n</h2> <div id="projet-technologies" class="flex flex-wrap gap-2"> ', ' </div> </div> <div id="projet-description" class="text-lg leading-relaxed mb-8 text-color-bc transition-color">', "</div> </div> <!-- Bouton vers le site (si disponible) --> ", ' </div> <!-- Images du projet --> <div id="projet-images-container" class="space-y-8 pb-20"> ', " </div> </div> </div> </section> "])), maybeRenderHead(), projet.title, projet.hero_description, renderComponent($$result2, "BackgroundComics", $$BackgroundComics, { "theme": projet.theme }), renderComponent($$result2, "BackgroundComics", $$BackgroundComics, { "theme": projet.theme }), projet.title, addAttribute(heroImageUrl, "src"), addAttribute(projet.title, "alt"), addAttribute(previousProjet?.slug || "", "data-prev-projet"), renderComponent($$result2, "ArrowButton", $$ArrowButton, { "direction": "prev", "dataAttribute": previousProjet?.slug || "", "theme": projet.theme }), addAttribute(nextProjet?.slug || "", "data-next-projet"), renderComponent($$result2, "ArrowButton", $$ArrowButton, { "direction": "next", "dataAttribute": nextProjet?.slug || "", "theme": projet.theme }), renderComponent($$result2, "ProjetBanner", $$ProjetBanner, { "title": projet.title, "theme": projet.theme }), renderScript($$result2, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/projets/[id].astro?astro&type=script&index=0&lang.ts"), defineScriptVars({
    currentTheme: projet.theme,
    allProjets: (await getProjets()).map((p) => ({
      slug: p.slug,
      theme: p.theme,
      backgroundImage: getFileUrl(p, p.hero_image),
      title: p.title.toUpperCase(),
      description: p.hero_description,
      contentDescription: p.content_description,
      images: getMultipleFileUrls(p, "images"),
      siteUrl: p.site_url,
      technologies: p.expand?.technologies || []
    }))
  }), addAttribute(projet.theme, "data-theme"), projet.expand?.technologies && projet.expand.technologies.length > 0 ? projet.expand.technologies.map((tech) => renderTemplate`<span class="px-2 py-1 text-xs font-secondary border border-(--bc) text-(--bc)"> ${tech.name} </span>`) : null, unescapeHTML(projet.content_description), projet.site_url && renderTemplate`<div id="projet-button-container" class="text-center pt-8"> ${renderComponent($$result2, "Button", $$Button, { "href": projet.site_url, "className": "font-primary text-lg px-8 py-4", "theme": projet.theme, "target": "_blank" }, { "default": async ($$result3) => renderTemplate`
VOIR LE SITE FINAL
` })} </div>`, imagesUrls.map((image, index) => renderTemplate`<div> <img${addAttribute(image, "src")}${addAttribute(`${projet.title} - Mockup ${index + 1}`, "alt")} class="w-full h-auto object-cover"> </div>`)) })}`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/projets/[id].astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/projets/[id].astro";
const $$url = "/projets/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
