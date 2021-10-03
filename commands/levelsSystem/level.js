const Discord = require("discord.js");
const Levels = require('discord-xp');

module.exports = {
  name: "level",
  alias: ["nivel"],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

  const user = message.mentions.members.first() || message.author;

  const target = await Levels.fetch(user.id, message.guild.id);
  if(!target) return message.channel.send("❌ **• Ese usuario no tiene XP**");

  message.channel.send(new Discord.MessageEmbed()
  .setTitle(`XP de ${user.username}`)
  .setThumbnail(user.displayAvatarURL({dynamic: true}))
  .setDescription(`**Nivel del usuario: ${target.level}\nXP del usuario: ${target.xp}/${Levels.xpFor(target.level + 1)}**`)
  .setColor('RANDOM')
  );
 
 }

}