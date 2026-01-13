// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import compression from "vite-plugin-compression";
import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.bryan-thierry.fr",
  // Mode server pour Infomaniak avec FTP - v2
  output: "server",
  adapter: node({
    mode: "standalone",
  }),

  // Optimisation des images avec Sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    remotePatterns: [
      {
        protocol: "http",
      },
      {
        protocol: "https",
      },
    ],
  },

  vite: {
    plugins: [
      tailwindcss(),
      // Compression Brotli
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 1024, // Compresser les fichiers > 1KB
        deleteOriginFile: false,
      }),
      // Compression Gzip (fallback)
      compression({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 1024,
        deleteOriginFile: false,
      }),
    ],
    build: {
      // Minification optimale
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true, // Supprimer les console.log en production
          drop_debugger: true,
          pure_funcs: ["console.log", "console.info", "console.debug"],
        },
      },
      // Optimisation du bundling
      rollupOptions: {
        output: {
          manualChunks: {
            // Bundler les dépendances communes
            emailjs: ["@emailjs/browser"],
          },
        },
      },
      // Optimisation des assets
      assetsInlineLimit: 4096, // Inline les assets < 4KB (réduire les requêtes HTTP)
      cssCodeSplit: true, // Activer le split CSS par page pour meilleures performances
    },
  },
});
