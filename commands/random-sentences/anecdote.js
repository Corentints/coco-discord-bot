const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'info',
	description: 'generate random anecdote',
	args: false,
	execute(message) {
		let anecdotes = fs.readFileSync('./resources/fun/anecdote.json');
		anecdotes = JSON.parse(anecdotes);
		anecdotes = Object.values(anecdotes);
		const random = Math.floor((Math.random() * anecdotes.length) + 1) - 1;

		let image;
		if (anecdotes[random].image) {
			image = anecdotes[random].image;
		}

		const embed = new Discord.MessageEmbed()
			.setColor('#c3e88d')
			.setTitle('Anecdote Animal Crossing')
			.setThumbnail(image)
			.setDescription(anecdotes[random].text);

		return message.channel.send(embed);
	},
};