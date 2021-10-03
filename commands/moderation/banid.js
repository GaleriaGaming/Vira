const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "banid",
  alias: ["hackban"],

execute (client, message, args){

    var perms = message.member.hasPermission("BAN_MEMBERS")
    if(!perms) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

    if(!message.guild.me.hasPermission) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

    const id = args.join(' ')
    if(!id) return message.channel.send(":x: **• Debes de escribir una ID!**")

    const member = client.users.fetch(id)
    message.guild.members.ban(id)

    message.channel.send(`**:white_check_mark: • La ID ${id} ha sido baneada!**`)
 
 }

}