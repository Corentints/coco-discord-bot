const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'albin',
	description: '',
	args: false,
	execute(message, args) {
		let pascalSentences = fs.readFileSync('./resources/albin.json');
		pascalSentences = JSON.parse(pascalSentences);
		pascalSentences = Object.values(pascalSentences);
		const random = Math.floor((Math.random() * 7) - 1);
		const desc = pascalSentences[random].text;

		const embed = new Discord.MessageEmbed()
			.setColor('#ffef37')
			.setThumbnail('https://cdn.discordapp.com/emojis/703356211742900224.png?v=1')
			.setDescription(desc);

		return message.channel.send(embed);

	},
};