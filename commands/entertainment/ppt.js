const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ppt",
  alias: [],

execute (client, message, args){

  const opcion = args[0]
  if(!args[0]) return message.channel.send(":x: **• Debes de escribir alguna de las siguientes opciones: Piedra, Papel, Tijera**")
  
  let opcionesbot = ["piedra", 'papel', "tijera"]
  let opcionbot = opcionesbot[Math.floor(Math.random() * opcionesbot.length)]


  if(opcion === 'tijera'){

    if(opcionbot === "tijera"){

      const embed = new Discord.MessageEmbed()

      .setTitle("Empate")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }

    if(opcionbot === "papel"){

      const embed = new Discord.MessageEmbed()

      .setTitle("Has ganado!")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }

    if(opcionbot === 'piedra'){

    const embed = new Discord.MessageEmbed()

      .setTitle("Has perdido!")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }
  }

      if(opcion === 'piedra'){

    if(opcionbot === "tijera"){

      const embed = new Discord.MessageEmbed()

      .setTitle("Has ganado!")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }

    if(opcionbot === "papel"){

      const embed = new Discord.MessageEmbed()

      .setTitle("Has perdido!")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }

    if(opcionbot === 'piedra'){

    const embed = new Discord.MessageEmbed()

      .setTitle("Empate")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }
  }

    if(opcion === 'papel'){

    if(opcionbot === "tijera"){

      const embed = new Discord.MessageEmbed()

      .setTitle("Has perdido!")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }

    if(opcionbot === "papel"){

      const embed = new Discord.MessageEmbed()

      .setTitle("Empate")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }

    if(opcionbot === 'piedra'){

    const embed = new Discord.MessageEmbed()

      .setTitle("Has ganado!")
      .setDescription(`El bot ha elegido **${opcionbot}** y tu has elegido **${opcion}**`)
      
      return message.channel.send(embed)
    }

    message.channel.send(`La opción **${opcion}** no es una opción valida `)

  }
 
 }

}