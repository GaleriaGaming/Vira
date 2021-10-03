const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const moment = require('moment')

module.exports = {
  name: "serverinfo",
  alias: [],

execute (client, message, args){

  var server = message.guild

    const embed = new Discord.MessageEmbed()

    .setTitle("**Informacion del servidor**")
    .setThumbnail(message.guild.iconURL())
    .setAuthor(message.guild.name, message.guild.iconURL())
    .addField('**Owner del server**',`${server.owner.user}`, true)
    .addField('Region', server.id,true)
    .addField('**Roles**', message.guild.roles.cache.size, true)
    .addField('Canales de voz', `${server.channels.cache.filter(x => x.type === 'voice').size}`, true)
    .addField('Canales de texto', `${server.channels.cache.filter(x => x.type === 'text').size}`, true)
    .addField('Categorias', `${server.channels.cache.filter(x => x.type === 'category').size}`, true)
    .addField("Miembros Totales", server.memberCount, true)
    .addField("Bots", `${message.guild.members.cache.filter(m => m.user.bots).size}`. true)
    .addField("Boosts", message.guild.premiumSubscriptionCount.toString(),true)
    .addField('Nivel de verificación', message.guild.verificationLevel)
    .addField('ID', `${message.guild.id}`)
    .addField("Servidor creado", "3 de julio del 2021 a las 07:05 PM")
    message.channel.send(embed)
 
 }

}