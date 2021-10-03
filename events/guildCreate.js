const Discord = require('discord.js');

module.exports = async (client, guildCreate) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle("He sido añadido a un servidor")
    .addField('Nombre:', guildCreate.name)
    .addField('Miembro:', guildCreate.memberCount)
    .addField("ID:", guildCreate.id)
    .addField("Owner:", guildCreate.owner.user.tag)
    .setThumbnail(guildCreate.iconURL())
    client.channels.cache.get("861048845684834334").send(embed).catch(error => {
        return;
     })
}