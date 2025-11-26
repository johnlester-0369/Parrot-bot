import { SlashCommandBuilder, GuildMember } from 'discord.js';
import type { Command } from '../types';

export const command: Command = {
    data: new SlashCommandBuilder ()
        .setName('myroles')
        .setDescription('Check your roles!'),

    async execute ( interaction ) {
        const member = interaction.member as GuildMember;
        const roles  = member.roles.cache
            // I don't want @everyone
            .filter(role => role.name !== "@everyone")
            .map(role => role.name)
            .join(", ");
        
        if (!roles) {
            await interaction.reply('error')
            return
        }
        await interaction.reply(`your roles! ${roles}`)
        

    }
}