const Discord = require("discord.js");
const ms = require('ms')

module.exports = {
  name: "reroll",
  alias: [],

execute (client, message, args){

  var perms  = message.member.hasPermission("MANAGE_EMOJIS")
  if(!perms) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

  if(!args[0]) return message.channel.send("❌ **• Eso no es una ID valida**")

  let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0])
  if(!giveaway) return message.channel.send("❌ **• No se ha podido encontrar ese sorteo**")

  client.giveawaysManager.reroll(args[0], {
    messages: {
      congrat: 'El nuevo ganador es {winners}',
      error: 'No participo nadie mas en este sorteo'
    }
  }).catch((err) => {
    message.channel.send(`❌ ** • No se ha encontrado un sorteo con la ID ${messageID}, prueba de nuevo**`)
  })
 
 }

}