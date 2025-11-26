# 🦜 Parrot Bot --- Discord Bot (TypeScript + Bun)

Parrot Bot is a simple and clean Discord bot template built with
**TypeScript**, **discord.js v14**, and **Bun**.\
This project is designed to be easy for contributors to understand,
extend, and add new commands.

------------------------------------------------------------------------

##  Project Structure

    project/
    │ package.json
    │ tsconfig.json
    │ bunfig.toml
    │
    ├── commands/
    │   ├── ping.ts
    │   ├── myroles.ts
    │   └── stealpfp.ts
    │
    ├── main.ts
    ├── register.ts
    └── types.ts

------------------------------------------------------------------------

##  `types.ts` -- Command Interface

This file defines a shared interface (`Command`) that every slash
command must follow.

It ensures: - consistent structure\
- TypeScript autocomplete\
- safe dynamic loading of commands\
- fewer common mistakes

------------------------------------------------------------------------

##  `register.ts` -- Register Commands to Discord

Uploads all slash commands to Discord via REST API.

Run this **whenever commands change**:

    bun run register.ts

------------------------------------------------------------------------

##  `main.ts` -- Bot Runtime

Handles: - connecting the bot\
- loading command files\
- listening for slash command interactions\
- executing the correct command

Run it with:

    bun run main.ts

------------------------------------------------------------------------

##  `commands/` -- Command Files

Each file in this folder is one slash command.

A valid command structure:

``` ts
import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../types";

export const command: Command = {
    data: new SlashCommandBuilder()
        .setName("example")
        .setDescription("This is an example command"),

    async execute(interaction) {
        await interaction.reply("Hello from example command!");
    }
};
```

------------------------------------------------------------------------

##  How to Create a New Command

1.  Create a new file inside `commands/` (e.g. `hello.ts`)
2.  Export a `command` object using the `Command` interface
3.  Add your builder + execute logic
4.  Run:

```{=html}
<!-- -->
```
    bun run register.ts

You're done!
