const Discord = require("discord.js");
const Levels = require('discord-xp');

module.exports = {
  name: "leaderboard",
  alias: ["lb"],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

    const target = await Levels.fetchLeaderboard(message.guild.id, 10);
    if(!target) return message.channel.send("❌ **• Nadie en este servidor tiene XP**")

    const map = target.map(m => `**Usuario: <@${m.userID}> - Nivel: ${m.level} - XP: ${m.xp}/${Levels.xpFor(m.level + 1)}**`)
    
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`LeaderBoard de XP del servidor ${message.guild.name}`)
    .setDescription(map.join())
    .setThumbnail(message.guild.iconURL())
    .setColor('RANDOM')
    )
 
 }

}