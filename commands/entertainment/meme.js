const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const random = require('chistes-aleatorios')
const spanishmemes = require('spanish.memes');
const meme = spanishmemes.Meme();

module.exports = {
  name: "meme",
  alias: [],

async execute (client, message, args){

  if(!args[0]) return message.channel.send("❌ **• Debes de elegir si quieren un meme en texto o imagen**")

  if(args[0] === 'texto'){

    const chiste = await random.chistes();

    message.channel.send(new Discord.MessageEmbed()
      .setTitle('jajaja')
      .setDescription(chiste)
    )
  }

  if(args[0] === 'imagen')

    message.channel.send(new Discord.MessageEmbed()
      .setTitle('jajaja')
      .setImage(spanishmemes.Meme())
    )
 
 }

}