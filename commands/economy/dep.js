const { ECHILD } = require("constants");
const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const zeew = require("zeew-eco")
const Economia = new zeew.Economia()
const Banco = new zeew.Banco()
require('dotenv').config
new zeew.Options('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data')


module.exports = {
  name: "dep",
  alias: [],

async execute (client, message, args){

    const user = message.author;

    const cosa = args[0]
    if(!cantidad) return message.channel.send(":x: • Necesitas poner una cantidad!")
    if(isNaN(cantidad)) return message.channel.send("❌ **• Solo puedes decir un numero**")
    const cantidad = Math.floor(cosa)

    if(cantidad === 'all'){
        const dinerototal = await Economia.ver(user.id, message.guild.id)

        Economia.remover(user.id, message.guild.id, dinerototal)
        Banco.agregar(user.id, message.guild.id, dinerototal)

        return message.channel.send(`:white_check_mark: **• Has guardado ${dinerototal}$ en el banco!**`);
    }

    const dinerot = await Economia.ver(user.id, message.guild.id)

    if(cantidad > dinerot) return message.channel.send(":x: **• No tienes suciente dinero para hacer eso!**")

    Economia.remover(user.id, message.guild.id, cantidad)
    Banco.agregar(user.id, message.guild.id, cantidad)

    message.channel.send(`:white_check_mark: **• Has guardado ${cantidad}$ en el banco!**`)
 
 }

}