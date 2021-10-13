const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const Schema = require('../../Schemas/muterol')

module.exports = {
  name: "muterol",
  alias: [],

async execute (client, message, args){

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send("❌ **• Debes de mencionar un rol**")

  if (client.user.roles.highest.comparePositionTo(rol) <= 0) return message.channel.send("❌ **• No puedo usar un rol igual o superior al mio para mutear**");

  const server = Schema.findOne({ guild: message.guild.id })

  Schema.findOne({ guild: message.guild.id}, async(err, data) => {
    if(data) data.delete();
    new Schema({
      guild: message.guild.id,
      role: rol.id
    }).save();
    message.channel.send(`✅ **• Se ha establecido el rol ${rol} para mutear personas**`)
  })

  
 
 }

}