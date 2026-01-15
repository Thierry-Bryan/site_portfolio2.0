// Endpoint webhook pour le déploiement automatique
import type { APIRoute } from 'astro';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Vérification simple du token
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== `Bearer ${process.env.DEPLOY_TOKEN || 'deploy123'}`) {
      return new Response('Unauthorized', { status: 401 });
    }

    console.log('🚀 Webhook de déploiement reçu...');

    // Commandes de déploiement exactement comme deploy.ps1
    const deployScript = `
      cd /srv/customer/sites/portfolio.bryan-thierry.fr
      git pull origin main
      echo "POCKETBASE_URL=https://pocketbase-portfolio-production.up.railway.app" > .env
      echo "PUBLIC_POCKETBASE_URL=https://pocketbase-portfolio-production.up.railway.app" >> .env
      npm install
      npm run build
      pkill -f "node" || echo "No processes found"
      sleep 2
      nohup bash -c 'HOST=0.0.0.0 PORT=4321 node dist/server/entry.mjs' > app.log 2>&1 &
    `;

    // Exécution asynchrone du déploiement
    execAsync(deployScript).then(() => {
      console.log('✅ Déploiement terminé avec succès !');
    }).catch((error) => {
      console.error('❌ Erreur de déploiement:', error);
    });

    return new Response(JSON.stringify({ 
      message: 'Déploiement déclenché avec succès',
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};