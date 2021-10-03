const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed, Util } = require("discord.js");
const {  } = require('twemoji-parser');

module.exports = {
  name: "jumbo",
  alias: ["emoji"],

execute (client, message, args){

  let emoji = args[0]
  if(!emoji) return message.channel.send("❌ **• Debes de poner un emoji**")

  let custom = Util.parseEmoji(emoji);

  const embed = new Discord.MessageEmbed()

  if(custom.id){
      let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`
      embed.setImage(link)

      return message.channel.send(embed)
  }
 
 }

}