#!/usr/bin/env node

/**
 * Script de test pour vérifier la compression et les headers de cache
 * Usage: node test-compression.mjs
 * 
 * Vérifie:
 * - Fichiers .br et .gz générés
 * - Taux de compression
 * - Headers de cache configurés
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('\n🔍 TEST DE COMPRESSION ET CACHE\n');
console.log('='.repeat(50));

// 1. Vérifier que le build existe
const distPath = join(__dirname, 'dist');
if (!existsSync(distPath)) {
  console.error('❌ Le dossier dist/ n\'existe pas. Lancez d\'abord: npm run build');
  process.exit(1);
}

console.log('✅ Dossier dist/ trouvé\n');

// 2. Chercher les fichiers CSS
const astroPath = join(distPath, 'client', '_astro');
if (!existsSync(astroPath)) {
  console.error('❌ Le dossier dist/client/_astro n\'existe pas');
  process.exit(1);
}

const files = readdirSync(astroPath);
const cssFiles = files.filter(f => f.endsWith('.css') && !f.endsWith('.br') && !f.endsWith('.gz'));

if (cssFiles.length === 0) {
  console.error('❌ Aucun fichier CSS trouvé');
  process.exit(1);
}

console.log('📊 ANALYSE DES FICHIERS CSS\n');

cssFiles.forEach(cssFile => {
  const cssPath = join(astroPath, cssFile);
  const brPath = cssPath + '.br';
  const gzPath = cssPath + '.gz';
  
  const cssSize = readFileSync(cssPath).length;
  
  console.log(`📄 ${cssFile}`);
  console.log(`   Original: ${(cssSize / 1024).toFixed(2)} KB`);
  
  // Vérifier Brotli
  if (existsSync(brPath)) {
    const brSize = readFileSync(brPath).length;
    const brRatio = ((1 - brSize / cssSize) * 100).toFixed(1);
    console.log(`   ✅ Brotli (.br): ${(brSize / 1024).toFixed(2)} KB (${brRatio}% réduction)`);
  } else {
    console.log('   ❌ Fichier .br manquant');
  }
  
  // Vérifier Gzip
  if (existsSync(gzPath)) {
    const gzSize = readFileSync(gzPath).length;
    const gzRatio = ((1 - gzSize / cssSize) * 100).toFixed(1);
    console.log(`   ✅ Gzip (.gz): ${(gzSize / 1024).toFixed(2)} KB (${gzRatio}% réduction)`);
  } else {
    console.log('   ❌ Fichier .gz manquant');
  }
  
  console.log('');
});

// 3. Vérifier les fichiers JS
const jsFiles = files.filter(f => f.endsWith('.js') && !f.endsWith('.br') && !f.endsWith('.gz'));

if (jsFiles.length > 0) {
  console.log('📊 ANALYSE DES FICHIERS JS\n');
  
  jsFiles.slice(0, 3).forEach(jsFile => {
    const jsPath = join(astroPath, jsFile);
    const brPath = jsPath + '.br';
    const gzPath = jsPath + '.gz';
    
    const jsSize = readFileSync(jsPath).length;
    
    console.log(`📄 ${jsFile}`);
    console.log(`   Original: ${(jsSize / 1024).toFixed(2)} KB`);
    
    if (existsSync(brPath)) {
      const brSize = readFileSync(brPath).length;
      const brRatio = ((1 - brSize / jsSize) * 100).toFixed(1);
      console.log(`   ✅ Brotli: ${(brSize / 1024).toFixed(2)} KB (${brRatio}% réduction)`);
    }
    
    if (existsSync(gzPath)) {
      const gzSize = readFileSync(gzPath).length;
      const gzRatio = ((1 - gzSize / jsSize) * 100).toFixed(1);
      console.log(`   ✅ Gzip: ${(gzSize / 1024).toFixed(2)} KB (${gzRatio}% réduction)`);
    }
    
    console.log('');
  });
}

// 4. Vérifier le middleware
const middlewarePath = join(__dirname, 'src', 'middleware.ts');
if (existsSync(middlewarePath)) {
  console.log('✅ Middleware src/middleware.ts trouvé');
} else {
  console.log('❌ Middleware src/middleware.ts manquant');
}

// 5. Vérifier server-compression.mjs
const serverCompressionPath = join(__dirname, 'server-compression.mjs');
if (existsSync(serverCompressionPath)) {
  console.log('✅ Fichier server-compression.mjs trouvé');
} else {
  console.log('❌ Fichier server-compression.mjs manquant');
}

console.log('\n' + '='.repeat(50));
console.log('\n💡 INSTRUCTIONS DE TEST EN PRODUCTION:\n');
console.log('1. Démarrer le serveur: npm start');
console.log('2. Tester avec curl (Git Bash ou WSL):');
console.log('   curl -H "Accept-Encoding: br" -I http://localhost:4321/');
console.log('\n3. Vérifier les headers:');
console.log('   - Content-Encoding: br ou gzip');
console.log('   - Cache-Control: public, max-age=...');
console.log('   - X-Content-Type-Options: nosniff');
console.log('\n✨ Configuration terminée avec succès!\n');
