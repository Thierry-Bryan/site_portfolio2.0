/**
 * Configuration de compression pour le serveur Node.js
 * Sert les fichiers .br (Brotli) et .gz (Gzip) pré-compressés
 */

import { existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Middleware pour servir les fichiers compressés pré-générés
 */
export function compressionMiddleware(req, res, next) {
  const acceptEncoding = req.headers["accept-encoding"] || "";
  const url = req.url.split("?")[0]; // Retirer les query params

  // Vérifier uniquement pour les assets statiques compressibles
  if (!url.match(/\.(css|js|json|xml|svg|txt|html)$/)) {
    return next();
  }

  // Chemins possibles pour les fichiers compressés
  const clientPath = join(__dirname, "../dist/client", url);
  const serverPath = join(__dirname, "../dist/server", url);

  let basePath = null;
  if (existsSync(clientPath)) {
    basePath = clientPath;
  } else if (existsSync(serverPath)) {
    basePath = serverPath;
  }

  if (!basePath) {
    return next();
  }

  // Tenter Brotli en priorité
  if (acceptEncoding.includes("br") && existsSync(basePath + ".br")) {
    req.url = url + ".br";
    res.setHeader("Content-Encoding", "br");
    res.setHeader("Vary", "Accept-Encoding");

    // Définir le bon Content-Type
    if (url.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css; charset=utf-8");
    } else if (url.endsWith(".js")) {
      res.setHeader("Content-Type", "application/javascript; charset=utf-8");
    }

    return next();
  }

  // Sinon tenter Gzip
  if (acceptEncoding.includes("gzip") && existsSync(basePath + ".gz")) {
    req.url = url + ".gz";
    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Vary", "Accept-Encoding");

    // Définir le bon Content-Type
    if (url.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css; charset=utf-8");
    } else if (url.endsWith(".js")) {
      res.setHeader("Content-Type", "application/javascript; charset=utf-8");
    }

    return next();
  }

  // Pas de version compressée disponible ou pas supportée par le client
  next();
}

/**
 * Configuration des headers de cache
 */
export function cacheHeadersMiddleware(req, res, next) {
  const url = req.url.split("?")[0];

  // Assets avec hash dans /_astro/ : cache immutable 1 an
  if (
    url.includes("/_astro/") ||
    url.match(/\.[a-f0-9]{8}\.(css|js|webp|avif|jpg|jpeg|png|gif|svg)$/)
  ) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }
  // Fonts : cache 1 an
  else if (url.match(/\.(woff2?|ttf|eot|otf)$/)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }
  // Images sans hash : cache 1 semaine
  else if (url.match(/\.(webp|avif|jpg|jpeg|png|gif|svg|ico)$/)) {
    res.setHeader("Cache-Control", "public, max-age=604800, must-revalidate");
  }
  // CSS/JS sans hash : cache 1 jour
  else if (url.match(/\.(css|js)$/)) {
    res.setHeader("Cache-Control", "public, max-age=86400, must-revalidate");
  }
  // HTML : pas de cache
  else if (url.endsWith(".html") || url.endsWith("/") || !url.includes(".")) {
    res.setHeader("Cache-Control", "no-cache, must-revalidate");
  }

  // Headers de sécurité
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  next();
}
