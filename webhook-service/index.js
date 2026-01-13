import express from 'express';
import fetch from 'node-fetch';
import cron from 'node-cron';

const app = express();
const PORT = process.env.PORT || 3001;

// URLs de configuration
const POCKETBASE_URL = 'https://pocketbase-portfolio-production.up.railway.app';
const VERCEL_DEPLOY_HOOK = process.env.VERCEL_DEPLOY_HOOK || 'VOTRE_HOOK_URL_ICI';

let lastDataHash = '';

// Fonction pour récupérer et hasher les données PocketBase
async function checkPocketBaseChanges() {
  try {
    console.log('🔍 Vérification des changements PocketBase...');
    
    const response = await fetch(`${POCKETBASE_URL}/api/collections/projets/records?sort=-updated`);
    const data = await response.json();
    
    // Créer un hash simple des données
    const currentHash = JSON.stringify(data.items.map(item => ({
      id: item.id,
      updated: item.updated,
      titre: item.titre
    }))).slice(0, 100); // Hash simple
    
    if (lastDataHash && lastDataHash !== currentHash) {
      console.log('🚨 CHANGEMENTS DÉTECTÉS ! Déclenchement du rebuild...');
      
      // Déclencher le rebuild Vercel
      const deployResponse = await fetch(VERCEL_DEPLOY_HOOK, {
        method: 'POST'
      });
      
      if (deployResponse.ok) {
        console.log('✅ Rebuild Vercel déclenché avec succès !');
      } else {
        console.error('❌ Erreur lors du déclenchement:', deployResponse.statusText);
      }
    } else if (!lastDataHash) {
      console.log('📝 Initialisation du hash des données');
    } else {
      console.log('✨ Pas de changements détectés');
    }
    
    lastDataHash = currentHash;
    
  } catch (error) {
    console.error('❌ Erreur lors de la vérification:', error);
  }
}

// Vérifier toutes les 2 minutes
cron.schedule('*/2 * * * *', checkPocketBaseChanges);

// Endpoint manuel pour déclencher un check
app.get('/check', async (req, res) => {
  await checkPocketBaseChanges();
  res.json({ message: 'Vérification effectuée' });
});

// Endpoint de statut
app.get('/', (req, res) => {
  res.json({ 
    status: 'Service de surveillance PocketBase actif',
    lastHash: lastDataHash.slice(0, 20) + '...' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Service webhook démarré sur le port ${PORT}`);
  console.log('⏰ Vérification automatique toutes les 2 minutes');
  
  // Premier check au démarrage
  setTimeout(checkPocketBaseChanges, 5000);
});