import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_yuAGbZrg.mjs';
import { $ as $$Layout, a as $$BackgroundComics } from '../chunks/Layout_-GPg4m4z.mjs';
import { $ as $$Card } from '../chunks/Card_BvcNK10S.mjs';
import { $ as $$Button } from '../chunks/Button_Bo0Bj-8a.mjs';
import '../chunks/index_CYyG6us9.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BYciPLnh.mjs';
import { e as getProjets, c as getFileUrl } from '../chunks/pb_Dkg0ci9l.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const theme = "ca-va-trailer";
  return renderTemplate`${maybeRenderHead()}<div class="hero min-h-screen w-screen relative overflow-hidden bg-black"${addAttribute(theme, "data-theme")}> <!-- Image héro optimisée --> ${renderComponent($$result, "Image", $$Image, { "src": "/hero/hero.webp", "alt": "Hero Image", "width": 1920, "height": 1080, "loading": "eager", "fetchpriority": "high", "class": "absolute left-0 bottom-0 w-full h-170 sm:h-170 md:h-full object-cover object-[22%_center] md:object-center brightness-90 contrast-110 z-10 transition-all duration-500" })} <!-- Grille pour centrer le contenu dans la colonne de droite --> <div class="relative z-30 grid grid-cols-1 md:grid-cols-2 min-h-screen w-full"> <!-- Colonne gauche vide (ou pour un futur usage) --> <div class="hidden md:block"></div> <!-- Colonne droite : contenu centré --> <div class="flex flex-col items-center justify-start md:justify-center md:items-center h-full w-full px-6 pt-30 md:pt-0 pb-4 md:py-16"> <h1 class="font-primary text-8xl sm:text-7xl md:text-8xl lg:text-[8rem] text-[var(--color-white)] text-center -rotate-2 mb-8 drop-shadow-lg" style="word-break:break-word;">
BRYAN THIERRY
</h1> <div class="w-full flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "label": "Voir mes projets", "href": "/projets", "className": "hero-button", "theme": theme })} </div> </div> </div> </div>`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const theme = "basique";
  let projets = [];
  let isPocketBaseDown = false;
  try {
    projets = await getProjets();
  } catch (error) {
    console.error(
      "Erreur de connexion \xE0 PocketBase sur la page d'accueil:",
      error
    );
    isPocketBaseDown = true;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "theme": theme, "title": "Accueil - Portfolio Bryan Thierry" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="pt-15 pb-20"> <div class="flex items-center justify-center mb-5"> <h2 class="text-black">MES SERVICES</h2> </div> <div class="mx-4 md:mx-25"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 place-items-center mx-auto"> ${renderComponent($$result2, "Card", $$Card, { "imgSrc": "/card/icon_sur-mesure.webp", "imgAlt": "Site web sur-mesure", "theme": theme }, { "default": async ($$result3) => renderTemplate` <h3 class="mb-2 text-center flex justify-center">
Sites web sur mesure
</h3> <p class="">
Je conçois des sites web uniques, pensés pour vous et votre
            activité.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "imgSrc": "/card/icon_refonte.webp", "imgAlt": "Refontes de sites", "theme": theme }, { "default": async ($$result3) => renderTemplate` <h3 class="mb-2 text-center flex justify-center">
Refontes de sites
</h3> <p class="">
Je redonne vie à votre site pour qu'il soit moderne, rapide et
            agréable à utiliser.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "imgSrc": "/card/icon_wordpress.webp", "imgAlt": "Site web sur-mesure", "theme": theme }, { "default": async ($$result3) => renderTemplate` <h3 class="mb-2 text-center flex justify-center">Wordpress</h3> <p class="">
Je redonne vie à votre site pour qu'il soit moderne, rapide et
            agréable à utiliser.
</p> ` })} </div> </div> </section> <section class="bg-black pt-15 pb-20"> <div class="flex items-center justify-center mb-5"> <h2 class="text-4xl text-white font-primary">MES PROJETS</h2> </div> <div class="mx-4 md:mx-16"> ${isPocketBaseDown ? renderTemplate`<div class="text-center py-10 border-2 border-dashed border-white/50 rounded-lg max-w-3xl mx-auto"> <h3 class="text-2xl font-primary text-white mb-2">Oups !</h3> <p class="text-lg text-white/80">
La galerie de projets est actuellement indisponible.
</p> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center"> ${projets.map((projet) => {
    const imageUrl = getFileUrl(projet, projet.hero_image);
    return renderTemplate`<a${addAttribute(`/projets/${projet.slug}`, "href")} class="block w-full max-w-[350px]"> <div class="w-full max-w-[350px] h-[220px] flex items-center justify-center overflow-visible relative group cursor-pointer"${addAttribute(projet.theme, "data-theme")}> ${renderComponent($$result2, "BackgroundComics", $$BackgroundComics, { "theme": projet.theme })} <img${addAttribute(imageUrl, "src")}${addAttribute(projet.title, "alt")} class="absolute z-10 h-[220px] object-cover drop-shadow-2xl transform transition-all duration-300 group-hover:h-[250px]"> <div class="absolute z-30 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 w-[340px] h-[210px] group-hover:w-[380px] group-hover:h-[250px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> <div class="absolute inset-0 z-40 flex items-center justify-center comics-glow-hover-link"> <h3 class="text-white text-2xl font-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-1 comics-glow-hover-link"> ${projet.title.toUpperCase()} </h3> </div> </div> </a>`;
  })}  <div class="w-full max-w-[350px] h-[220px] bg-black border-2 border-white flex items-center justify-center overflow-hidden"> <span class="text-white text-2xl font-primary">À VENIR</span> </div> </div>`} </div> </section> <section class="pt-10 pb-25"> <div class="flex items-center justify-center mb-5"> <h2 class="text-black">À PROPOS</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"> <div class="order-1 md:order-2 flex justify-center items-center mb-6 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": "/avatar/a-propos.webp", "alt": "Photo de Bryan Thierry", "width": 400, "height": 450, "loading": "lazy", "class": "object-contain h-full w-full max-h-[450px] max-w-[400px] brightness-90 contrast-110 mx-auto" })} </div> <div class="order-2 md:order-1 px-4 md:pl-10 flex flex-col gap-4 mb-6 md:mb-0"> <h3 class="">Salut, moi c’est Bryan !</h3> <p>
Webdesigner & Développeur Front-End, j’aime créer des contenus
          numériques qui ont du sens.
</p> <p>
Je m'investis dans chaque projet pour vous aider à vous démarquer en
          ligne. J'accorde une grande importance à l'expérience utilisateur, au
          design écoresponsable et à l'optimisation SEO.
</p> <p>
Que vous ayez un projet complet ou juste besoin d’un coup de main, je
          m’adapte à vous, j’écoute vos envies et je trouve la solution qui vous
          ressemble.
</p> <div class="w-full flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "label": "\xC0 propos de moi", "href": "/a-propos", "className": "text-black", "theme": theme })} </div> </div> <div class="order-3 md:order-3 grid grid-rows-3 justify-center gap-8 md:gap-0"> <div class="flex flex-col items-center text-center"> <h3>Ma promesse</h3> <div>Expérience Utilisateur (UX)</div> <div>Site Ultra-Rapide</div> <div>Identité Visuelle</div> </div> <div class="flex flex-col items-center text-center"> <h3>Ma promesse</h3> <div>Expérience Utilisateur (UX)</div> <div>Site Ultra-Rapide</div> <div>Identité Visuelle</div> </div> <div class="flex flex-col items-center text-center"> <h3>Ma promesse</h3> <div>Expérience Utilisateur (UX)</div> <div>Site Ultra-Rapide</div> <div>Identité Visuelle</div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
