const Discord = require("discord.js");

module.exports = {
  name: "delete",
  alias: ["endgiveaway"],

execute (client, message, args){

  var perms  = message.member.hasPermission("MANAGE_EMOJIS")
  if(!perms) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

  let messageID = args[0]
  if(!messageID) return message.channel.send("❌ **• Tienes que decirme la ID de un sorteo**")

  client.giveawaysManager.delete(messageID).then(() => {
    message.channel.send(`✅ **• EL sorteo con la ID ${messageID} ha sido borrado**`)
  }).catch((err) => {
    message.channel.send(`❌ ** • No se ha encontrado un sorteo con la ID ${messageID}, prueba de nuevo**`)
  })
 
 }

}