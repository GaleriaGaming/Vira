const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, guild, user) => {

const data = await Schema.findOne({ guild: guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

.setTitle("Miembro baneado")
.setDescription(`**Miembro: ${user.tag}\n\nID: ${user.id}**`)
.setTimestamp()
.setColor("RANDOM")

client.channels.cache.get(canal).send(embed).catch(error => {
    return;
 })

}