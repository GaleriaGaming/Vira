const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, emojiCreate) => {

const data = await Schema.findOne({ guild: emojiCreate.guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

.setTitle("Emoji creado")
.setDescription(`**Nombre: ${emojiCreate.name}\nID: ${emojiCreate.id}\nEmoji: <:${emojiCreate.name}:${emojiCreate.id}> **`)
.setColor("RANDOM")
.setTimestamp()
client.channels.cache.get(canal).send(embed).catch(error => {
    return;
 })

}