const Discord = module.require("discord.js");

module.exports = {
  name: "unlock",
  category: "moderation",
  description: "unlocks a Channel",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
      return message.channel.send("You don't have enough Permissions");
    }
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        acess: ["SEND_MESSAGES"]
      }
    ]);
    const embed = new Discord.MessageEmbed()
      .setTitle("Channel Updates")
      .setDescription(`:unlock:  ${message.channel} has been unlocked`)
      .setColor("RANDOM");
    await message.channel.send(embed);
    message.delete();
  }
};
