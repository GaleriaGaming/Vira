const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "reportbug",
  alias: [],

execute (client, message, args){

  message.delete()

  let canalbug = client.channels.cache.get("896433533462118450")
  let bugs = args.slice(0).join(" ")
  if(!bugs) return message.channel.send("❌ **• Debes de poner el bug**")

  const embed = new Discord.MessageEmbed()
  .setTitle(":exclamation: __Bug Encontrado__ | __Vira__ :exclamation:")
  .addField("__Bugs encontrado por__: ", `<@${message.member.id}>`)
  .addField("__Bug__: ", `${bugs}`)
  .setFooter(client.user.username, client.user.displayAvatarURL())
  .addField("__Servidor__: ", `Nombre del server: __${message.guild.name}__\nID del server: __${message.guild.id}__`)
  .setColor("RANDOM")
  canalbug.send(embed)
 
 }

}