const root = require('app-root-path');
const { generateRandomSentence } = require(root + '/src/generateRandomSentence');
const Discord = require('discord.js');

module.exports = {
	name: 'marie',
	description: 'generate random sentence from marie',
	args: false,
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setColor('#f9f7ae')
			.setThumbnail('https://cdn.discordapp.com/emojis/702726238199873557.png?v=1')
			.setDescription(generateRandomSentence('./resources/marie.json', 67));

		return message.channel.send(embed);
	},
};