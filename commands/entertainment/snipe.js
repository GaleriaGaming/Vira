const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "snipe",
  alias: [],

execute (client, message, args){

  const channel = message.mentions.channels.first() || message.channel;

  const msg = client.snipes.get(channel.id)
  if(!msg){
    message.channel.send("No se ha borrado un mensaje recientemente")
  } else {
    const embed = new Discord.MessageEmbed()

    .setTitle("Snipe")
    .setAuthor(`Mensaje escrito por ${msg.delete.tag}`, msg.delete.displayAvatarURL())
    .addField("Canal", `<#${msg.canal.id}>`)
    .setDescription(msg.content)
    .setColor("RANDOM")

    message.channel.send(embed)

  }
 
 }

}