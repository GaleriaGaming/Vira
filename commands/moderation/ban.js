const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  alias: ["banear"],

execute (client, message, args) {
 
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: **• Necestio el permiso || Ban Members ||**")

  let user = message.mentions.members.first();

  let banReason = args.join(' ').slice(22);

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

  if(!user) return message.channel.send(":x: **• Debes mencionar a alguien!**")

  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send(":x: **• No puedes banear a alguien con un rol igual o superior a ti!**")

  if (user === message.author) return message.channel.send(":x: **• No te puedes banear a ti mismo!**")

  if (!banReason) return message.channel.send (':x: **• Menciona una razón**')

  user.ban({ reason: `${message.author.username} | ${banReason}`})

  const bembed = new Discord.MessageEmbed()
  .setThumbnail(user.avatarURL)
  .setColor("RANDOM")
  .addField("Usuario baneado", user.user.username)
  .addField("ID", user.id)
  .addField("Motivo", banReason)
  .addField("Moderador", message.author.username)
  message.channel.send(bembed)
 
 }

}