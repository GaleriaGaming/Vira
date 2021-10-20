const Discord = require("discord.js");
const fetch = require('node-fetch')

module.exports = {
  name: "verify",
  alias: ["verificar"],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR");
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**");

  const user = message.mentions.members.first();
  if(!user) return message.channel.send("❌ **• Debes mencionar a alguien!**");

  user.roles.add('891503221762297857');


    
 }

}