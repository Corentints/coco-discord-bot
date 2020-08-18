module.exports = {
	name: 'uptime',
	description: '',
	args: false,
	execute(message) {
		let totalSeconds = (message.client.uptime / 1000);
		const days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		const hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = Math.floor(totalSeconds % 60);

		return message.channel.send(`${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes`);
	},
};