const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const distube = require("distube")

module.exports = {
  name: "loop",
  alias: ["repeat"],

execute (client, message, args){

  const queue = client.distube.get(queue)

  if(!message.member.voice.channel) return message.channel.send("**Debes de entrar en un canal de voz**")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("**Tienes que estar en el mismo canal de voz que yo**")

  if(!queue) return message.channel.send("**No hay canciones reproduciendose**")

  const opcion = args[0]
  if(!opcion) message.chanenl.send("**Debes escribir una opcion (0 / 1 / 2)**")
  if(!isNaN) return message.channel.send("**Debes decir un numero**")

  if(opcion === '0'){
    client.distube.setRepeatMode(message, 0)
    message.channel.send("**La modo loop ha sido desactivado**")
  }

  if(opcion === '1'){
    client.distube.setRepeatMode(message, 1)
    message.channel.send("**Se ha activado la repeticion de la cancion actual**")
  }

  if(opcion === '2'){
    client.distube.setRepeatMode(message, 2)
    message.channel.send("**Se ha activado la repeticion de toda la cola**")
  }

 }

}