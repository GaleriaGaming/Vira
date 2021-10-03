const Discord = require("discord.js");
const Schema = require('../../Schemas/muterol')

module.exports = {
  name: "unmute",
  alias: [],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

  let user = message.mentions.members.first()
  if(!user) return message.channel.send("❌ **• Debes mencionar a alguien!**")

  const muteid = await Schema.find({ guild: message.guild.id });
  const rol = muteid.map(m => m.role)

  if(!user.roles.cache.has(rol)){
    return message.channel.send("❌ **• Ese usuario no esta muteado**")
  }

  user.roles.remove(rol)

  message.channel.send(`✅ **• <@${user.id}> ha sido desmuteado**`).catch(error => {
  message.channel.send(`❌ **• Hubo un error al desmutear a <@${user.id}> ||${error}|||**`)
  })

 }

}