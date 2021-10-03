const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "uptime",
  alias: [],

execute (client, message, args){

let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;

const embed = new Discord.MessageEmbed()
  
  .setThumbnail(" ")
  .setColor("RANDOM")
  .setDescription(`**Tiempo encendido:\n\n${days} ${hours} ${minutes} ${seconds}**`)

message.channel.send(embed)
 
 }

}