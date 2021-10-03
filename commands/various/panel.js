const Discord = require("discord.js");
const Schema = require('../../Schemas/reaction-roles')

module.exports = {
  name: "panel",
  alias: [],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

    var perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**");
    
    const channel = message.mentions.channels.first() || message.channel;

    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(!data) return message.channel.send("❌ **• No hay ningun \`Reaccion Por Rol\` en este servidor**")
        const mapped = Object.keys(data.Roles)
        .map((value, index) => {
            const role = message.guild.roles.cache.get(data.Roles[value][0]);
            return `${role} • ${data.Roles[value][1].raw}`
        }).join("\n\n");

        channel.send(new Discord.MessageEmbed()
        .setDescription(mapped)
        ).then((msg) => {
            data.Message = msg.id;
            data.save();

            const reactions = Object.values(data.Roles).map((val) => val[1].raw);
            reactions.map((emoji) => msg.react(emoji));
        });
    });
 
 }

}