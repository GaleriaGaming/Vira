const Discord = require("discord.js");
const Schema = require('../../Schemas/token-grappers')

module.exports = {
  name: "tokengrappers",
  alias: [],

  /**
  * @param {Discord.Client} client
  * @param {Discord.Message} message
  * @param {string[]} args
  **/

async execute (client, message, args){

    var perms = message.member.hasPermission("ADMINISTRATOR");
    if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**");

    const razon = args.slice(0);
    if(!razon) return message.channel.send("❌ **• Debes decir que quieres hacer ( activar / desactivar )**");

    if(razon === 'activar'){
        Schema.findOne({ guild: message.guild.id}, async(err, data) => {
            if(data) data.delete();
            new Schema({
              guild: message.guild.id,
              activate: 'true'
            }).save();
            message.channel.send(`✅ **• Se ha activado el sistema de anti token-grappers**`)
        })

    }
    
    if(razon === 'desactivar'){
        Schema.findOne({ guild: message.guild.id}, async(err, data) => {
            if(data) data.delete();
            new Schema({
              guild: message.guild.id,
              activate: 'false'
            }).save();
            message.channel.send(`✅ **• Se ha desactivado el sistema de anti token-grappers**`)
        })
    }   
 
 }

}