const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "unlock",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission('MANAGE_CHANNELS');
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

  message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true })

  message.channel.send(new MessageEmbed()
  .setTitle('Todo ha salido bien')
  .setDescription('✅ Canal desbloqueado')
  .setColor('RANDOM')
  )
 
 }

}