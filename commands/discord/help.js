const Discord = require('discord.js');
module.exports = {
	name: 'coco',
	description: '',
	args: true,
	execute(message, args) {
		if (args[0] === 'help') {
			const embed = new Discord.MessageEmbed()
				.setColor('#fddf93')
				.setAuthor('Commandes de Coco', 'https://i.imgur.com/YvCY3gc.png')
				.setThumbnail('https://www.horizons-fan.fr/villageois/319.jpg')
				.addFields(
					{
						name: 'Informations d\'un habitant',
						value: '`!h <nom habitant>`',
						inline: true,
					},
					{
						name: '\u200b',
						value: '\u200b',
						inline: true,
					},
					{
						name: 'Façade d\'un habitant',
						value: '`!maison <nom habitant>`',
						inline: true,
					},
				)
				.addField('Informations sur un poisson', '`!poisson <nom du poisson>`')
				.addFields({
					name: 'Anecdote aléatoire Animal Crossing',
					value: '`!info`',
					inline: true,
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: true,
				},
				{
					name: 'Citation aléatoire de Pascal',
					value: '`!pascal`',
					inline: true,
				},
				)
				.addFields({
					name: 'Citation aléatoire d\'Albin',
					value: '`!albin`',
					inline: true,
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: true,
				},
				{
					name: 'Citation aléatoire de Marie',
					value: '`!marie`',
					inline: true,
				});

			return message.channel.send(embed);
		}
	},
};