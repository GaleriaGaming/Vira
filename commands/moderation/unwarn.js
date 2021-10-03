const Discord = require("discord.js");
const Schema = require('../../Schemas/warn');

module.exports = {
  name: "unwarn",
  alias: [],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

  const mention = message.mentions.members.first();
  if(!mention) return message.channel.send("❌ **• Debes mencionar a alguien!**");
  Schema.findOne({ guild: message.guild.id, user: mention.user.id }, (err, results) => {
    if(err) throw err;
    if(results){
      if(isNaN(args[1])) return message.channel.send("❌ **• Debes decir un numero**");
      if(!args[1]) return message.channel.send("❌ **• Debes decir un numero**");
      let number = parseInt(args[1]) -1;
      results.warnings.splice(number, 1);
      results.save();
      message.channel.send("❌ **• Advertencia removida correctamente**");
    } else {
      message.channel.send("❌ **• Ese usuario no tiene warns en este servidor**")
    }
  });
 
 }

}