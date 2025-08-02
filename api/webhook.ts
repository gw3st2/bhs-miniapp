import type { NextApiRequest, NextApiResponse } from 'next';
import { bot } from '../lib/handlers';

export const config = {
  api: {
    bodyParser: false,
  },
};

let botInitialized = false;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!botInitialized) {
    await bot.init();
    botInitialized = true;
  }

  if (req.method === 'POST') {
    try {
      const chunks: any[] = [];
      for await (const chunk of req) chunks.push(chunk);
      const body = Buffer.concat(chunks).toString('utf-8');
      const update = JSON.parse(body);
      await bot.handleUpdate(update);
      res.status(200).end();
    } catch (error) {
      console.error("Webhook error:", error);
      res.status(500).send('Error handling update');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
