const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  alias: [],

execute (client, message, args){

    let texto = args.join(' ')
    if(!texto) return message.channel.send("**:x: • Tienes que escribir un texto!**")
    const permisos = message.channel.permissionsFor(message.member);

    message.delete()

    message.channel.send(texto, {disableMentions: permisos.has("MENTION_EVERYONE") ? 'none': 'everyone'})
 
 }

}