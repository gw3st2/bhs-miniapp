# Telegram Bot Webhook with Vercel

## Setup

1. Deploy this project to Vercel.
2. Set your bot token in the environment variables: `BOT_TOKEN`
3. Register the webhook with Telegram:

```
curl "https://api.telegram.org/bot<your_bot_token>/setWebhook?url=https://<your-vercel-project>.vercel.app/api/telegram"
```

4. Add the bot to your group and send `/BHS` to see the launch button.
