const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "forcelock",
  alias: ["fc"],

execute (client, message, args){
    
    if(message.guild.id !== '861019874105098320') return message.channel.send("❌ **• Este comando solo puede ser usado en el servidor de mi creador**")
    if(message.author.id !== message.guild.owner.id || '684580316886859791') return message.channel.send("❌ **• Este comando solo puede ser usado por los owners del servidor**")
    message.guild.channels.cache.forEach(channel => channel.updateOverwrite(
      message.channel.guild.roles.everyone, {
        SEND_MESSAGES: false
      }
    ));
      client.channels.cache.get('861048845684834334').send('Se han cerrado todos los canales')
 }

}