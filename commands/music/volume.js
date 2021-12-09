const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const distube = require("distube")

module.exports = {
  name: "volume",
  alias: [],

execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("**Debes de entrar en un canal de voz**")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("**Tienes que estar en el mismo canal de voz que yo**")

  if(!serverQueue) return message.channel.send("**No hay canciones reproduciendose**")

  const volumen = args[0]
  if(!volumen) return message.channel.send("**Debes decir cuando volumen quieres**")
  if(!isNaN) return message.channel.send("**Debes decir un numero**")

  if(volumen < 1) return message.channel.send("**El volumen tiene que ser mayor que 0**")
  if(volumen > 100) return message.channel.send("**El volumen tiene que ser menor que 100**")

  client.distube.setVolume(message, volumen)

  message.channel.send(`**El volumen se ha establecido al ${volumen}%**`)
 
 }

}