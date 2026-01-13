// Script pour déclencher un redéploiement quand PocketBase change
// Utilisez ce script si PocketBase ne supporte pas les webhooks natifs

const VERCEL_DEPLOY_HOOK = 'https://api.vercel.com/v1/integrations/deploy/VOTRE_HOOK_ID'; // Remplacez par votre URL
const POCKETBASE_URL = 'https://pocketbase-portfolio-production.up.railway.app';

let lastHash = '';

async function checkForUpdates() {
  try {
    // Récupérer les projets
    const response = await fetch(`${POCKETBASE_URL}/api/collections/projets/records`);
    const data = await response.json();
    
    // Créer un hash des données
    const currentHash = btoa(JSON.stringify(data.items.map(item => ({
      id: item.id,
      updated: item.updated,
      titre: item.titre
    }))));
    
    if (lastHash && lastHash !== currentHash) {
      console.log('🔄 Changements détectés dans PocketBase, déclenchement du redéploiement...');
      
      // Déclencher le redéploiement
      await fetch(VERCEL_DEPLOY_HOOK, {
        method: 'POST'
      });
      
      console.log('✅ Redéploiement déclenché !');
    }
    
    lastHash = currentHash;
    
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

// Vérifier toutes les 5 minutes
setInterval(checkForUpdates, 5 * 60 * 1000);

// Première vérification
checkForUpdates();

console.log('🚀 Surveillance PocketBase démarrée...');