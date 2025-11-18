import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  
  // === CACHE CONTROL HEADERS ===
  
  // Assets statiques avec hash dans /_astro/ : cache immutable 1 an
  if (pathname.includes('/_astro/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Fonts : cache 1 an
  else if (pathname.match(/\.(woff2?|ttf|eot|otf)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Images dans /public : cache 1 semaine
  else if (pathname.match(/\.(webp|avif|jpg|jpeg|png|gif|svg|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=604800, must-revalidate');
  }
  // Pages HTML : pas de cache
  else if (pathname.endsWith('/') || pathname.endsWith('.html') || !pathname.includes('.')) {
    response.headers.set('Cache-Control', 'no-cache, must-revalidate');
  }
  
  // === SECURITY HEADERS ===
  
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
});
