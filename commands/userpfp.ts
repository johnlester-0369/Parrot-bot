import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../types";

export const command: Command = {
    data: new SlashCommandBuilder()
        .setName("stealpfp")
        .setDescription("Steal someone's profile picture by UID!")
        .addStringOption(option =>
            option
                .setName("userid")
                .setDescription("The user ID to steal the avatar from")
                .setRequired(true)
        ),

    async execute(interaction) {
        const userId = interaction.options.getString("userid")!;
        const user = await interaction.client.users.fetch(userId).catch(() => null);

        if (!user) {
            await interaction.reply("Invalid user ID.");
            return;
        }

        const avatar = user.displayAvatarURL({ size: 2048 });

        await interaction.reply(avatar);
    }
};
