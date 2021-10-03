const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "embedchannel",
  alias: ["embedc"],

execute (client, message, args){

    const texto = args.join(" ")
    if(!texto) return message.channel.send("❌ **• Debes de poner el contenido del embed \`< Canal >> Titulo >> Descripcion >> Footer >> Codigo ExaDecimal o Nombre en Ingles del Color >> Link de la Imagen >`\ en ese order.\nPara dividir el embed tienes que poner __>>__.\nSi no quieres una de opcion pon __skip__ para pasar a la siguiente opcion.**")

    const canal = message.mentions.channels.first()
    if(!canal) return message.channel.send("❌ **• Debes mencionar un canal!**")

    const opciones = texto.split(" >> ")
    
    if(opciones[1] === 'skip'){

    opciones[1] = ' '

    }

    if(opciones[3] === 'skip'){

    opciones[3] = ' '

    }

    if(opciones[4] === 'skip'){

    opciones[4] = ' '

    }

    if(opciones[5] === 'skip'){

    opciones[5] = ' '

    }

    if(opciones[2] === 'skip'){

    opciones[2] = ' '

    const embed = new Discord.MessageEmbed()

    .setTitle(opciones[1])
    .setDescription(opciones[2])
    .setFooter(opciones[3])
    .setColor(opciones[4])
    .setImage(opciones[5])

    canal.send(embed)

    return;

    }

    const embed = new Discord.MessageEmbed()

    .setTitle(opciones[1])
    .setDescription(opciones[2])
    .setFooter(opciones[3])
    .setColor(opciones[4])
    .setThumbnail(opciones[5])

    canal.send(embed)
 
 }

}