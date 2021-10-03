const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const zeew = require("zeew-eco")
const Economia = new zeew.Economia()
const Banco = new zeew.Banco()
require('dotenv').config
new zeew.Options('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data')

module.exports = {
  name: "bal",
  alias: ["dinero", "balance"],

async execute (client, message, args){

    const user = message.mentions.channels.first() || message.author;
    
    const dinero = await Economia.ver(user.id, message.guild.id)

    const banco = await Banco.ver(user.id, message.guild.id)
    if(!dinero && !banco){
      message.channel.send("❌ **• Ese usuario no tiene dinero**");
     };

    const embed = new Discord.MessageEmbed()

    .setTitle(`Dinero de ${user.username}`)
    .setDescription(`Dinero: **${dinero}**\n\nDinero en el banco: **${banco}**\n\nDinero en total: **${dinero + banco}**`)
    .setColor("RANDOM")

    message.channel.send(embed);
  }
 }