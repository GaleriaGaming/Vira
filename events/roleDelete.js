const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, roleDelete) => {

const data = await Schema.findOne({ guild: roleDelete.guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

.setTitle("Rol eliminado")
.setDescription(`Nombre: ${roleDelete.name}\n\nID: ${roleDelete.id}`)
.setColor(roleDelete.hexColor)

client.channels.cache.get(canal).send(embed).catch(error => {
    return;
 })

}