const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const Schema = require('../../Schemas/canalsugerencias.js')

module.exports = {
  name: "canalsugerencias",
  alias: ["cs"],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

  const canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("❌ **• Debes mencionar un canal**")
  if(canal.type === 'voice') return message.channel.send("❌ **• No puedes elegir un canal de voz**")

  Schema.findOne({ guild: message.guild.id}, async(err, data) => {
    if(data) data.delete();
    new Schema({
      guild: message.guild.id,
      channel: canal.id
    }).save();
    message.channel.send(`✅ **• Se ha establecido el canal ${canal} como canal para mandar sugerencias**`)
  })
 
 }

}