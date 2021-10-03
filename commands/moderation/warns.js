const Discord = require("discord.js");
const Schema = require('../../Schemas/warn');

module.exports = {
  name: "warns",
  alias: [],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

  const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  try {
    const results = await Schema.findOne({ guild: message.guild.id, user: mention.id })
    if(!results) return message.channel.send("❌ **• Ese usuario nunca ha tenido algun warn**");
    if(!results.warnings[0]) return message.channel.send("❌ **• Ese usuario no tiene ningun warn**");
    message.channel.send(new Discord.MessageEmbed()
      .setTitle(`Warns de <@${mention.id}>`)
      .setDescription(results.warnings.map((w, i) => `\n**#${i+1} - ${w.reason}**`).toString())
      .setColor("RANDON")
      .setFooter(`Warn: ${results.warnings.length}`)
    );
  } catch(err) {
    console.log(err)
  }
 
 }

}