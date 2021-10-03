const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  alias: [],

execute (client, message, args){

    let texto = args.join(' ')
    if(!texto) return message.channel.send("**:x: • Tienes que escribir un texto!**")

    message.delete()

    message.channel.send(texto)
 
 }

}