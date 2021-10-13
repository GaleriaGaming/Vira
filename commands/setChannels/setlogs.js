const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const mongoose = require('mongoose')
const Schema = require('../../Schemas/setlogs.js')

module.exports = {
  name: "setlogs",
  alias: [],

async execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

  const canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("❌ **• Debes mencionar un canal**")

  let canalservidor = message.guild.channels.resolve(canal.id)
  if(!canalservidor) return message.channel.send("❌ **• Debes de poner un canal de este servidor**")
  
  Schema.findOne({ guild: message.guild.id}, async(err, data) => {
    if(data) data.delete();
    new Schema({
      guild: message.guild.id,
      channel: canal.id
    }).save();
    message.channel.send(`✅ **• Se ha establecido el canal <#${canal.id}> como canal de logs**`)
  })
 
 }

}