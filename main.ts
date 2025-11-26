import { Client, Events, GatewayIntentBits, Collection } from "discord.js";
import { readdirSync } from "node:fs";
import path from "node:path";
import "dotenv/config";

const dTK = process.env.TOKEN!;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.commands = new Collection();

const commandsPath = path.join(process.cwd(), "commands");
const files = readdirSync(commandsPath).filter(f => f.endsWith(".ts"));

for (const file of files) {
  const filePath = path.join(commandsPath, file);
  const { command } = await import(filePath);
  client.commands.set(command.data.name, command);
}

client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}! 🦜`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const cmd = client.commands.get(interaction.commandName);
  if (!cmd) return;

  await cmd.execute(interaction);
});

client.login(dTK);
