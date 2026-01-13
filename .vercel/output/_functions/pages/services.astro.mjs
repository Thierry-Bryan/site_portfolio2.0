import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_yuAGbZrg.mjs';
import { $ as $$Layout } from '../chunks/Layout_-GPg4m4z.mjs';
import { $ as $$Card } from '../chunks/Card_BvcNK10S.mjs';
import { $ as $$Button } from '../chunks/Button_Bo0Bj-8a.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const theme = "basique";
  const services = [
    {
      imgSrc: "/card/icon_sur-mesure.webp",
      imgAlt: "Site web sur-mesure",
      title: "Sites web sur mesure",
      description: "Je con\xE7ois des sites web uniques, pens\xE9s pour vous et votre activit\xE9."
    },
    {
      imgSrc: "/card/icon_refonte.webp",
      imgAlt: "Refontes de sites",
      title: "Refontes de sites",
      description: "Je redonne vie \xE0 votre site pour qu'il soit moderne, rapide et agr\xE9able \xE0 utiliser."
    },
    {
      imgSrc: "/card/icon_wordpress.webp",
      imgAlt: "WordPress",
      title: "WordPress",
      description: "Je cr\xE9e et personnalise votre site WordPress pour qu'il soit performant et facile \xE0 g\xE9rer."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "theme": theme, "title": "Mes Services - Portfolio Bryan Thierry", "data-astro-cid-52q5xhqt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-(--b1) pt-32 pb-20" data-theme="basique" data-astro-cid-52q5xhqt> <div class="flex items-center justify-center mb-12" data-astro-cid-52q5xhqt> <h1 class="text-5xl md:text-6xl font-primary text-(--bc) uppercase tracking-tight" data-astro-cid-52q5xhqt>
MES SERVICES
</h1> </div> <div class="mx-4 md:mx-25 mb-16" data-astro-cid-52q5xhqt> <div class="max-w-3xl mx-auto text-center mb-12" data-astro-cid-52q5xhqt> <p class="text-lg md:text-xl font-secondary text-(--bc) opacity-80 leading-relaxed" data-astro-cid-52q5xhqt>
Je vous accompagne dans la création et l'amélioration de votre
          présence en ligne avec des solutions adaptées à vos besoins.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 place-items-center mx-auto" data-astro-cid-52q5xhqt> ${services.map((service) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "imgSrc": service.imgSrc, "imgAlt": service.imgAlt, "theme": theme, "data-astro-cid-52q5xhqt": true }, { "default": ($$result3) => renderTemplate` <h3 class="mb-2 text-center flex justify-center" data-astro-cid-52q5xhqt> ${service.title} </h3> <p class="" data-astro-cid-52q5xhqt>${service.description}</p> ` })}`)} </div> </div> <div class="flex justify-center mt-12" data-astro-cid-52q5xhqt> ${renderComponent($$result2, "Button", $$Button, { "label": "Me Contacter", "onClick": "window.openContactModal()", "className": "text-(--bc)", "theme": theme, "data-astro-cid-52q5xhqt": true })} </div> </section>  <section class="bg-(--b1) pb-20" data-theme="basique" data-astro-cid-52q5xhqt> <div class="mx-4 md:mx-25" data-astro-cid-52q5xhqt> <div class="max-w-4xl mx-auto" data-astro-cid-52q5xhqt> <h2 class="text-4xl font-primary text-(--bc) mb-12 text-center uppercase" data-astro-cid-52q5xhqt>
Ce que je peux faire pour vous
</h2> <!-- Cartes en grille responsive (1/2/3 colonnes) --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto" data-astro-cid-52q5xhqt> <!-- Card 1: Sur mesure --> <div class="comics-card p-8 card-border-bc" data-astro-cid-52q5xhqt> <h3 class="text-2xl font-primary mb-4 uppercase text-color-bc" data-astro-cid-52q5xhqt>
Sites web sur mesure
</h3> <ul class="list-disc pl-6 space-y-3 font-secondary text-(--bc) opacity-90" data-astro-cid-52q5xhqt> <li data-astro-cid-52q5xhqt>Création de sites vitrines, portfolios, landing pages</li> <li data-astro-cid-52q5xhqt>Design moderne et responsive (adapté à tous les écrans)</li> <li data-astro-cid-52q5xhqt>Optimisation SEO technique et sémantique</li> <li data-astro-cid-52q5xhqt>Performance et rapidité optimales</li> </ul> </div> <!-- Card 2: Refonte --> <div class="comics-card p-8 card-border-bc" data-astro-cid-52q5xhqt> <h3 class="text-2xl font-primary mb-4 uppercase text-color-bc" data-astro-cid-52q5xhqt>
Refontes de sites
</h3> <ul class="list-disc pl-6 space-y-3 font-secondary text-(--bc) opacity-90" data-astro-cid-52q5xhqt> <li data-astro-cid-52q5xhqt>Modernisation du design et de l'interface</li> <li data-astro-cid-52q5xhqt>Amélioration de l'expérience utilisateur (UX)</li> <li data-astro-cid-52q5xhqt>Migration vers des technologies modernes</li> <li data-astro-cid-52q5xhqt>Correction des problèmes de performance</li> </ul> </div> <!-- Card 3: WordPress --> <div class="comics-card p-8 card-border-bc" data-astro-cid-52q5xhqt> <h3 class="text-2xl font-primary mb-4 uppercase text-color-bc" data-astro-cid-52q5xhqt>
WordPress
</h3> <ul class="list-disc pl-6 space-y-3 font-secondary text-(--bc) opacity-90" data-astro-cid-52q5xhqt> <li data-astro-cid-52q5xhqt>Installation et configuration personnalisée</li> <li data-astro-cid-52q5xhqt>Création de thèmes sur mesure</li> <li data-astro-cid-52q5xhqt>Formation pour gérer votre site en autonomie</li> <li data-astro-cid-52q5xhqt>Maintenance et mises à jour</li> </ul> </div> </div> </div> </div> </section>  <section class="bg-(--b1) pb-20" data-theme="basique" data-astro-cid-52q5xhqt> <div class="max-w-3xl mx-auto text-center px-4" data-astro-cid-52q5xhqt> <h2 class="text-4xl md:text-5xl font-primary text-(--bc) mb-6 uppercase" data-astro-cid-52q5xhqt>
Prêt à démarrer ?
</h2> <p class="text-lg md:text-xl font-secondary text-(--bc) opacity-80 mb-8 leading-relaxed" data-astro-cid-52q5xhqt>
Que vous ayez un projet complet ou juste besoin d'un coup de main,
        contactez-moi et discutons de vos besoins.
</p> ${renderComponent($$result2, "Button", $$Button, { "label": "Parlons de votre projet", "onClick": "window.openContactModal()", "className": "text-(--bc)", "theme": theme, "data-astro-cid-52q5xhqt": true })} </div> </section> ` })}  ${renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/services/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/services/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
