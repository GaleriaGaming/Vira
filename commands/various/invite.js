const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setTitle("Informacion")
  .setDescription('Clickea [aqui](https://discord.gg/MS6gjGrJzH ) para unirte al servidor de mi creador y [aqui](https://discord.com/api/oauth2/authorize?client_id=850552883535151134&permissions=8&scope=bot ) para invitarme')
  .setColor("RANDOM")
  message.channel.send(embed)
 
 }

}