import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site.config';
import { getProjets } from '../utils/pb';

export const GET: APIRoute = async () => {
  let projets = [];
  
  try {
    projets = await getProjets();
  } catch (error) {
    console.error('Erreur lors de la récupération des projets pour le sitemap:', error);
  }

  const staticPages = [
    '',
    '/a-propos',
    '/services',
    '/projets',
    '/mentions-legales',
    '/politique-confidentialite'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${siteConfig.url}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
  ${projets
    .map(
      (projet) => `
  <url>
    <loc>${siteConfig.url}/projets/${projet.slug}</loc>
    <lastmod>${new Date(projet.updated).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};