import { d as defineMiddleware, s as sequence } from './chunks/index_sEwHw5hF.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BV4Qw14n.mjs';
import './chunks/astro/server_yuAGbZrg.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const response = await next();
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  if (pathname.includes("/_astro/")) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (pathname.match(/\.(woff2?|ttf|eot|otf)$/)) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (pathname.match(/\.(webp|avif|jpg|jpeg|png|gif|svg|ico)$/)) {
    response.headers.set("Cache-Control", "public, max-age=604800, must-revalidate");
  } else if (pathname.endsWith("/") || pathname.endsWith(".html") || !pathname.includes(".")) {
    response.headers.set("Cache-Control", "no-cache, must-revalidate");
  }
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
