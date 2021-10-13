const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const { callbackify } = require("util");
const zeew = require("zeew-eco")
const Economia = new zeew.Economia()
const Banco = new zeew.Banco()
require('dotenv').config
new zeew.Options('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data')


module.exports = {
  name: "with",
  alias: [],

async execute (client, message, args){

    const user = message.author;

    const cosa = args[0]
    if(!cantidad) return message.channel.send(":x: • Necesitas poner una cantidad!")
    if(isNaN(cantidad)) return message.channel.send("❌ **• Solo puedes decir un numero**")
    const cantidad = Math.floor(cosa)

    if(cantidad === 'all'){
        const dinerobancototal = await Banco.ver(user.id, message.guild.id)

        await Economia.agregar(user.id, message.guild.id, dinerobancototal);
        await Banco.remover(user.id, message.guild.id, dinerobancototal)

        return message.channel.send(`:white_check_mark: **• Has sacado ${dinerobancototal}$ del banco!**`);
    };

    const dinerobancot = await Banco.ver(user.id, message.guild.id)

    if(dinerobancot < cantidad){
        return message.channel.send(":x: **• No tienes suciente dinero para hacer eso!**")
    }

    Economia.agregar(user.id, message.guild.id, cantidad)
    Banco.remover(user.id, message.guild, cantidad)

    message.channel.send(`:white_check_mark: **• Has sacado ${cantidad}$ del banco**`)
 
 }

}