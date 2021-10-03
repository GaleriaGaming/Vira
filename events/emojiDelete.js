const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, emojiDelete) => {

const data = await Schema.findOne({ guild: emojiDelete.guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

.setTitle("Emoji eliminado")
.setDescription(`**Nombre: ${emojiDelete.name}\nID: ${emojiDelete.id}**`)
.setColor("RANDOM")
.setTimestamp()

client.channels.cache.get(canal).send(embed).catch(error => {
    return;
 })

}