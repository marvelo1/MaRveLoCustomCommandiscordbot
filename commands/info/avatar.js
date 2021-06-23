const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  description: "avatar !",
  aliases: ["av", "avatar"],
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    if (!user) return;

    const embed = new Discord.MessageEmbed()
      .setTitle(`${user.username}'s Avatar!`)
      .setColor("#7289DA")
      .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }));
    message.channel.send(embed);
  }
};