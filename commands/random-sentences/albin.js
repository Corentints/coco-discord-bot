const root = require('app-root-path');
const { generateRandomSentence } = require(root + '/src/generateRandomSentence');
const Discord = require('discord.js');

module.exports = {
	name: 'albin',
	description: 'generate random sentence from albin',
	args: false,
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setColor('#ffef37')
			.setThumbnail('https://cdn.discordapp.com/emojis/703356211742900224.png?v=1')
			.setDescription(generateRandomSentence('./resources/albin.json', 7));

		return message.channel.send(embed);
	},
};