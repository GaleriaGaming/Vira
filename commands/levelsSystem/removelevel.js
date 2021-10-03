const Discord = require("discord.js");
const Levels = require('discord-xp');

module.exports = {
  name: "removelevel",
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
    if(!cantidad) return message.channel.send("❌ **• Puedes decir cuantos niveles te quieres remover o mencionar al que se los quieres remover**");
    Levels.subtractLevel(message.author.id, message.guild.id, cantidad);
    message.channel.send(`✅ **• Se le han removido ${cantidad} niveles al usuario <@${message.author.id}>**`);
    return;
  } else {
    const cantidad = args[1]
    if(!cantidad) return message.channel.send(`❌ **• Debes decir cuatos niveles le quieres remover a ${user}**`);
    Levels.subtractLevel(user.id, message.guild.id, cantidad);
    message.channel.send(`✅ **• Se le han removido ${cantidad} niveles al usuario <@${user.id}>**`);
    return;
  }
 
 }

}