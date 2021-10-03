const Discord = require("discord.js");
const Schema = require('../../Schemas/reaction-roles')

module.exports = {
  name: "reactionrole",
  alias: ["autorol", "autorole"],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

    var perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**");
    const role = message.mentions.roles.first();

    const messageid = args.slice(1).join(' ')

    let [, emoji] = args;
    if(!emoji) return message.channel.send("❌ **• Especifica un emoji**");

    const parsedEmoji = Discord.Util.parseEmoji(emoji);

    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(data){
            data.Roles[parsedEmoji.name] = [
                role.id,
                {
                    id: parsedEmoji.id,
                    raw: emoji
                }
            ]

            await Schema.findOneAndUpdate({ Guild: message.guild.id }, data);

        } else {
            new Schema({
                Guild: message.guild.id,
                Message: 0,
                Roles: {
                    [parsedEmoji.name]: [
                        role.id, 
                        {
                            id: parsedEmoji.id,
                            raw: emoji
                        }
                    ]
                }
            }).save();
        }
        message.channel.send("✅ **• Nuevo __Reaccionar Por Rol__ añadido**")
    })
 
 }

}