import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_cG0OTFUB.mjs';
import { manifest } from './manifest_CHPIvhPY.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/a-propos.astro.mjs');
const _page2 = () => import('./pages/mentions-legales.astro.mjs');
const _page3 = () => import('./pages/politique-confidentialite.astro.mjs');
const _page4 = () => import('./pages/projets/_id_.astro.mjs');
const _page5 = () => import('./pages/projets.astro.mjs');
const _page6 = () => import('./pages/services.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos/index.astro", _page1],
    ["src/pages/mentions-legales/index.astro", _page2],
    ["src/pages/politique-confidentialite/index.astro", _page3],
    ["src/pages/projets/[id].astro", _page4],
    ["src/pages/projets/index.astro", _page5],
    ["src/pages/services/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "36a352f4-6f0f-4903-abd8-e8d7b48e10a7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
