const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "leave",
  alias: [],

execute (client, message, args){

 if(message.author.id !== '684580316886859791') return message.channel.send("❌ **• Solo mi creador puede usar eso**")

 const id = args[0]
 if(!id) return message.channel.send("❌ **• Debes de poner la ID del servidor**")

 const servidor = client.guilds.cache.get(id)

 servidor.leave()
 message.channel.send(`✅ **• He abandonado el servidor ${servidor.name}**`)
 
 }

}