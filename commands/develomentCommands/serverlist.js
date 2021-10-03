const Discord = require("discord.js");

module.exports = {
  name: "serverlist",
  alias: [],

  /**
  * @param {Discord.Client} client
  * @param {Discord.Message} message
  * @param {string[]} args
  **/

async execute (client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle('Servidores en los que estoy')
    .setDescription("```"+client.guilds.cache.map(r => r.name).join("\n\n")+"```")
    message.channel.send(embed)
 
 }

}