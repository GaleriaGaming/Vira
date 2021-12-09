const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const distube = require("distube")

module.exports = {
  name: "queue",
  alias: [],

execute (client, message, args){

  const queue = client.distube.getQueue(message)
  if(!queue) return message.channel.send("**No hay canciones reproduciendose**")

  const embed = new Discord.MessageEmbed()

  .setTitle("Cola de Canciones")
  .setDescription(`\n` + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))

  message.channel.send(embed)
 
 }

}