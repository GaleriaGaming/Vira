const Discord = require('discord.js');
const { prefix, version, name } = require("../config.json")
const { MessageEmbed } = require("discord.js")

const afk = require('../Schemas/afk.js')

module.exports = async (client, message) => {

console.log(`${message.author.username}: `, `${message.content}`);

/////////////////////////////////ANTI LINKS/////////////////////////////////

/////////////////////////////////ANTI INVITACIONES/////////////////////////////////

/////////////////////////////////PING/////////////////////////////////
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
    const embed = new Discord.MessageEmbed()
    .setDescription(`Hola, soy ${name}, un bot creado por <@684580316886859791>, fui diseñado para mejorar la experiencia del server de <@557535696919986176>\nActualmente estoy en mi version ${version} pero mi creador <@684580316886859791> siempre va a trabajar en mi desarrollo\n\nSi quieres ayudar a mi desarrollo con ideas puedes usar el comando -sugerencia`)
    .setFooter(`Si quieres ayudar directamente en mi desarrollo puedes pinguear a Galeria Gaming#0309 o enviarle un mensaje directo\nSi vas a mandar un mensaje directo solo para molestar vas a ser warneado o baneado de este servidor dependiendo del mensaje`)
    message.channel.send(embed)
    return;
  }
  /////////////////////////////////MD/////////////////////////////////
    if(message.channel.type === "dm"){
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
    .setDescription(`Hola, soy ${name}, un bot creado por <@684580316886859791>, fui diseñado para mejorar la experiencia del server de <@557535696919986176>\nActualmente estoy en mi version ${version} pero mi creador <@684580316886859791> siempre va a trabajar en mi desarrollo\n\nSi quieres ayudar a mi desarrollo con ideas puedes usar el comando -sugerencia`)
    .setFooter(`Si quieres ayudar directamente en mi desarrollo puedes pinguear a Galeria Gaming#0309 o enviarle un mensaje directo\nSi vas a mandar un mensaje directo solo para molestar vas a ser warneado o baneado de este servidor dependiendo del mensaje`)
    message.channel.send(embed)
    return;
  }
  /////////////////////////////////PING A GALERIA GAMING/////////////////////////////////
  if(message.content.match(new RegExp(`^<@!?684580316886859791>( |)$`))){
    if(message.member.roles.cache.has("865470153587687445")){
      return;
    }
    message.delete()
    message.channel.send(`-warn ${message.member} regla #6`)
  }
/////////////////////////////////AFK/////////////////////////////////
  const newAfk = await afk.findOne({ guild: message.guild.id, user: message.author.id })
    if(newAfk){
    await afk.findOneAndDelete({ guild: message.guild.id, user: message.author.id })
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Bienvenido de vuelta tu estado de AFK ha sido removido ya no avisare cuando te pingueen`)
    .setColor("RANDOM")
    )
  }

  if(message.mentions.members.first()) {
    const newAfk1 = await afk.findOne({ guild: message.guild.id, user: message.mentions.members.first()})
    if(newAfk1) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`${message.mentions.members.first().user.username} esta AFK en este momento porfavor no lo menciones`)
      .setColor("RANDOM")

      )
    }else return;
  }else;

  if (!message.content.startsWith(prefix)) return;

}