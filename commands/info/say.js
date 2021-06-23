const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'say',
    aliases: ["say"],
    description: 'says a message!',
    run: async (client, message, args) => {
        if (message.member.hasPermission("MANAGE_MESSAGE")) {
            const saymessage = args.join(" ");
            message.delete().catch(err => console.log(err));
            message.channel.send(saymessage);
        } else {
            message.reply('hey!... you cant use that command!...')
        }
 
    }
} 