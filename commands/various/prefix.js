const Discord = require("discord.js");
const Schema = require('../../Schemas/setprefix')

module.exports = {
  name: "setprefix",
  alias: [],

  /**
  * @param {Discord.Client} client
  * @param {Discord.Message} message
  * @param {string[]} args
  **/

async execute (client, message, args){

    var perms = message.member.hasPermission('ADMINISTRATOR')
    if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

    const prefix = args[0]

    Schema.findOne({ guild: message.guild.id }, async(err, data) => {
        if(data) data.delete();
        new Schema({
            guild: message.guild.id,
            prefix
        }).save();
        message.channel.send(`✅ **• Se ha establesido el prefix ${prefix}**`)
    })
 
 }

}