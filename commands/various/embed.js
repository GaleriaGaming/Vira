const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  alias: [],

execute (client, message, args){

    const texto = args.join(" ")
    if(!texto) return message.channel.send("❌ **• Debes de poner el contenido del embed \`< Titulo >> Descripcion >> Footer >> Codigo ExaDecimal o Nombre en Ingles del Color >> Link de la Imagen >`\ en ese order.\nPara dividir el embed tienes que poner __>>__.\nSi no quieres una de opcion pon __skip__ para pasar a la siguiente opcion.**")

    const opciones = texto.split(" >> ")
    
    if(opciones[0] === 'skip'){

    opciones[0] = ' '

    }

    if(opciones[2] === 'skip'){

    opciones[2] = ' '

    }

    if(opciones[3] === 'skip'){

    opciones[3] = ' '

    }

    if(opciones[4] === 'skip'){

    opciones[4] = ' '

    }

    if(opciones[1] === 'skip'){

    opciones[1] = ' '

    const embed = new Discord.MessageEmbed()

    .setTitle(opciones[0])
    .setDescription(opciones[1])
    .setFooter(opciones[2])
    .setColor(opciones[3])
    .setImage(opciones[4])

    message.channel.send(embed)

    return;

    }

    const embed = new Discord.MessageEmbed()

    .setTitle(opciones[0])
    .setDescription(opciones[1])
    .setFooter(opciones[2])
    .setColor(opciones[3])
    .setThumbnail(opciones[4])

    message.channel.send(embed)
 
 }

}