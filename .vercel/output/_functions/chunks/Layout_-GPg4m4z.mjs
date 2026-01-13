import { c as createComponent, a as renderTemplate, f as renderScript, m as maybeRenderHead, b as createAstro, d as addAttribute, r as renderComponent, u as unescapeHTML, p as renderSlot, q as renderHead, e as defineScriptVars } from './astro/server_yuAGbZrg.mjs';
/* empty css                         */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button id="theme-toggle" class="relative w-16 h-8 rounded-full border-2 transition-all duration-300" aria-label="Changer de th\xE8me" data-astro-cid-x3pjskd3> <div id="toggle-indicator" class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center" data-astro-cid-x3pjskd3> <svg class="sun-icon w-4 h-4 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-astro-cid-x3pjskd3> <circle cx="12" cy="12" r="4" data-astro-cid-x3pjskd3></circle> <line x1="12" y1="2" x2="12" y2="4" data-astro-cid-x3pjskd3></line> <line x1="12" y1="20" x2="12" y2="22" data-astro-cid-x3pjskd3></line> <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" data-astro-cid-x3pjskd3></line> <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" data-astro-cid-x3pjskd3></line> <line x1="2" y1="12" x2="4" y2="12" data-astro-cid-x3pjskd3></line> <line x1="20" y1="12" x2="22" y2="12" data-astro-cid-x3pjskd3></line> <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" data-astro-cid-x3pjskd3></line> <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" data-astro-cid-x3pjskd3></line> </svg> <svg class="moon-icon hidden w-4 h-4 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-x3pjskd3> <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05z" data-astro-cid-x3pjskd3></path> </svg> </div> </button>  <script>
  // Initialiser IMM\xC9DIATEMENT l'\xE9tat du toggle (avant DOMContentLoaded)
  (function() {
    const isDark = window.__isDarkMode || localStorage.getItem("darkMode") === "true";
    
    // Appliquer l'\xE9tat d\xE8s que les \xE9l\xE9ments existent
    function initToggle() {
      const indicator = document.getElementById("toggle-indicator");
      const sunIcon = document.querySelector(".sun-icon");
      const moonIcon = document.querySelector(".moon-icon");
      
      if (indicator && sunIcon && moonIcon) {
        if (isDark) {
          indicator.style.transform = "translateX(32px)";
          sunIcon.classList.add("hidden");
          moonIcon.classList.remove("hidden");
        } else {
          indicator.style.transform = "translateX(0px)";
          sunIcon.classList.remove("hidden");
          moonIcon.classList.add("hidden");
        }
        return true;
      }
      return false;
    }
    
    // Essayer imm\xE9diatement
    if (!initToggle()) {
      // Si pas encore pr\xEAt, r\xE9essayer au DOMContentLoaded
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initToggle);
      } else {
        initToggle();
      }
    }
  })();
<\/script> `, ""])), maybeRenderHead(), renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/ThemeToggle.astro", void 0);

const $$Astro$2 = createAstro("https://portfolio.bryan-thierry.fr");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { theme = "ca-va-trailer" } = Astro2.props;
  const isProjetsPageSSR = Astro2.url.pathname === "/projets" || Astro2.url.pathname.startsWith("/projets/");
  const isLegalPageSSR = Astro2.url.pathname.includes("/mentions-legales") || Astro2.url.pathname.includes("/politique-confidentialite");
  const isServicesPageSSR = Astro2.url.pathname.includes("/services");
  const pageClass = isProjetsPageSSR ? "projet-page" : isLegalPageSSR ? "legal-page" : isServicesPageSSR ? "services-page" : "";
  const headerClass = `navbar w-full px-6 py-4 fixed top-0 z-50 transition-all duration-500 bg-transparent ${pageClass}`.trim();
  return renderTemplate`<!-- Mobile Menu Backdrop -->${maybeRenderHead()}<div id="mobile-menu-backdrop" class="fixed inset-0 z-[999] bg-black bg-opacity-50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 md:hidden"></div> <!-- Mobile Menu --> <div id="mobile-menu" class="fixed inset-0 z-[1000] bg-[var(--b1)] transform translate-x-full transition-transform duration-300 ease-in-out md:hidden overflow-y-auto"> <div class="flex items-center justify-between px-6 py-4 border-b-2 border-[var(--bc)] border-opacity-10"> <a href="/" class="logo-link font-primary text-4xl tracking-tight relative transition-all duration-300 hover:scale-105 hover:-rotate-1 comics-glow-hover">
BRYAN THIERRY
</a> <button id="mobile-menu-close" class="p-2 rounded-lg transition-colors duration-300 hover:bg-[var(--p)] hover:bg-opacity-10" aria-label="Fermer le menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="flex flex-col h-[calc(100%-80px)] px-6 py-8 justify-center"> <ul class="space-y-6 mb-12"> <li> <a href="/" class="mobile-nav-link font-primary text-2xl block py-3 transition-all duration-300 hover:scale-105 hover:-rotate-1 text-[var(--bc)]">
ACCUEIL
</a> </li> <li> <a href="/services" class="mobile-nav-link font-primary text-2xl block py-3 transition-all duration-300 hover:scale-105 hover:-rotate-1 text-[var(--bc)]">
MES SERVICES
</a> </li> <li> <a href="/projets" class="mobile-nav-link font-primary text-2xl block py-3 transition-all duration-300 hover:scale-105 hover:-rotate-1 text-[var(--bc)]">
MES PROJETS
</a> </li> <li> <a href="/a-propos" class="mobile-nav-link font-primary text-2xl block py-3 transition-all duration-300 hover:scale-105 hover:-rotate-1 text-[var(--bc)]">
A PROPOS
</a> </li> </ul> <button onclick="window.openContactModal(); document.getElementById('mobile-menu').classList.add('translate-x-full'); document.getElementById('mobile-menu-backdrop').classList.add('opacity-0', 'pointer-events-none'); document.body.style.overflow = '';" class="w-full font-primary relative inline-flex h-11 px-8 items-center justify-center overflow-hidden cursor-pointer transition-all duration-200 btn-gradient-primary btn-shadow"> <span class="btn-text relative z-10 btn-text-white">ME CONTACTER</span> </button> </nav> </div> <header id="header"${addAttribute(headerClass, "class")}> <!-- Mobile: Logo + Hamburger --> <div class="flex items-center justify-between w-full md:hidden"> <a href="/" class="mobile-logo-link logo-link font-primary text-2xl tracking-tight relative transition-all duration-300 hover:scale-105 hover:-rotate-1 comics-glow-hover">
BRYAN THIERRY
</a> <div class="flex items-center gap-3"> <button id="mobile-menu-btn" class="mobile-hamburger p-2 rounded-lg transition-colors duration-300 hover:bg-[var(--p)] hover:bg-opacity-10" aria-label="Menu" aria-expanded="false"> <svg class="w-6 h-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path class="hamburger-line" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Desktop: Logo + Nav + Actions --> <div class="hidden md:flex items-center justify-between w-full"> <div class="navbar-start"> <a href="/" class="desktop-logo-link logo-link font-primary text-4xl tracking-tight relative transition-all duration-300 hover:scale-105 hover:-rotate-1 comics-glow-hover">
BRYAN THIERRY
</a> </div> <div class="navbar-center"> <ul class="menu menu-horizontal gap-10 px-1"> <li> <a href="/services" class="nav-link font-primary uppercase text-xl relative transition-all duration-300 hover:scale-105 hover:-rotate-1 comics-glow-hover-link hover:bg-transparent">
MES SERVICES
</a> </li> <li> <a href="/projets" class="nav-link font-primary uppercase text-xl relative transition-all duration-300 hover:scale-105 hover:-rotate-1 comics-glow-hover-link hover:bg-transparent">
MES PROJETS
</a> </li> <li> <a href="/a-propos" class="nav-link font-primary uppercase text-xl relative transition-all duration-300 hover:scale-105 hover:-rotate-1 comics-glow-hover-link hover:bg-transparent">
A PROPOS
</a> </li> <li> <a href="https://drive.google.com/file/d/1EzEQnYgxazbyD1uuetc9JN6hzklZ7v2X/view?usp=drive_link" target="_blank" rel="noopener noreferrer" class="nav-link font-primary uppercase text-xl relative transition-all duration-300 hover:scale-105 hover:-rotate-1 comics-glow-hover-link hover:bg-transparent">
Voir mon CV
</a> </li> </ul> </div> <div class="navbar-end flex items-center gap-4"> ${Astro2.url.pathname !== "/" && renderTemplate`${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})}`} <button onclick="window.openContactModal()" aria-label="Me contacter" class="header-button font-primary relative inline-flex h-11 px-8 items-center justify-center overflow-hidden cursor-pointer transition-all duration-200 btn-gradient-primary btn-shadow"> <span class="btn-text relative z-10 btn-text-white">ME CONTACTER</span> </button> </div> </div> </header> ${renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/Header.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/Header.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/Header.astro", void 0);

const $$BackgroundComics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dégradé comics dynamique -->${maybeRenderHead()}<div class="absolute inset-0 w-full h-full pointer-events-none gradient-primary-vertical opacity-100 z-0"></div> <!-- Images comics en overlay --> <div class="absolute inset-0 w-full h-full pointer-events-none bg-halftone-color-dodge"></div> <div class="absolute inset-0 w-full h-full pointer-events-none bg-halftone-color-burn"></div> <div class="absolute inset-0 w-full h-full pointer-events-none bg-retro-comics"></div>`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/BackgroundComics.astro", void 0);

const siteConfig = {
  author: {
    email: "bryan.thierry.pro@gmail.com"
  },
  social: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/bryan.thierry.75/?hl=fr-ca",
      label: "Inspiration & visuels"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bryan-thierry/",
      label: "Réseau pro"
    },
    {
      name: "Behance",
      url: "https://www.behance.net/bryanthierry1",
      label: "Portfolio créatif"
    }
  ]};

const InstagramSVG = "<svg width=\"48\" height=\"48\" viewBox=\"0 0 109 109\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M92.65 24.525a8.175 8.175 0 11-16.35 0 8.175 8.175 0 0116.35 0z\" fill=\"#000\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M54.5 81.75c15.05 0 27.25-12.2 27.25-27.25S69.55 27.25 54.5 27.25 27.25 39.45 27.25 54.5s12.2 27.25 27.25 27.25zm0-10.9c9.03 0 16.35-7.32 16.35-16.35 0-9.03-7.32-16.35-16.35-16.35-9.03 0-16.35 7.32-16.35 16.35 0 9.03 7.32 16.35 16.35 16.35z\" fill=\"#000\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 52.32c0-18.314 0-27.47 3.564-34.465a32.7 32.7 0 0114.29-14.29C24.85 0 34.007 0 52.32 0h4.36c18.314 0 27.47 0 34.465 3.564a32.7 32.7 0 0114.291 14.29C109 24.85 109 34.007 109 52.32v4.36c0 18.314 0 27.47-3.564 34.465a32.7 32.7 0 01-14.29 14.291C84.15 109 74.993 109 56.68 109h-4.36c-18.314 0-27.47 0-34.465-3.564a32.7 32.7 0 01-14.29-14.29C0 84.15 0 74.993 0 56.68v-4.36zM52.32 10.9h4.36c9.337 0 15.684.008 20.59.41 4.778.39 7.222 1.097 8.927 1.966a21.8 21.8 0 019.527 9.527c.869 1.705 1.576 4.149 1.967 8.927.4 4.906.409 11.253.409 20.59v4.36c0 9.337-.008 15.684-.41 20.59-.39 4.778-1.097 7.222-1.966 8.927a21.8 21.8 0 01-9.527 9.527c-1.705.869-4.149 1.576-8.927 1.967-4.906.4-11.253.409-20.59.409h-4.36c-9.337 0-15.684-.008-20.59-.41-4.778-.39-7.222-1.097-8.927-1.966a21.8 21.8 0 01-9.527-9.527c-.869-1.705-1.576-4.149-1.967-8.927-.4-4.906-.409-11.253-.409-20.59v-4.36c0-9.337.008-15.684.41-20.59.39-4.778 1.097-7.222 1.966-8.927a21.8 21.8 0 019.527-9.527c1.705-.869 4.149-1.576 8.927-1.967 4.906-.4 11.253-.409 20.59-.409z\" fill=\"#000\"/></svg>";

const LinkedinSVG = "<svg width=\"48\" height=\"48\" viewBox=\"0 0 117 109\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.225 13.175c0 7.276-6.319 13.174-14.113 13.174S0 20.451 0 13.175C0 5.898 6.318 0 14.112 0c7.794 0 14.113 5.898 14.113 13.175zM1.93 36.033h24.124V109H1.93V36.033zM64.893 36.033H40.769V109h24.124V71.666c0-8.62 2.949-17.279 14.715-17.279 13.298 0 13.218 11.282 13.156 20.022-.081 11.424.112 23.083.112 34.591H117V70.49c-.204-24.59-6.624-35.92-27.742-35.92-12.542 0-20.316 5.683-24.365 10.825v-9.362z\" fill=\"#000\"/></svg>";

const BehanceSVG = "<svg width=\"48\" height=\"48\" viewBox=\"0 0 163 109\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 107.003V0h49.509C65.41 0 78.302 12.88 78.302 28.769c0 10.096-3.107 16.35-14.5 22.766 13.634 6.207 17.42 14.809 17.42 26.808 0 16.231-14.432 28.66-30.678 28.66H0zm20.95-89.29v25.73h24.52s11.917 0 11.917-12.865c0-12.866-11.917-12.866-11.917-12.866H20.95zm0 71.168V61.098h26.3c4.247 0 13.15 2.19 13.15 15.329 0 9.744-8.766 12.363-13.15 12.454h-26.3zM126.015 29.483c-15.068 0-37.396 10.812-37.396 39.553 0 17.5 9.589 39.964 38.355 39.964 23.013 0 33.606-16.88 36.026-25.32h-21.643c-1.096 3.832-5.342 8.075-14.383 8.075-13.15 0-17.808-11.222-18.493-16.834H163v-5.885c0-28.741-21.917-39.553-36.985-39.553zm0 16.423c-12.274 0-16.803 10.128-17.534 15.192h32.876c0-5.064-3.069-15.192-15.342-15.192z\" fill=\"#000\"/><path d=\"M99.851 6.08v13.275h51.643V6.079H99.851z\" fill=\"#000\"/></svg>";

const $$Astro$1 = createAstro("https://portfolio.bryan-thierry.fr");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { theme = "ca-va-trailer" } = Astro2.props;
  const socialLinks = siteConfig.social;
  const svgByName = {
    Instagram: InstagramSVG,
    LinkedIn: LinkedinSVG,
    Behance: BehanceSVG
  };
  return renderTemplate`${maybeRenderHead()}<footer id="footer"${addAttribute(theme, "data-theme")} class="relative w-full min-h-[calc(100vh-var(--header-height,80px))] bg-(--b1) border-t-4 border-(--p) overflow-hidden flex flex-col" style="min-height:calc(100vh - var(--header-height,80px));"> ${renderComponent($$result, "BackgroundComics", $$BackgroundComics, {})} <div class="flex-1 grid grid-cols-1 md:grid-cols-[1fr_2fr] z-10 relative"> <div class="relative w-full h-[460px] hidden md:flex items-center justify-center"> <img src="/avatar/footer.webp" alt="Photo de Bryan Thierry" class="absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-1/2 object-contain max-h-[500px] max-w-[400px] brightness-90 contrast-110"> </div> <div class="relative container mx-auto px-6 py-4 md:py-8 flex flex-col h-full justify-center"> <!-- Email + réseaux sociaux groupés au centre --> <div class="flex-1 flex flex-col justify-center items-center w-full"> <div class="w-full mb-6 md:mb-8"> <div class="md:grid md:grid-cols-3 md:gap-4 w-full"> <div class="flex justify-center md:justify-start md:col-span-3"> <a${addAttribute(`mailto:${siteConfig.author.email}`, "href")} class="email-box comics-glow-hover-link w-full"> <p class="font-primary text-lg md:text-xl tracking-tight text-(--bc) uppercase text-center"> ${siteConfig.author.email} </p> </a> </div> </div> </div> <div class="social-grid mb-3 md:mb-5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-center items-center"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank" rel="noopener noreferrer" class="comics-card social-card p-3 md:p-7 gap-1 md:gap-3 min-h-[clamp(120px,18vw,260px)] w-full flex flex-col items-center justify-center transition-all duration-300"${addAttribute(social.name, "aria-label")}> <span class="w-10 h-10 md:w-14 md:h-14 transition-all duration-300 shrink-0 social-svg">${unescapeHTML(svgByName[social.name]?.replace(/fill=\"#000\"/g, 'fill="currentColor"').replace(/fill=\"#000000\"/g, 'fill="currentColor"'))}</span> <h3 class="font-primary text-lg md:text-2xl uppercase text-(--bc) tracking-tight comics-glow-hover-link comics-transform-hover"> ${social.name} </h3> <p class="font-secondary text-xs md:text-sm text-(--bc) text-center opacity-70 leading-5 md:leading-6"> ${social.label} </p> <div class="arrow-circle"> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </a>`)} </div> </div> </div> </div> <!-- Section mentions légales collée en bas --> <div class="w-full border-t-2 border-(--bc) py-3 z-10 relative bg-(--b1) mt-auto"> <div class="container mx-auto px-6"> <div class="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left"> <p class="font-secondary text-sm text-(--bc)">
© 2025 Bryan Thierry. Tous droits réservés.
</p> <div class="flex gap-4"> <a href="/mentions-legales" class="font-secondary text-sm text-(--bc) hover:text-(--p) transition-colors duration-300">
Mentions légales
</a> <a href="/politique-confidentialite" class="font-secondary text-sm text-(--bc) hover:text-(--p) transition-colors duration-300">
Politique de confidentialité
</a> </div> </div> </div> </div> </footer>`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/Footer.astro", void 0);

const $$ContactModal = createComponent(async ($$result, $$props, $$slots) => {
  const svgMap = {
    Instagram: InstagramSVG,
    LinkedIn: LinkedinSVG,
    Behance: BehanceSVG
  };
  return renderTemplate`${maybeRenderHead()}<div id="contact-modal" class="modal-overlay fixed inset-0 z-[100] hidden items-center justify-center p-4 overflow-y-auto modal-overlay-bg" data-astro-cid-nxxydibx> <div id="modal-container" class="modal-container relative w-full max-w-xl my-auto" data-astro-cid-nxxydibx> <!-- Modal Card --> <div id="modal-card" class="modal-card relative bg-(--b1) border-4 border-(--bc) p-6 md:p-12 modal-shadow-primary" data-astro-cid-nxxydibx> <!-- Bouton fermer --> <button type="button" id="close-modal" class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border-2 border-(--bc) bg-(--b1) hover:bg-(--p) hover:border-(--p) transition-all duration-300 group z-50" aria-label="Fermer" data-astro-cid-nxxydibx> <svg class="w-5 h-5 text-(--bc) group-hover:text-(--b1) transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3" data-astro-cid-nxxydibx> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-astro-cid-nxxydibx></path> </svg> </button> <!-- Ligne décorative --> <div class="absolute top-0 left-0 w-full h-2 bg-(--p)" data-astro-cid-nxxydibx></div> <!-- Titre --> <h2 class="text-3xl md:text-5xl font-primary text-(--p) mb-3 uppercase tracking-tight" data-astro-cid-nxxydibx>
Parlons Projet
</h2> <p class="text-xs md:text-sm font-secondary text-(--bc) mb-8 opacity-70 leading-relaxed" data-astro-cid-nxxydibx>
Une idée en tête ? Remplissez le formulaire et je vous réponds sous 24h.
</p> <!-- Formulaire --> <form id="contact-form" class="space-y-5" data-astro-cid-nxxydibx> <!-- Grille Nom + Email --> <div class="grid grid-cols-1 md:grid-cols-2 gap-5" data-astro-cid-nxxydibx> <!-- Nom --> <div data-astro-cid-nxxydibx> <label for="name" class="block font-secondary text-xs font-bold text-(--bc) mb-2 uppercase tracking-wide" data-astro-cid-nxxydibx>
Nom *
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border-2 border-(--bc) bg-(--b1) text-(--bc) font-secondary text-sm focus:outline-none focus:border-(--p) focus:shadow-[3px_3px_0_0_var(--p)] transition-all duration-200" placeholder="Votre nom" data-astro-cid-nxxydibx> </div> <!-- Email --> <div data-astro-cid-nxxydibx> <label for="email" class="block font-secondary text-xs font-bold text-(--bc) mb-2 uppercase tracking-wide" data-astro-cid-nxxydibx>
Email *
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border-2 border-(--bc) bg-(--b1) text-(--bc) font-secondary text-sm focus:outline-none focus:border-(--p) focus:shadow-[3px_3px_0_0_var(--p)] transition-all duration-200" placeholder="votre@email.com" data-astro-cid-nxxydibx> </div> </div> <!-- Message --> <div data-astro-cid-nxxydibx> <label for="message" class="block font-secondary text-xs font-bold text-(--bc) mb-2 uppercase tracking-wide" data-astro-cid-nxxydibx>
Message *
</label> <textarea id="message" name="message" required rows="5" class="w-full px-4 py-3 border-2 border-(--bc) bg-(--b1) text-(--bc) font-secondary text-sm focus:outline-none focus:border-(--p) focus:shadow-[3px_3px_0_0_var(--p)] transition-all duration-200 resize-none" placeholder="Décrivez votre projet en quelques lignes..." data-astro-cid-nxxydibx></textarea> </div> <!-- Message de succès/erreur --> <div id="form-message" class="hidden p-4 border-2 border-(--bc)" data-astro-cid-nxxydibx> <p class="font-secondary text-sm" data-astro-cid-nxxydibx></p> </div> <!-- Bouton submit --> <button type="submit" id="submit-btn" class="w-full h-14 font-primary text-xl uppercase relative overflow-hidden transition-all duration-200 cursor-pointer btn-gradient-primary btn-shadow" data-astro-cid-nxxydibx> <span class="btn-text relative z-10 btn-text-white" data-astro-cid-nxxydibx>Envoyer le message</span> </button> </form> <!-- Séparateur --> <div class="flex items-center gap-4 my-6" data-astro-cid-nxxydibx> <div class="flex-1 h-[2px] bg-(--bc) opacity-20" data-astro-cid-nxxydibx></div> <span class="font-secondary text-xs uppercase tracking-widest text-(--bc) opacity-50" data-astro-cid-nxxydibx>ou</span> <div class="flex-1 h-[2px] bg-(--bc) opacity-20" data-astro-cid-nxxydibx></div> </div> <!-- Réseaux sociaux --> <div class="flex justify-center items-center gap-4" data-astro-cid-nxxydibx> ${siteConfig.social.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank" rel="noopener noreferrer" class="modal-social-link group relative w-12 h-12 flex items-center justify-center border-2 border-(--bc) bg-(--b1) hover:bg-(--p) hover:border-(--p) transition-all duration-300"${addAttribute(social.name, "aria-label")}${addAttribute(social.name, "title")} data-astro-cid-nxxydibx> <span class="w-6 h-6 modal-social-svg" data-astro-cid-nxxydibx>${unescapeHTML(svgMap[social.name]?.replace(/fill=\"#000\"/g, 'fill="currentColor"').replace(/fill=\"#000000\"/g, 'fill="currentColor"'))}</span> </a>`)} </div> </div> </div> </div>  ${renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/ContactModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/components/ContactModal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://portfolio.bryan-thierry.fr");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Portfolio", theme = "ca-va-trailer", firstSectionTheme } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Pr\xE9chargement des fonts critiques --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="dns-prefetch" href="https://portfolio.bryan-thierry.fr"><!-- Pr\xE9chargement des assets critiques --><link rel="preload" as="image" href="/avatar/footer.webp" fetchpriority="high"><!-- Script CRITIQUE EN PREMIER pour \xE9viter tout flash --><script>(function(){', `
      // EX\xC9CUT\xC9 AVANT TOUT LE RESTE DU HTML
      (function () {
        const isHomePage = window.location.pathname === "/" || window.location.pathname === "/index.html";
        
        // D\xE9tecter le mode sombre IMM\xC9DIATEMENT
        let isDark = localStorage.getItem("darkMode") === "true";
        if (localStorage.getItem("darkMode") === null) {
          isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          localStorage.setItem("darkMode", isDark ? "true" : "false");
        }
        
        // Appliquer le th\xE8me AVANT que le HTML soit rendu
        let finalTheme;
        if (isHomePage) {
          finalTheme = pageTheme;
          document.documentElement.setAttribute("data-user-dark-mode", isDark ? "true" : "false");
        } else {
          finalTheme = isDark ? pageTheme + "-dark" : pageTheme;
        }
        
        document.documentElement.setAttribute("data-theme", finalTheme);
        localStorage.setItem("theme", finalTheme);
        
        // Stocker l'\xE9tat isDark pour le toggle
        window.__isDarkMode = isDark;

        // Fonction globale pour changer le th\xE8me
        window.changeTheme = function () {
          const isHome =
            window.location.pathname === "/" ||
            window.location.pathname === "/index.html";
          let currentTheme;

          if (isHome) {
            // Sur la page d'accueil, lire la pr\xE9f\xE9rence utilisateur
            const userDarkMode =
              document.documentElement.getAttribute("data-user-dark-mode") ===
              "true";
            const baseTheme =
              document.documentElement.getAttribute("data-theme");
            currentTheme = userDarkMode ? baseTheme + "-dark" : baseTheme;
          } else {
            currentTheme =
              document.documentElement.getAttribute("data-theme") ||
              defaultTheme;
          }

          const isDark = currentTheme.includes("-dark");
          const newTheme = isDark
            ? currentTheme.replace("-dark", "")
            : currentTheme + "-dark";

          // Sauvegarder la pr\xE9f\xE9rence dark/light (pas le th\xE8me sp\xE9cifique)
          localStorage.setItem(
            "darkMode",
            newTheme.includes("-dark") ? "true" : "false"
          );
          localStorage.setItem("theme", newTheme);

          if (isHome) {
            // Page d'accueil : garder le th\xE8me clair pour le contenu, mais mettre \xE0 jour la pr\xE9f\xE9rence
            document.documentElement.setAttribute(
              "data-user-dark-mode",
              newTheme.includes("-dark") ? "true" : "false"
            );
          } else {
            // Autres pages : appliquer le th\xE8me complet
            document.documentElement.setAttribute("data-theme", newTheme);

            // Forcer le recalcul des variables CSS
            document.body.style.display = "none";
            document.body.offsetHeight;
            document.body.style.display = "";

            // Mettre \xE0 jour les sections avec data-theme (chaque section garde son propre th\xE8me)
            const sections = document.querySelectorAll("section[data-theme]");
            sections.forEach((section) => {
              const sectionTheme = section.getAttribute("data-theme");
              const sectionBaseTheme = sectionTheme.replace("-dark", "");
              const newSectionTheme = newTheme.includes("-dark")
                ? sectionBaseTheme + "-dark"
                : sectionBaseTheme;
              section.setAttribute("data-theme", newSectionTheme);
            });
          }

          // Mettre \xE0 jour header et footer (sur TOUTES les pages)
          const header = document.getElementById("header");
          const footer = document.getElementById("footer");

          if (header) {
            // Le header prend le newTheme (qui peut \xEAtre celui de la section ou de la page)
            header.setAttribute("data-theme", newTheme);

            // Forcer la mise \xE0 jour imm\xE9diate du background du header
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const headerComputedStyle = getComputedStyle(header);
                const bgColor = headerComputedStyle
                  .getPropertyValue("--b1")
                  .trim();
                if (header.classList.contains("scrolled") || !isHome) {
                  header.style.backgroundColor = \`\${bgColor}f5\`;
                }

                // Sur la page d'accueil, forcer la mise \xE0 jour des couleurs du texte
                if (isHome) {
                  const isDarkMode = newTheme.includes("-dark");
                  const logoLink = header.querySelector(".logo-link");
                  const navLinks = header.querySelectorAll(".nav-link");

                  if (isDarkMode) {
                    if (logoLink) logoLink.style.color = "white";
                    navLinks.forEach((link) => (link.style.color = "white"));
                  } else {
                    if (logoLink) logoLink.style.color = "";
                    navLinks.forEach((link) => (link.style.color = ""));
                  }
                }
              });
            });
          }

          if (footer) {
            // Le footer prend toujours le th\xE8me de la page (pageTheme), pas celui du header
            const isDarkForFooter = newTheme.includes("-dark");
            const footerTheme = isDarkForFooter ? pageTheme + "-dark" : pageTheme;
            footer.setAttribute("data-theme", footerTheme);
          }

          // Mettre \xE0 jour les ic\xF4nes du toggle
          const sunIcon = document.querySelector(".sun-icon");
          const moonIcon = document.querySelector(".moon-icon");

          if (!isDark) {
            sunIcon?.classList.add("hidden");
            moonIcon?.classList.remove("hidden");
          } else {
            sunIcon?.classList.remove("hidden");
            moonIcon?.classList.add("hidden");
          }

          // D\xE9clencher un \xE9v\xE9nement custom pour notifier les composants
          window.dispatchEvent(
            new CustomEvent("themeChanged", { detail: { theme: newTheme } })
          );

          return newTheme;
        };

        // Au chargement, synchroniser header et footer avec le bon th\xE8me
        window.addEventListener("DOMContentLoaded", function () {
          const isHome =
            window.location.pathname === "/" ||
            window.location.pathname === "/index.html";
          const header = document.getElementById("header");
          const footer = document.getElementById("footer");
          const isDarkMode = localStorage.getItem("darkMode") === "true";

          let themeForHeaderFooter;
          if (isHome) {
            // Sur la page d'accueil, utiliser la pr\xE9f\xE9rence utilisateur pour header/footer
            const userDarkMode =
              document.documentElement.getAttribute("data-user-dark-mode") ===
              "true";
            const baseTheme =
              document.documentElement.getAttribute("data-theme");
            themeForHeaderFooter = userDarkMode
              ? baseTheme + "-dark"
              : baseTheme;
          } else {
            // Si un th\xE8me initial pour le header est sp\xE9cifi\xE9 (comme sur la page \xE0 propos)
            if (typeof initialHeaderTheme !== 'undefined' && initialHeaderTheme) {
              themeForHeaderFooter = isDarkMode ? initialHeaderTheme + "-dark" : initialHeaderTheme;
            } else {
              themeForHeaderFooter =
                document.documentElement.getAttribute("data-theme");
            }

            // Sur les autres pages, mettre \xE0 jour chaque section avec son propre th\xE8me
            const sections = document.querySelectorAll("section[data-theme]");
            sections.forEach((section) => {
              const sectionTheme = section.getAttribute("data-theme");
              const sectionBaseTheme = sectionTheme.replace("-dark", "");
              const newSectionTheme = isDarkMode
                ? sectionBaseTheme + "-dark"
                : sectionBaseTheme;
              section.setAttribute("data-theme", newSectionTheme);
            });
          }

          if (header) {
            header.setAttribute("data-theme", themeForHeaderFooter);

            // Sur la page d'accueil en mode sombre, mettre le texte en blanc
            if (isHome && themeForHeaderFooter.includes("-dark")) {
              const logoLink = header.querySelector(".logo-link");
              const navLinks = header.querySelectorAll(".nav-link");

              if (logoLink) logoLink.style.color = "white";
              navLinks.forEach((link) => (link.style.color = "white"));
            }
          }

          // Le footer prend toujours le th\xE8me de la page, pas celui du header
          const themeForFooter = isDarkMode ? pageTheme + "-dark" : pageTheme;
          if (footer) footer.setAttribute("data-theme", themeForFooter);

          // Initialiser les ic\xF4nes
          const isDark = themeForHeaderFooter.includes("-dark");
          const sunIcon = document.querySelector(".sun-icon");
          const moonIcon = document.querySelector(".moon-icon");

          if (isDark) {
            sunIcon?.classList.add("hidden");
            moonIcon?.classList.remove("hidden");
          } else {
            sunIcon?.classList.remove("hidden");
            moonIcon?.classList.add("hidden");
          }
        });
      })();
    })();<\/script><!-- Pr\xE9charger les scripts critiques de navigation --><link rel="modulepreload" href="/src/scripts/projet-navigation.ts">`, '</head> <body class="overflow-x-hidden"> ', " ", " ", " ", " </body></html>"], ['<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Pr\xE9chargement des fonts critiques --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="dns-prefetch" href="https://portfolio.bryan-thierry.fr"><!-- Pr\xE9chargement des assets critiques --><link rel="preload" as="image" href="/avatar/footer.webp" fetchpriority="high"><!-- Script CRITIQUE EN PREMIER pour \xE9viter tout flash --><script>(function(){', `
      // EX\xC9CUT\xC9 AVANT TOUT LE RESTE DU HTML
      (function () {
        const isHomePage = window.location.pathname === "/" || window.location.pathname === "/index.html";
        
        // D\xE9tecter le mode sombre IMM\xC9DIATEMENT
        let isDark = localStorage.getItem("darkMode") === "true";
        if (localStorage.getItem("darkMode") === null) {
          isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          localStorage.setItem("darkMode", isDark ? "true" : "false");
        }
        
        // Appliquer le th\xE8me AVANT que le HTML soit rendu
        let finalTheme;
        if (isHomePage) {
          finalTheme = pageTheme;
          document.documentElement.setAttribute("data-user-dark-mode", isDark ? "true" : "false");
        } else {
          finalTheme = isDark ? pageTheme + "-dark" : pageTheme;
        }
        
        document.documentElement.setAttribute("data-theme", finalTheme);
        localStorage.setItem("theme", finalTheme);
        
        // Stocker l'\xE9tat isDark pour le toggle
        window.__isDarkMode = isDark;

        // Fonction globale pour changer le th\xE8me
        window.changeTheme = function () {
          const isHome =
            window.location.pathname === "/" ||
            window.location.pathname === "/index.html";
          let currentTheme;

          if (isHome) {
            // Sur la page d'accueil, lire la pr\xE9f\xE9rence utilisateur
            const userDarkMode =
              document.documentElement.getAttribute("data-user-dark-mode") ===
              "true";
            const baseTheme =
              document.documentElement.getAttribute("data-theme");
            currentTheme = userDarkMode ? baseTheme + "-dark" : baseTheme;
          } else {
            currentTheme =
              document.documentElement.getAttribute("data-theme") ||
              defaultTheme;
          }

          const isDark = currentTheme.includes("-dark");
          const newTheme = isDark
            ? currentTheme.replace("-dark", "")
            : currentTheme + "-dark";

          // Sauvegarder la pr\xE9f\xE9rence dark/light (pas le th\xE8me sp\xE9cifique)
          localStorage.setItem(
            "darkMode",
            newTheme.includes("-dark") ? "true" : "false"
          );
          localStorage.setItem("theme", newTheme);

          if (isHome) {
            // Page d'accueil : garder le th\xE8me clair pour le contenu, mais mettre \xE0 jour la pr\xE9f\xE9rence
            document.documentElement.setAttribute(
              "data-user-dark-mode",
              newTheme.includes("-dark") ? "true" : "false"
            );
          } else {
            // Autres pages : appliquer le th\xE8me complet
            document.documentElement.setAttribute("data-theme", newTheme);

            // Forcer le recalcul des variables CSS
            document.body.style.display = "none";
            document.body.offsetHeight;
            document.body.style.display = "";

            // Mettre \xE0 jour les sections avec data-theme (chaque section garde son propre th\xE8me)
            const sections = document.querySelectorAll("section[data-theme]");
            sections.forEach((section) => {
              const sectionTheme = section.getAttribute("data-theme");
              const sectionBaseTheme = sectionTheme.replace("-dark", "");
              const newSectionTheme = newTheme.includes("-dark")
                ? sectionBaseTheme + "-dark"
                : sectionBaseTheme;
              section.setAttribute("data-theme", newSectionTheme);
            });
          }

          // Mettre \xE0 jour header et footer (sur TOUTES les pages)
          const header = document.getElementById("header");
          const footer = document.getElementById("footer");

          if (header) {
            // Le header prend le newTheme (qui peut \xEAtre celui de la section ou de la page)
            header.setAttribute("data-theme", newTheme);

            // Forcer la mise \xE0 jour imm\xE9diate du background du header
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const headerComputedStyle = getComputedStyle(header);
                const bgColor = headerComputedStyle
                  .getPropertyValue("--b1")
                  .trim();
                if (header.classList.contains("scrolled") || !isHome) {
                  header.style.backgroundColor = \\\`\\\${bgColor}f5\\\`;
                }

                // Sur la page d'accueil, forcer la mise \xE0 jour des couleurs du texte
                if (isHome) {
                  const isDarkMode = newTheme.includes("-dark");
                  const logoLink = header.querySelector(".logo-link");
                  const navLinks = header.querySelectorAll(".nav-link");

                  if (isDarkMode) {
                    if (logoLink) logoLink.style.color = "white";
                    navLinks.forEach((link) => (link.style.color = "white"));
                  } else {
                    if (logoLink) logoLink.style.color = "";
                    navLinks.forEach((link) => (link.style.color = ""));
                  }
                }
              });
            });
          }

          if (footer) {
            // Le footer prend toujours le th\xE8me de la page (pageTheme), pas celui du header
            const isDarkForFooter = newTheme.includes("-dark");
            const footerTheme = isDarkForFooter ? pageTheme + "-dark" : pageTheme;
            footer.setAttribute("data-theme", footerTheme);
          }

          // Mettre \xE0 jour les ic\xF4nes du toggle
          const sunIcon = document.querySelector(".sun-icon");
          const moonIcon = document.querySelector(".moon-icon");

          if (!isDark) {
            sunIcon?.classList.add("hidden");
            moonIcon?.classList.remove("hidden");
          } else {
            sunIcon?.classList.remove("hidden");
            moonIcon?.classList.add("hidden");
          }

          // D\xE9clencher un \xE9v\xE9nement custom pour notifier les composants
          window.dispatchEvent(
            new CustomEvent("themeChanged", { detail: { theme: newTheme } })
          );

          return newTheme;
        };

        // Au chargement, synchroniser header et footer avec le bon th\xE8me
        window.addEventListener("DOMContentLoaded", function () {
          const isHome =
            window.location.pathname === "/" ||
            window.location.pathname === "/index.html";
          const header = document.getElementById("header");
          const footer = document.getElementById("footer");
          const isDarkMode = localStorage.getItem("darkMode") === "true";

          let themeForHeaderFooter;
          if (isHome) {
            // Sur la page d'accueil, utiliser la pr\xE9f\xE9rence utilisateur pour header/footer
            const userDarkMode =
              document.documentElement.getAttribute("data-user-dark-mode") ===
              "true";
            const baseTheme =
              document.documentElement.getAttribute("data-theme");
            themeForHeaderFooter = userDarkMode
              ? baseTheme + "-dark"
              : baseTheme;
          } else {
            // Si un th\xE8me initial pour le header est sp\xE9cifi\xE9 (comme sur la page \xE0 propos)
            if (typeof initialHeaderTheme !== 'undefined' && initialHeaderTheme) {
              themeForHeaderFooter = isDarkMode ? initialHeaderTheme + "-dark" : initialHeaderTheme;
            } else {
              themeForHeaderFooter =
                document.documentElement.getAttribute("data-theme");
            }

            // Sur les autres pages, mettre \xE0 jour chaque section avec son propre th\xE8me
            const sections = document.querySelectorAll("section[data-theme]");
            sections.forEach((section) => {
              const sectionTheme = section.getAttribute("data-theme");
              const sectionBaseTheme = sectionTheme.replace("-dark", "");
              const newSectionTheme = isDarkMode
                ? sectionBaseTheme + "-dark"
                : sectionBaseTheme;
              section.setAttribute("data-theme", newSectionTheme);
            });
          }

          if (header) {
            header.setAttribute("data-theme", themeForHeaderFooter);

            // Sur la page d'accueil en mode sombre, mettre le texte en blanc
            if (isHome && themeForHeaderFooter.includes("-dark")) {
              const logoLink = header.querySelector(".logo-link");
              const navLinks = header.querySelectorAll(".nav-link");

              if (logoLink) logoLink.style.color = "white";
              navLinks.forEach((link) => (link.style.color = "white"));
            }
          }

          // Le footer prend toujours le th\xE8me de la page, pas celui du header
          const themeForFooter = isDarkMode ? pageTheme + "-dark" : pageTheme;
          if (footer) footer.setAttribute("data-theme", themeForFooter);

          // Initialiser les ic\xF4nes
          const isDark = themeForHeaderFooter.includes("-dark");
          const sunIcon = document.querySelector(".sun-icon");
          const moonIcon = document.querySelector(".moon-icon");

          if (isDark) {
            sunIcon?.classList.add("hidden");
            moonIcon?.classList.remove("hidden");
          } else {
            sunIcon?.classList.remove("hidden");
            moonIcon?.classList.add("hidden");
          }
        });
      })();
    })();<\/script><!-- Pr\xE9charger les scripts critiques de navigation --><link rel="modulepreload" href="/src/scripts/projet-navigation.ts">`, '</head> <body class="overflow-x-hidden"> ', " ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, defineScriptVars({ pageTheme: theme, initialHeaderTheme: firstSectionTheme }), renderHead(), renderComponent($$result, "Header", $$Header, { "theme": theme }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "theme": theme }), renderComponent($$result, "ContactModal", $$ContactModal, {}));
}, "C:/Users/bryan/Documents/GitHub/site_portfolio2.0/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$BackgroundComics as a };
