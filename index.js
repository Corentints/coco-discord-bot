const fs = require('fs');
const Discord = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

/* const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
*/

fs.readdir('./commands/', (err, folders) => {
	if (err) {
		return console.error(err);
	}

	for (let i = 0; i < folders.length; i++) {
		fs.readdir(`./commands/${folders[i]}/`, (error, files) => {
			if (error) {
				return console.error(error);
			}
			files.forEach((file) => {
				if (!file.endsWith('.js')) {
					return;
				}

				const command = require(`./commands/${folders[i]}/${file}`);
				client.commands.set(command.name, command);
			});
		});
	}
});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (e) {
		console.log(e);
		message.reply('Désolé, cette commande n\'existe pas.');
	}
});

client.login(token);