const https = require('https');
 
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
 
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
 
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured on server.' });
 
  try {
    const { system, user } = req.body;
    if (!user) return res.status(400).json({ error: 'Missing user message' });
 
    const payload = JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      ...(system ? { system } : {}),
      messages: [{ role: 'user', content: user }]
    });
 
    const result = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Length': Buffer.byteLength(payload)
        }
      };
 
      const request = https.request(options, (response) => {
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => {
          try { resolve(JSON.parse(data)); }
          catch(e) { reject(new Error('Invalid JSON response')); }
        });
      });
 
      request.on('error', reject);
      request.write(payload);
      request.end();
    });
 
    if (result.error) return res.status(500).json({ error: result.error.message });
    return res.status(200).json({ result: result.content?.[0]?.text || 'No response.' });
 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
