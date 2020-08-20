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

		// houseImage
		villagers.forEach(function(villager) {
			if (villager['name']['name-EUfr'].toLowerCase() === args[0].toLowerCase() || villager['name']['name-USen'].toLowerCase() === args[0].toLowerCase()) {
				const embed = new Discord.MessageEmbed()
					.setColor(villager['bubble-color'])
					.setAuthor('Maison de ' + villager['name']['name-EUfr'], villager['icon_uri'])
					.setImage(villager['house']);
				return message.channel.send(embed);
			}
		});
	},
};