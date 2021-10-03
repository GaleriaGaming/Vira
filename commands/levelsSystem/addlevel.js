const Discord = require("discord.js");
const Levels = require('discord-xp');

module.exports = {
  name: "addlevel",
  alias: [],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

  const user = message.mentions.members.first()
  if(!user){
    const cantidad = args[0]
    if(!cantidad) return message.channel.send("❌ **• Puedes decir cuantos niveles te quieres añadir o mencionar al que se los quieres añadir**");
    Levels.appendLevel(message.author.id, message.guild.id, cantidad);
    message.channel.send(`✅ **• Se le han añadido ${cantidad} niveles al usuario <@${message.author.id}>**`);
    return;
  } else {
    const cantidad = args[1]
    if(!cantidad) return message.channel.send(`❌ **• Debes decir cuatos niveles le quieres añadir a ${user}**`);
    Levels.appendLevel(user.id, message.guild.id, cantidad);
    message.channel.send(`✅ **• Se le han añadido ${cantidad} niveles al usuario <@${user.id}>**`);
    return;
  }
 
 }

}