const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const distube = require("distube")

module.exports = {
  name: "pause",
  alias: [],

execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("**Debes de entrar en un canal de voz**")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("**Tienes que estar en el mismo canal de voz que yo**")

  if(!serverQueue) return message.channel.send("**No hay canciones reproduciendose**")

  if(serverQueue.pause) return message.channel.send("**La musica no estaba pausada**")

  client.distube.pause(message)

  message.channel.send("**La cancion fue pausada**")
  
 }

}