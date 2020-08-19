const fs = require('fs');
const Discord = require('discord.js');

/**
 * @param villager
 */
function description(villager) {
	let birthdate = villager['birthday'].split('/');
	birthdate = ('0' + birthdate[0]).slice(-2) + '/' + ('0' + birthdate[1]).slice(-2);
	const gender = villager['gender'];
	return `${villager['name']['name-EUfr']} est une habitant${gender === 'Male' ? '' : 'e'} de personnalité \`${villager['personality'].toLowerCase()}\`, né${gender === 'Male' ? '' : 'e'} le ${birthdate}`;
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
							value: villager['species'],
							inline: true,
						},
						{
							name: 'Hobby',
							value: villager['hobby'],
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