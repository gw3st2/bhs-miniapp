export default async function handler(req, res) {
  if (req.method === "POST") {
    const message = req.body.message;

    if (message?.text === "/BHS") {
      const chatId = message.chat.id;

      const payload = {
        chat_id: chatId,
        text: "🚀 Launch BHS App",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "📲 Open BHS App",
                web_app: { url: "https://bhs-tg-app.vercel.app/" }
              }
            ]
          ]
        }
      };

      await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    }

    return res.status(200).end();
  }

  res.status(405).end();
}

