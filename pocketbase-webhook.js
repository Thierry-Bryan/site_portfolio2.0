// Script webhook pour PocketBase - déclenche rebuild instantané
// À ajouter dans PocketBase comme hook après modification des données

const webhookUrl = 'https://api.github.com/repos/Thierry-Bryan/site_portfolio2.0/dispatches';
const githubToken = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN'; // À remplacer

// Fonction de déclenchement du webhook
async function triggerRebuild() {
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.everest-preview+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_type: 'pocketbase-update',
                client_payload: {
                    timestamp: new Date().toISOString(),
                    source: 'pocketbase-webhook'
                }
            })
        });
        
        if (response.ok) {
            console.log('✅ Rebuild déclenché avec succès');
        } else {
            console.error('❌ Erreur lors du déclenchement:', response.statusText);
        }
    } catch (error) {
        console.error('❌ Erreur webhook:', error);
    }
}

// Déclencher immédiatement
triggerRebuild();