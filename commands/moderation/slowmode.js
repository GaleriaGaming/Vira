const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms = require('ms')

module.exports = {
  name: "slowmode",
  alias: ["sm"],

execute (client, message, args){

  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

  let channel = message.channel

  let time = args[0]

  if(time === 'off'){
    channel.setRateLimitPerUser(0)

    return message.channel.send("**:white_check_mark: • El slowmode ha sido desactivado em este canal!**")
  }

  if(!time) return message.channel.send(':x: **• Especifique un tiempo** **D = dias, H = Horas, M = Minutos, S = Segundos o 1000 = 1 segundo**')
  if(time <= 0) return message.channel.send("❌ **• No puedes decir un numero negativo**")

  let convert = ms(time)
  let toSecond = Math.floor(convert / 1000)
  if(convert > 21600000) return message.channel.send("❌ **• No puedes poner un tiempo mayor a 6 horas**")

  if(!toSecond || toSecond == undefined) return message.channel.send("**:x: • Tienes que poner un tiempo valido!**")

    channel.setRateLimitPerUser(toSecond)
    message.channel.send(`**:white_check_mark: El slowmode ahora es de ${toSecond} segundos en este canal!**`)
 
 }

}