const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms = require("ms")


module.exports = {
  name: "giveaway",
  alias: ["sorteo"],

execute (client, message, args){

  var perms  = message.member.hasPermission("MANAGE_EMOJIS")
  if(!perms) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

  let channel = client.channels.cache.get("862505885141958656")

  let giveawayDuration = args[0]
  if(!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send("❌ **• Especifique una duracion valida   D = dias, H = Horas, M = Minutos, S = Segundos o 1000 = 1 Segundo**")
  if(!args[1]) return message.channel.send("❌ **• Debes decir cuantas personas pueden ganar**")
  
  let giveawayPrice = args.slice(2).join(" ")
  if(!giveawayPrice) return message.channel.send("❌ **• Debes de decir que vas a sortear**")

  client.giveawaysManager.start(channel, {
    time: ms(giveawayDuration),
    prize: giveawayPrice,
    winnerCount: parseInt(args[1]),
    hostBy: client.config.hostedBy ? message.author: null,

    messages: {
      giveaway: (client.config.everyoneMention ? "Hola\n\n" : "") + "**NUEVO SORTEO**",
      giveawayEnded: (client.config.everyoneMention ? "Feos XD\n\n" : "") + "**SORTEO FINALIZADO**",
      timeRemaining: '**Tiempo restante {duration}**',
      inviteToParticipate: 'Reacciona en 🎉 para participar en el sorteo',
      winMessage: '**Enhorabuena {winners} han ganado {prize}**',
      embedFooter: "Acaba",
      noWinner: "Nadie participo en el sorteo",
      hostedBy: "**Creado por {user}**",
      winners: "ganadores",
      enbedAt: 'acaba en ',
      units: {
        seconds: 'segundos',
        minutes: 'minutos',
        hours: 'horas',
        days: 'dias',
        plural5: false
      }
    }
  })

  message.channel.send(`✅ **• Se ha empezado el sorteo en ${channel}**`)
 
 }

}