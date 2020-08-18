const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'maison',
	description: '',
	args: true,
	execute(message, args) {
		let villagers = fs.readFileSync('./resources/villagers.json');
		villagers = JSON.parse(villagers);
		villagers = Object.values(villagers);

		let villagersHouse = fs.readFileSync('./resources/villagers-2.json');
		villagersHouse = JSON.parse(villagersHouse);
		villagersHouse = Object.values(villagersHouse);

		villagers.forEach(function(villager) {
		    if (villager['name']['name-EUfr'] === args[0]) {
				const villagerName = villager['name']['name-USen'];

				villagersHouse.forEach(function(v) {
					if (v.name === villagerName) {
						const embed = new Discord.MessageEmbed()
							.setColor(villager['bubble-color'])
							.setAuthor('Maison de ' + villager['name']['name-EUfr'], v.photoImage)
							.setImage(v.houseImage);
						return message.channel.send(embed);
					}
				});
			}
		});
	},
};