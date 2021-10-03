const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const autor = require('../../Schemas/autor.js')
const sugerencia = require('../../Schemas/sugerencia.js');
const canalsugerencias = require('../../Schemas/canalsugerencias.js');

module.exports = {
  name: "votarsugerencia",
  alias: ["vs"],

async execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

  const accion = args[0]
  if(!accion) return message.channel.send("❌ **• Debes escribir una accion ( aceptar / rechazar )**")
  
  const mensaje = args[1] 
  if(!mensaje) return message.channel.send("❌ **• Debes escribir la id de la sugerencia**")
  
  const data = await canalsugerencias.findOne({ guild: message.guild.id })
  if(!data) return message.channel.send("❌ **• Este servidor no tiene ningun canal para sugerencias**")

  const canal = data.channel

  const sugerencias = await client.channels.cache.get(canal).messages.fetch(mensaje)
  if(!sugerencias) return message.channel.send("❌ **• No he encontrado la sugerencia**")

  const data1 = await autor.findOne({ message: mensaje })
  const persona = data1.user
  const usuario = client.users.resolve(persona)
  if(!usuario) return message.channel.send("❌ **• No he encontrado al autor de la sugerencia**")

  const data2 = await sugerencia.findOne({ message: mensaje})
  const contenido = data2.suggest

  if(accion.toLowerCase() === 'aceptar'){
    const embed = new Discord.MessageEmbed()

    .setTitle("Sugerencia aceptada")
    .setDescription(`**${contenido}\n\nAutor de la sugerencia ${usuario}**`)
    .setFooter(`Aprovada por ${message.author.tag}`)
    .setColor("GREEN")
    sugerencias.edit(embed)
    sugerencias.reactions.removeAll()
    message.channel.send("✅ **• La sugerencia ha sido aceptada correctamente**")
    return;
  }

  if(accion.toLowerCase() === 'rechazar'){
    const motivo = args.slice(2).join(" ")
    if(!motivo) return message.channel.send("❌ **• Debes de especificar el motivo**")
    
    const embed = new Discord.MessageEmbed()

    .setTitle("Sugerencia rechazada")
    .setDescription(`**${contenido}**\n\nMotivo: ${motivo}\n\nAutor de la sugerencia ${persona}`)
    .setFooter(`Rechazado por ${message.author.tag}`)
    .setColor("RED")
    sugerencias.edit(embed)
    sugerencias.reactions.removeAll()
    message.channel.send("✅ **• La sugerencia ha sido rechazada correctamente**")

  }
 
 }

}