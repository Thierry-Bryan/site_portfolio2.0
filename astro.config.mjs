// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node"; // <-- NOUVEAU : Import de l'adaptateur Node

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

  vite: {
    plugins: [tailwindcss()],
  },
});
