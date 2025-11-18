// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node"; // <-- NOUVEAU : Import de l'adaptateur Node
import compression from "vite-plugin-compression";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.bryan-thierry.fr",
  // NOUVEAU : Configure Astro pour créer un build SSR (Server-Side Rendering)
  output: "server",
  // NOUVEAU : Utilise l'adaptateur Node pour générer le code de serveur
  adapter: node({
    mode: "standalone", // Nécessaire pour générer entry.mjs, utilisé par PM2
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
  },
});
