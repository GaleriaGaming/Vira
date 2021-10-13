const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms = require("ms")

module.exports = {
  name: "tempban",
  alias: [],

execute (client, message, args){

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: **• Necestio el permisos || Ban Members ||**")

    const member = message.mentions.members.first()
    if(!member) return message.channel.send(':x: **• Necesitas mencionar a alguien!**')

    let banReason = args.join(' ').slice(22);

    let time = args[1]
    if(!time) return message.channel.send(':x: **• Especifique un tiempo** **D = dias, H = Horas, M = Minutos, S = Segundos o 1000 = 1 Segundo**')
    if(time <= 0) return message.channel.send("❌ **• No puedes decir un numero negativo**")
    let timer = ms(time)

    if (!banReason) return message.channel.send (':x: **• Menciona una razón**')

    if (member.id === client.user.id) return message.channel.send(':(')
  if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.channel.send("❌ **• No puedes banear a alguien con un rol superior o igual al tuyo**")

    const bembed = new Discord.MessageEmbed()
    .setTitle("Usuario baneado temporalmente")
    .setThumbnail(member.avatarURL)
    .setColor("RANDOM")
    .addField("Usuario baneado", member.username)
    .addField("ID", member.id)
    .addField("Tiempo de baneo", time)
    .addField("Motivo", banReason)
    .addField("Moderador", message.author.username)
    message.channel.send(bembed)

    member.ban({ reason: `${banReason} durante ${time}`})
    setTimeout(async function () {
        await message.guild.members.unban(member.id)

        message.channel.send(`El usuario ${member.username} ha sido desbaneado`)

    }, timer)
 
 }

}