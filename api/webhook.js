export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body;
    console.log("Telegram Update:", body);
    // Your logic here (e.g., respond to /bhs command)
    return res.status(200).json({ ok: true });
  }
  res.status(405).end(); // Method Not Allowed
}