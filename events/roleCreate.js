const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, roleCreate) => {

const data = await Schema.findOne({ guild: roleCreate.guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

.setTitle("Rol creado")
.setDescription(`Nombre: ${roleCreate.name}\n\nID: ${roleCreate.id}`)
.setColor(roleCreate.hexColor)

client.channels.cache.get(canal).send(embed).catch(error => {
    return;
 })

}