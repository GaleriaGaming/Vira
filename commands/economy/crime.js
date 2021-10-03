const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const zeew = require("zeew-eco")
const Economia = new zeew.Economia()
const Banco = new zeew.Banco()
require('dotenv').config
new zeew.Options('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data')

let cooldown = new Set();

module.exports = {
  name: "crime",
  alias: ["crimen"],

execute (client, message, args){

    if(cooldown.has(message.author.id)){
      message.channel.send(`${message.author}, espera 1 hora para volver a usar ese comando`)
      return;
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, 3600000);

    const user = message.author

    const crimenes = ['ha robado un banco', 'ha robado una joyeria', 'ha infectado con un virus ha disney y encripto sus datos y pidio rescate por ellos', 'ha robado la casa de Notch']

    const crimenesmalos = ['ha infectado con un virus ha disney y encripto sus datos y pidio rescate por ellos pero disney lo denuncio', 'ha imtentado robar un banco', 'ha intentado robar una joyeria', 'ha intentado robar la casa de Notch']
    
    let resultadosbuenos = crimenes[Math.floor(Math.random() * crimenes.length)]

    let resultadosmalos = crimenesmalos[Math.floor(Math.random() * crimenesmalos.length)]

    let resultados = [resultadosbuenos, resultadosmalos]

    let resultadofinal = resultados[Math.floor(Math.random() * resultados.length)]

    let dinerobueno = Math.floor(Math.random() * 300) + 100

    let dineromalo = Math.floor(Math.random() * -175) + - 100

    if(resultadofinal === resultadosbuenos){

        Economia.agregar(user.id, message.guild.id, dinerobueno)

        const embed = new Discord.MessageEmbed()

        .setTitle("Crimen")
        .setDescription(`${user} ${resultadosbuenos} y ha ganado ${dinerobueno}`)
        .setColor("green")

        message.channel.send(embed)

    }

    if(resultadofinal === resultadosmalos){

      Economia.agregar(user.id, message.guild.id, dineromalo)

    const bembed = new Discord.MessageEmbed()

    .setTitle("Crimen")
    .setDescription(`${user} ${resultadosmalos} y ha perdido ${dineromalo}`)
    .setColor("red")

    message.channel.send(bembed)
    }
 }

}