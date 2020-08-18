const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'pascal',
	description: '',
	args: false,
	execute(message, args) {
		let pascalSentences = fs.readFileSync('./resources/pascal.json');
		pascalSentences = JSON.parse(pascalSentences);
		pascalSentences = Object.values(pascalSentences);
		const random = Math.floor((Math.random() * 291) + 1);
		const desc = pascalSentences[random].text;

		const embed = new Discord.MessageEmbed()
			.setColor('#ed3452')
			.setThumbnail('https://cdn.discordapp.com/attachments/276399226559135745/745016119370448956/pascal.png')
			.setDescription(desc);

		return message.channel.send(embed);

	},
};