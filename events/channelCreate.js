const Discord = require('discord.js')
const mongoose = require('mongoose')
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, channelCreate) => {

var tipo = (channelCreate.type)

if(tipo === 'text'){
   tipo= 'Texto'
}

if(tipo === 'voice'){
    tipo= 'Voz'
 }

 if(tipo === 'new'){
    tipo= 'Noticias'
 }
  if(tipo === 'dm'){
   return;
 }

 const data = await Schema.findOne({ guild: channelCreate.guild.id })

 const canal = data.channel

 if(tipo === 'category'){
   const embed = new Discord.MessageEmbed()
   .setTitle("Categoria creado")
   .setDescription(`**Nombre: ${channelCreate.name}\nID: ${channelCreate.id}**`)
   .setColor("RANDOM")
   .setTimestamp()
   
   client.channels.cache.get(canal).send(embed).catch(error => {
      return;
   })
      return;
   }

 const embed = new Discord.MessageEmbed()
.setTitle("Canal creado")
.setDescription(`**Nombre: ${channelCreate.name}\nCategoria: ${channelCreate.parent}\nID: ${channelCreate.id}\nTipo: ${channelCreate.type}**`)
.setColor("RANDOM")
.setTimestamp()

client.channels.cache.get(canal).send(embed).catch(error => {
   return;
})
    
}
