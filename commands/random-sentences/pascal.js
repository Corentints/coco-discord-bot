const root = require('app-root-path');
const { generateRandomSentence } = require(root + '/src/generateRandomSentence');
const Discord = require('discord.js');

module.exports = {
	name: 'pascal',
	description: 'generate random sentence from pascal',
	args: false,
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setColor('#ed3452')
			.setThumbnail('https://cdn.discordapp.com/attachments/276399226559135745/745016119370448956/pascal.png')
			.setDescription(generateRandomSentence('./resources/pascal.json', 291));
		return message.channel.send(embed);
	},
};