const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const zeew = require("zeew-eco")
const Economia = new zeew.Economia()
require('dotenv').config
new zeew.Options('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data')


let cooldown = new Set();

module.exports = {
  name: "rob",
  alias: ["robar"],

async execute (client, message, args){

    if(cooldown.has(message.author.id)){
      message.channel.send(`${message.author}, espera 24 horas para volver a usar ese comando`)
      return;
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, 86400000);

    const user =  message.author
    const persona = message.mentions.users.first()

    if(!persona) return message.channel.send(":x: **• Debes mencionar a alguien!**")

    let dineropersona = await Economia.ver(persona.id, message.guild.id)
    let dinerouser = await Economia.ver(user.id, message.guild.id)
    
    let dineroaleatorio = Math.floor(Math.random() * dineropersona) + 50

    if(persona.id === message.author.id) return message.channel.send(":x: **• No te puedes robar a ti mismo**")
    if(!isNaN(args[0])) return message.channel.send(":x: **• Eso no es un usuario valido**")

    if(!dineropersona) return message.channel.send(":x: **• Esa persona no tiene dinero**");

    let posibilidades = ['bien', 'mal']
    let posibilidadFinal = posibilidades[Math.floor(Math.random() * posibilidades.length)]

    if(posibilidadFinal === 'bien'){
        Economia.remover(persona.id, message.guild.id, dineroaleatorio)

        Economia.agregar(user.id, message.guild.id, dineroaleatorio)

       message.channel.send(`**✅ • Has robado a <@${persona.tag}> y has ganado ${dineroaleatorio}$**`)
    }

    if(posibilidadFinal === 'mal'){
      Economia.remover(user.id, message.guild.id, dineroaleatorio)

        message.channel.send(`**✅ • Has intentado robar a <@${persona.id}> y has perdido ${dineroaleatorio}$**`)
    }
 
 }

}
