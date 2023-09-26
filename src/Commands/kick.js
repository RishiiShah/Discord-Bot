/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "kick",
	description: "Hello!",
	permission: "KICK_MEMBERS",
	async run(message, args, client) {
		message.reply("Hello!");
        let member = message.mentions.members.first();
    if(!member) return message.reply("Please mention a valid member of this server");
    if(!member.kickable) return message.reply("I cannot kick this member!");

    member.kick(); 
    message.channel.send(`${member} has been kicked.`);
	}
});
