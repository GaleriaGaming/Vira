const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const autor = require('../../Schemas/autor.js')
const sugerencia = require('../../Schemas/sugerencia.js');
const canalsugerencias = require('../../Schemas/canalsugerencias.js');

module.exports = {
  name: "sugerencia",
  alias: ["suggest"],

async execute (client, message, args){

  if(!args.join(" ")) return message.channel.send("❌ **• Debes escribir una sugerencia**")

  message.delete()

  const usuario = message.author;

  const embed = new Discord.MessageEmbed()

  .setTitle("Nueva sugerencia")
  .setDescription(args.join(" "))
  .setFooter("Reacciona para votar")
  .setTimestamp()
  .setColor("RANDOM")

  const data = await canalsugerencias.findOne({ guild: message.guild.id })
  if(!data) return message.channel.send("❌ **• Este servidor no tiene ningun canal para sugerencias**")

  const canal = data.channel

  client.channels.cache.get(canal).send(embed).then(msg => {

    msg.react("✅")
    msg.react("❌")
    autor.findOne({ message: msg.id}, async(err, data) => {
    if(data) data.delete();
    new autor({
      message: msg.id,
      user: usuario.id
    }).save();
  })
    sugerencia.findOne({ guild: message.guild.id}, async(err, data) => {
    if(data) data.delete();
    new sugerencia({
      message: msg.id,
      suggest: args.join(" ")
    }).save();
  })
  })
 
 }

}