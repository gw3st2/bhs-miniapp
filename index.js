const TelegramBot = require("node-telegram-bot-api");

// Replace with your actual bot token
const token = '8230110138:AAFejyLkHO2qzI7SWsEhFbZfy-eOyurmjms';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/bhs/i, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "🚀 *Launch the Blockchain Historical Society App*\n\nExplore historical blockchain events by tokens, documents, influencers, and more.", {
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📲 Open BHS App",
            web_app: {
              url: "https://bhs-tg-app.vercel.app"
            }
          }
        ]
      ]
    }
  });
});
