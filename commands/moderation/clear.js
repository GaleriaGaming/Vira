const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear",
  alias: [],

async execute (client, message, args){

    var perms = message.member.hasPermission("BAN_MEMBERS");
    if(!perms) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**");

    const cantidad = args.join(" ");

    if(!cantidad) return message.channel.send("❌ **• Debes decir cuantos mensajes quieres borrar**")
    if(isNaN(cantidad)) return message.channel.send(":x: **• Necesitas poner una cantidad!**");
    if(parseInt(cantidad) > 100) return message.channel.send(":x: **• No puedes poner un numero mayor a 100**");
    if(cantidad === 100) cantidad = 99;
    await message.channel.bulkDelete(
      (await message.channel.messages.fetch({ limit: cantidad })).filter(
      (m) => m.id !== message.id
      )
    ).then((messages) => {
      if(cantidad === 99) cantidad = 100;
      message.channel.send(`Se borraron ${cantidad} mensajes`).then((msg) => {
        msg.delete({ timeout: 1500});
        message.delete({ timeout: 0000});
      }); 
    }).catch((err) => {
      console.log(err)
      message.channel.send("❌ **• No puedo borrar mensajes de hace 14 dias debido a la API de discord**")
    });
 
 }

}