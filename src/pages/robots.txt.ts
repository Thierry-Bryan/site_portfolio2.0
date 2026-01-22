import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site.config';

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteConfig.url}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /_/
Disallow: /Backend/
Disallow: /portfolio/
Disallow: /hero/

# Allow images
Allow: /images/
Allow: /avatar/
Allow: /icons/
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};