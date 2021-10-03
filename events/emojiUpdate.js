const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client,  oldEmoji, newEmoji) => {

const data = await Schema.findOne({ guild: newEmoji.guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

.setTitle("Emoji actualizado")
.setDescription(`**Antiguo nombre: ${oldEmoji.name}\nNuevo nombre: ${newEmoji.name}\nID: ${newEmoji.id}\nEmoji: <:${newEmoji.name}:${newEmoji.id}>**`)
.setColor("RANDOM")
.setTimestamp()

client.channels.cache.get(canal).send(embed).catch(error => {
    return;
 })

}