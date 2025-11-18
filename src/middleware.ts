import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  // Cloner la réponse pour pouvoir modifier les headers
  const newResponse = response.clone();
  
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  
  // === CACHE CONTROL HEADERS ===
  
  // Assets statiques avec hash (CSS, JS, images optimisées) : cache 1 an
  if (
    pathname.includes('/_astro/') || 
    pathname.match(/\.(css|js|woff2?|ttf|eot|otf|webp|avif|jpg|jpeg|png|gif|svg|ico)$/)
  ) {
    newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Images dans /public (sans hash) : cache 1 semaine
  else if (pathname.match(/\/(avatar|card|competences|hero|icons|images|mes-projets)\//)) {
    newResponse.headers.set('Cache-Control', 'public, max-age=604800, must-revalidate');
  }
  
  // Pages HTML : pas de cache, toujours revalider
  else if (pathname.endsWith('/') || pathname.endsWith('.html') || !pathname.includes('.')) {
    newResponse.headers.set('Cache-Control', 'no-cache, must-revalidate');
  }
  
  // === COMPRESSION HEADERS ===
  
  // Vérifier si le client accepte Brotli
  const acceptEncoding = context.request.headers.get('accept-encoding') || '';
  
  // Pour les fichiers qui ont une version compressée
  if (pathname.match(/\.(css|js|json|xml|svg|txt)$/)) {
    // Priorité à Brotli si supporté
    if (acceptEncoding.includes('br')) {
      newResponse.headers.set('Content-Encoding', 'br');
      newResponse.headers.set('Vary', 'Accept-Encoding');
    } 
    // Sinon Gzip
    else if (acceptEncoding.includes('gzip')) {
      newResponse.headers.set('Content-Encoding', 'gzip');
      newResponse.headers.set('Vary', 'Accept-Encoding');
    }
  }
  
  // === SECURITY HEADERS ===
  
  // Prévenir le MIME sniffing
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Protéger contre le clickjacking (sauf pour les iframes nécessaires)
  if (!pathname.includes('/embed/')) {
    newResponse.headers.set('X-Frame-Options', 'SAMEORIGIN');
  }
  
  // XSS Protection
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Referrer policy
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return newResponse;
});
