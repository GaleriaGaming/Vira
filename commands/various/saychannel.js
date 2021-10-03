const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "send",
  alias: [],

execute (client, message, args){

    var perms = message.member.hasPermission("BAN_MEMBERS")
    if(!perms) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

    let canal = message.mentions.channels.first()
    if(!canal) return message.channel.send("**:x: • Necesitas mencionar a un canal!**")

    let texto = args.slice(1).join(" ")
    if(!texto) return message.channel.send("**:x: • Tienes que escribir un texto!**")

    canal.send(texto)
 
 }

}