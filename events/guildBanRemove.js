const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, guild, user) => {

const data = await Schema.findOne({ guild: guild.id })

 const canal = data.channel

const embed = new Discord.MessageEmbed()

.setTitle("Miembro desbaneado")
.setDescription(`**Miembro: ${user.tag}\n\nID: ${user.id}**`)
.setColor("RANDOM")
.setTimestamp()

client.channels.cache.get(canal).send(embed).catch(error => {
    return;
 })

}