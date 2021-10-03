const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "edit",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

  let messageID = args[0]
  if(!messageID) return message.channel.send("❌ **• Tienes que decirme la ID de un sorteo**")

  let nuevosganadores = args[1]
  if(!nuevosganadores) return message.channel.send("❌ **• Debes decirme cuandos ganadores quieres ahora**")

  let nuevopremio = args.slice(2).join(" ")
  if(!nuevopremio) return message.channel.send("❌ **• Debes de decir que vas a sortear ahora**")

  client.giveawaysManager.edit(messageID, {
    newWinnerCount: nuevosganadores,
    newPrize: nuevopremio
  }).then(() => {
    const numberofseconds = client.giveawaysManager.options.updateCountEvery / 1000;

    message.channel.send(`El sorteo se editara en ${numberofseconds} segundos `)
  }).catch((err) => {
    message.channel.send(`❌ ** • No se ha encontrado un sorteo con la ID ${messageID}, prueba de nuevo**`)
  })
 
 }

}