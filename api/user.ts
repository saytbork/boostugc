// @ts-ignore – TS needs this because admin.mjs is ESM
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkAuth } from '../server/lib/checkAuth.js';
import { getUser } from '../server/lib/store.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers for frontend requests
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host || 'localhost';
    const { searchParams } = new URL(req.url || '', `${protocol}://${host}`);
    const action = searchParams.get('action')?.toLowerCase() || '';

    if (action !== 'me') {
      return res.status(400).json({ error: 'Invalid action' });
    }

    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const email = checkAuth(req);
    if (!email) {
      return res.status(200).json({
        userId: 'guest',
        email: null,
        plan: 'free',
      });
    }

    const user = await getUser(email);
    return res.status(200).json({
      userId: email,
      email,
      credits: user.credits ?? 0,
      plan: user.plan ?? 'free',
      inviteUsed: user.inviteUsed ?? false,
    });
  } catch (err: any) {
    console.error('❌ User API Error:', err);
    return res.status(500).json({ error: 'Internal User API Error' });
  }
}
