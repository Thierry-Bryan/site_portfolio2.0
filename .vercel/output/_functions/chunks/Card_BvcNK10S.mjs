import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, p as renderSlot, a as renderTemplate } from './astro/server_yuAGbZrg.mjs';
import 'clsx';

const $$Astro = createAstro("https://portfolio.bryan-thierry.fr");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { imgSrc, imgAlt = "Image", children, theme } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(theme, "data-theme")} class="grid grid-rows-[auto_1fr] w-full max-w-[250px] h-[350px] border-4 bg-(--b1) overflow-hidden"> <div class="flex items-center justify-center h-48"> <img${addAttribute(imgSrc, "src")}${addAttribute(imgAlt, "alt")} class="object-contain h-32 w-32 mix-blend-darken"> </div> <div class="p-4 flex flex-col justify-center text-(--bc)"> ${renderSlot($$result, $$slots["default"], renderTemplate`${children}`)} </div> </div>`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/Card.astro", void 0);

export { $$Card as $ };
