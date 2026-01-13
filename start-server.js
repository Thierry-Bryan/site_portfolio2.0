#!/usr/bin/env node

const { createServer } = require('node:http');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

// Import du serveur Astro
const { handler } = require('./server/entry.mjs');

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

// Création du serveur HTTP
const server = createServer((req, res) => {
  // Configuration CORS et headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Déléguer à Astro
  handler(req, res);
});

server.listen(port, host, () => {
  console.log(`🚀 Serveur Astro démarré sur http://${host}:${port}`);
});

// Gestion propre de l'arrêt
process.on('SIGTERM', () => {
  console.log('🛑 Arrêt du serveur...');
  server.close(() => {
    console.log('✅ Serveur arrêté proprement');
    process.exit(0);
  });
});