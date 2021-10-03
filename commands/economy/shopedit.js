const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const zeew = require("zeew-eco");
const Economia = new zeew.Tienda()
require('dotenv').config
new zeew.Options('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data')


module.exports = {
  name: "shopedit",
  alias: ["editartienda", "shope", "etienda"],

async execute (client, message, args){

    var perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

    const type = args[0]
    if(!type) return message.channel.send("❌ **• Debes decir que vas a hacer \`< agregar / remover / reiniciar >\`**")

    if(type.toLocaleLowerCase() === 'agregar'){
      const text = args.slice(1).join(' ')
      const data = text.split(" >> ")
      const name = data[0]
      if(!name) return message.channel.send("❌ **• Debes decir el nombre del objeto\nPD: Debes separar las opciones del objeto con \`>>\`**")
      const precio = data[1]
      if(!precio) return message.channel.send("❌ **• Debes decir el precio del objeto**")
      if(isNaN(precio)) return message.channel.send("❌ **• Solo puedes decir numeros**")
      const desc = data[2]
      if(!desc) return message.channel.send("❌ **• Debes decir la descripcion del objeto**")
      Economia.agregar(message.guild.id, name, desc, precio)
      message.channel.send("✅ **• Se ha agregado al item correctamente**")
    };
    if(type.toLocaleLowerCase() === 'remover'){
      
      const id = args.slice(1).join(' ')
      if(!id) {
        message.channel.send("❌ **• Para eliminar un item es necesario que veas la tienda y mires el ID de el item, con ese ID le eliminaras**").then(m => {
          m.delete({timeout: 3000})
        });
        return;
      }

      await Economia.remover(message.guild.id, id)

      await message.channel.send("❌ **• El item a sido removido correctamente**")
    };
    if(type.toLocaleLowerCase() === 'reiniciar'){
      message.channel.send("❌ **• Estas seguro de eliminar toda la tienda**").then(msg => {
        msg.react('✅')
        msg.react('❌')
        msg.awaitReactions(async (user, reaction) => {
          if(message.author.id !== user.id) return;
          if(reaction.emoji.name === '✅'){
            Economia.reiniciar(message.guild.id)
            await message.channel.send("✅ **• La tienda ha sido eliminado correctamente**")
          }
          if(reaction.emoji.name === '❌'){
            message.chanenl.send("✅ **• El comando ha sido cancelado, este mensaje sera eliminado en 5 segundos**")
          }
        })
        msg.delete({timeout: 5000})
      })
    }
 
 }

}