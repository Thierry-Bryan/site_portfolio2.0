import { b as createAstro, c as createComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, p as renderSlot } from './astro/server_yuAGbZrg.mjs';
/* empty css                         */
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://portfolio.bryan-thierry.fr");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    label = "Bouton",
    background = "var(--color-white)",
    shadowColor,
    href,
    onClick,
    type = "button",
    disabled = false,
    className = "",
    theme = "cyberpunk",
    target
  } = Astro2.props;
  const btnClass = `
  inline-flex
  h-[45px]
  px-8
  justify-center
  items-center
  text-white
  font-primary 
  relative 
  transition-all 
  duration-200
  cursor-pointer
  btn-hover
  theme-${theme}
  ${className}
`.trim();
  return renderTemplate(_a || (_a = __template(["<!-- Button -->", `<script>
  function initButtons() {
    const buttons = document.querySelectorAll(".btn-hover");
    
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        // V\xE9rifier en temps r\xE9el si c'est un hero button
        const isHeroButton = btn.classList.contains("hero-button");
        const textEl = btn.querySelector(".btn-text");
        
        if (textEl) {
          if (isHeroButton) {
            // Hero button: noir \u2192 blanc sans ombre
            textEl.style.color = "white";
            textEl.style.textShadow = "none";
          } else {
            // Bouton normal: couleurs du th\xE8me \u2192 noir sans ombre
            textEl.style.color = "#181818";
            textEl.style.textShadow = "none";
          }
        }
      });
      
      btn.addEventListener("mouseleave", () => {
        // V\xE9rifier en temps r\xE9el si c'est un hero button
        const isHeroButton = btn.classList.contains("hero-button");
        const textEl = btn.querySelector(".btn-text");
        
        if (textEl) {
          if (isHeroButton) {
            // Hero button: retour au noir sans ombre
            textEl.style.color = "#181818";
            textEl.style.textShadow = "none";
          } else {
            // Bouton normal: retour au blanc sans ombre
            textEl.style.color = "white";
            textEl.style.textShadow = "none";
          }
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButtons);
  } else {
    initButtons();
  }
  
  // R\xE9initialiser apr\xE8s navigation
  document.addEventListener("astro:page-load", initButtons);
<\/script>`])), href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(btnClass, "class")} role="button"${addAttribute(onClick, "onclick")}${spreadAttributes(target ? { target, rel: target === "_blank" ? "noopener noreferrer" : void 0 } : {})} data-astro-cid-vnzlvqnm><span class="btn-text" data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"], renderTemplate`${label}`)}</span></a>` : renderTemplate`<button${addAttribute(btnClass, "class")}${addAttribute(type, "type")}${addAttribute(disabled, "disabled")}${addAttribute(onClick, "onclick")} data-astro-cid-vnzlvqnm><span class="btn-text" data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"], renderTemplate`${label}`)}</span></button>`);
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/Button.astro", void 0);

export { $$Button as $ };
