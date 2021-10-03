const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, oldRole, newRole) => {

if(oldRole.name !== newRole.name){

const data = await Schema.findOne({ guild: newRole.guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

  .setTitle("Rol actualizado")
  .setDescription(`Antiguo nombre: ${oldRole.name}\n\nNuevo nombre: ${newRole.name}\n\nID: ${newRole.id}`)
  .setColor(newRole.hexColor)

client.channels.cache.get(canal).send(embed).catch(error => {
  return;
})

}

}