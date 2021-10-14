const { channel } = require("diagnostic-channel");
const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const zeew = require("zeew-eco")
require('dotenv').config
new zeew.Options('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data')


let cooldown = new Set();

module.exports = {
  name: "work",
  alias: ["w"],

async execute (client, message, args){

    if(cooldown.has(message.author.id)){
      message.channel.send(`${message.author}, espera 1 minuto para volver a usar ese comando`)
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, 60000);
    
    const economia = new zeew.Economia()

    const user = message.author;

    let random = Math.floor(Math.random() *175) + 100

    let trabajo = ["policia", "profesor", "bombero", "youtuber", "streamer", "developer", "programador"]
    let randomtrabajo = trabajo[Math.floor(Math.random() *trabajo.length)]
    
    const work = economia.trabajar(user.id, message.guild.id, random)

    const embed = new Discord.MessageEmbed()

    .setTitle("Trabajo")
    .setDescription(`**El usuario ${user} ha trabajado de ${randomtrabajo} y ganó ${random}$**`)

    message.channel.send(embed)
 
 }

}