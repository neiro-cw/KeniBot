import { SlashCommandBuilder } from '@discordjs/builders';
import axios from 'axios';
import { MessageEmbed } from 'discord.js';

export default {
	data: new SlashCommandBuilder()
		.setName('inspireme')
		.setDescription('Generates an inspirational quote'),
	async execute(interaction) {
        axios.get('http://inspirobot.me/api?generate=true')
            .then(async resp => {
                const embed = new MessageEmbed()
                    .setColor('#A877C8')
                    .setImage(resp.data)
                await interaction.reply({ embeds: [embed] });
            })
            .catch(async err => {
                console.error(err)
                await interaction.reply({ content: `There was an error while processing this command: ${interaction.commandName}` })
            })
	},
};
