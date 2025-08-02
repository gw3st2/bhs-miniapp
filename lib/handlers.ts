import { Bot } from "grammy";

export const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", (ctx) => ctx.reply("Welcome to BHS Explorer!"));
bot.command("ping", (ctx) => ctx.reply("Pong 🏓"));
bot.command("bhs", (ctx) => ctx.reply("🔗 Launch the BHS Mini App: https://bhs-miniapp.vercel.app"));

bot.on("message", (ctx) => {
  console.log("Received message:", ctx.message.text);
});
