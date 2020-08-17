const root = require('app-root-path');
const fs = require('fs');
const Discord = require('discord.js');

const { translatePersonality, translateSpecies, translateHobbies } = require(root + '/src/translations/translations-EUfr');

/**
 * @param villager
 */
function description(villager) {
	let birthdate = villager['birthday'].split('/');
	birthdate = ('0' + birthdate[0]).slice(-2) + '/' + ('0' + birthdate[1]).slice(-2);

	if (villager['gender'] === 'Female') {
		return `${villager['name']['name-EUfr']} est une habitante de personnalité \`${translatePersonality(villager['personality']).toLowerCase()}\`, née le ${birthdate}`;
	}

	if (villager['gender'] === 'Male') {
		return `${villager['name']['name-EUfr']} est un habitant de personnalité \`${translatePersonality(villager['personality']).toLowerCase()}\`, né le ${birthdate}`;
	}
}

module.exports = {
	name: 'h',
	description: '',
	args: true,
	execute(message, args) {
		let villagers = fs.readFileSync('./resources/villagers.json');
		villagers = JSON.parse(villagers);
		villagers = Object.values(villagers);
		villagers.forEach(function(villager) {
			if (villager['name']['name-EUfr'].toLowerCase() === args[0].toLowerCase()) {
				const desc = description(villager);
				const embed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setThumbnail('https://www.horizons-fan.fr/villageois/' + villager['id'] + '.jpg')
					.setDescription(desc)
					.addFields(
						{
							name: 'Accroche',
							value: '"' + villager['catch-translations']['catch-EUfr'] + '"',
							inline: true,
						},
						{
							name: 'Espèce',
							value: translateSpecies(villager['species']),
							inline: true,
						},
						{
							name: 'Hobby',
							value: translateHobbies(villager['hobby']),
							inline: true,
						},
					)
					.setColor(villager['bubble-color'])
					.setTitle(villager['name']['name-EUfr']);
				return message.channel.send(embed);
			}
		});
	},
};