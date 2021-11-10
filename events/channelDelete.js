const Discord = require('discord.js');
const Schema = require('../Schemas/setlogs.js')

module.exports = async (client, channelDelete) => {

var tipo = (channelDelete.type)

if(tipo === 'text'){
    tipo= 'Texto'
}
        
if(tipo === 'voice'){
    tipo= 'Voz'
}
        
if(tipo === 'new'){
    tipo= 'Noticias'
}
        
const data = await Schema.findOne({ guild: channelDelete.guild.id })

const canal = data.channel

if(tipo === 'category'){
    const embed = new Discord.MessageEmbed()
    .setTitle("Categoria eliminada")
    .setDescription(`**Nombre: ${channelDelete.name}\nID: ${channelDelete.id}**`)
    .setColor("RANDOM")
    .setTimestamp()
    
    client.channels.cache.get(canal).send(embed).catch(error => {
       return;
    })
        return;
    }

const embed = new Discord.MessageEmbed()
        
.setTitle("Canal eliminado")
.setDescription(`**Nombre: ${channelDelete.name}\nCategoria: ${channelDelete.parent}\nID: ${channelDelete.id}\nTipo: ${channelDelete.type}**`)
.setColor("RANDOM")
.setTimestamp() 

client.channels.cache.get(canal).send(embed).catch(error => {
    return;
 })
   
}