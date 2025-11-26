import { REST, Routes } from "discord.js";
import { readdirSync } from "node:fs";
import path from "node:path";
import "dotenv/config";

const dTK = process.env.TOKEN!;
const dCCL = process.env.CLIENT_ID!;

const commandsPath = path.join(process.cwd(), "commands");
const files = readdirSync(commandsPath).filter(f => f.endsWith(".ts"));

const commands = [];

for (const file of files) {
  const filePath = path.join(commandsPath, file);
  const { command } = await import(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(dTK);

try {
  console.log("Uploading slash commands...");
  await rest.put(Routes.applicationCommands(dCCL), { body: commands });
  console.log("Uploaded successfully!");
} catch (err) {
  console.error(err);
}
