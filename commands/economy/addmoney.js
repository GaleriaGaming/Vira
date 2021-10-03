const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const zeew = require("zeew-eco")
const Economia = new zeew.Economia()
const Banco = new zeew.Banco()
require('dotenv').config
new zeew.Options('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data')

module.exports = {
  name: "addmoney",
  alias: [],

execute (client, message, args){

    if(!message.member.hasPermission("ADMIN")) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

    const user = message.mentions.users.first()
    if(!user) return message.channel.send(":x: **• Debes mencionar a alguien!**")

    const dinerocantidad = args.slice(1).join(" ")
    if(!dinerocantidad) return message.channel.send(":x: • Necesitas poner una cantidad!")

    Economia.agregar(user.id, message.guild.id, dinerocantidad)

    message.channel.send(`**:white_check_mark: • El usuario ${user} ha recibido ${dinerocantidad}$**`)
 
 }

}