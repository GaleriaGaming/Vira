const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  alias: ["kickear"],

execute (client, message, args) {
 
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: **• No tengo suficientes permisos!**")

  let buser = message.mentions.members.first();

  let kickReason = args.join(' ').slice(22);

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

  if(!buser) return message.channel.send(":x: ** • Debes mencionar a alguien!**")

  if (buser === message.author) return message.channel.send(":x: **• No te puedes kickear a ti mismo!**")

  if (!kickReason) return message.channel.send (':x: **• Menciona una razón**')

  if (buser.id === client.user.id) return message.channel.send(':(')
  if (message.member.roles.highest.comparePositionTo(buser.roles.highest) <= 0) return message.channel.send("❌ **• No puedes banear a alguien con un rol superior o igual al tuyo**")

  message.guild.member(buser).kick(kickReason);

  const bembe = new Discord.MessageEmbed()
  .setThumbnail(buser.avatarURL)
  .setColor("RANDOM")
  .addField("Usuario kickeado", buser.user)
  .addField("ID", buser.id)
  .addField("Motivo", kickReason)
  .addField("Moderador", message.author.username)
  buser.send(bembe)
  message.channel.send(bembe)
 
 }

}