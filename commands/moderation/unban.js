const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "unban",
  alias: ["desbanear"],

execute (client, message, args){

    var perms = message.member.hasPermission("BAN_MEMBERS")
    if(!perms) return message.channel.send(":x: **• No tienes permisos suficientes para usar ese comando!**")

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: **• Necestio el permisos || Ban Members ||**")
 
    let userID = args[0];
    if(!userID) return message.channel.send(":x: **• Debes de escribir una ID!**")
    const member = client.users.fetch(userID)

    message.guild.fetchBans().then(bans => {
        if(bans.size === 0) return message.channel.send(":x: **• Este servidor no tiene ningún usuario baneado!**")

        let Buser = bans.find(b => b.user.id == userID)
        if(!Buser) return message.channel.send(":x: **• Ese miembro no estaba baneado!**")

        message.guild.members.unban(Buser.user)

    })

    message.channel.send(`:white_check_mark: **• La ID ${userID} ha sido desbaneada!**`)
 
 }

}