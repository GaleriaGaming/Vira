const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const mongoose = require('mongoose')

module.exports = {
  name: "ping",
  alias: ["ms"],

async execute (client, message, args){
  
  message.channel.send("PONG!")

  message.channel.send(new Discord.MessageEmbed()
    .setTitle("Ping:")
    .setDescription(`\`\`\`PONG!\`\`\`\n\`\`\`Ping de Comandos: ${client.ws.ping}\`\`\``)
  )
 
 }

}