const Discord = require('discord.js')
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, oldChannel, newChannel) => {

  if(oldChannel.name !== newChannel.name){

const data = await Schema.findOne({ guild: newChannel.guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

.setTitle("Canal actualizado")
.setDescription(`**Antiguo nombre: ${oldChannel.name}\nNuevo nombre: ${newChannel.name}**`)
.setColor("RANDOM")
.setTimestamp()

client.channels.cache.get(canal).send(embed).catch(error => {
  return;
})
  
  }
}