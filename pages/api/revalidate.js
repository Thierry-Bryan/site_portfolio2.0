// API pour déclencher une revalidation du site statique
export default async function handler(req, res) {
  // Vérifier que c'est une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Déclencher un redéploiement via Vercel
    const deployHook = process.env.VERCEL_DEPLOY_HOOK;
    
    if (deployHook) {
      await fetch(deployHook, { method: 'POST' });
      res.status(200).json({ 
        message: 'Revalidation triggered successfully',
        timestamp: new Date().toISOString() 
      });
    } else {
      res.status(200).json({ 
        message: 'Revalidation request received',
        timestamp: new Date().toISOString() 
      });
    }
  } catch (error) {
    console.error('Revalidation error:', error);
    res.status(500).json({ 
      message: 'Revalidation failed', 
      error: error.message 
    });
  }
}