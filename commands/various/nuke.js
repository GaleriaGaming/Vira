const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "nuke",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR");
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

  let link = 'https://tenor.com/view/touhou-fumo-reimu-fast-gif-18340825'

  var posicion = message.channel.position

  message.channel.clone().then((canal) => {

    message.channel.delete()

    canal.setPosition(posicion)

    canal.send(`**✅   El canal ${message.channel.name} ha sido reseteado correctamente**\n\n\n${link}`)
  })
 
 }

}