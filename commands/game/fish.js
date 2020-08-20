const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'poisson',
	description: '',
	args: true,
	execute(message, args) {
		let fishes = fs.readFileSync('./resources/fish.json');
		fishes = JSON.parse(fishes);
		fishes = Object.values(fishes);
		let found;

		if (!args[0]) {
			return message.channel.send('Utilisation de la commande : `!poisson <nom du poisson>` !');
		}

		const fishName = args.slice(0, 3).join(' ');

		fishes.forEach(function(fish) {
			if (fish['name']['name-EUfr'].toLowerCase() === fishName.toLowerCase() || fish['name']['name-USen'].toLowerCase() === fishName.toLowerCase()) {
				found = true;

				const embed = new Discord.MessageEmbed()
					.setColor('#3f83f8')
					.setTitle(fish['name']['name-EUfr'].charAt(0).toUpperCase() + fish['name']['name-EUfr'].slice(1))
					.setThumbnail('https://www.horizons-fan.fr/fish/' + fish['id'] + '.jpg')
					.addFields({
						name: 'Nord',
						value: fish['availability']['month-northern'],
						inline: true,
					},
					{
						name: 'Sud',
						value: fish['availability']['month-southern'],
						inline: true,
					},
					{
						name: 'Horaires',
						value: fish['availability']['time'],
						inline: true,
					},
					)
					.addFields({
						name: 'Localisation',
						value: fish['availability']['location'],
						inline: true,
					},
					{
						name: 'Taille',
						value: fish['shadow'],
						inline: true,
					},
					{
						name: 'Rareté',
						value: fish['availability']['rarity'],
						inline: true,
					},
					).addFields({
						name: 'Prix (Nook)',
						value: fish['price'],
						inline: true,
					},
					{
						name: '\u200b',
						value: '\u200b',
						inline: true,
					},
					{
						name: 'Prix (Pollux)',
						value: fish['price-cj'],
						inline: true,
					},
					)
				;

				return message.channel.send(embed);
			}
		});

		if (!found) return message.channel.send('Le poisson n\'a pas été trouvé :(');
	},
};