const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const moment = require('moment')

module.exports = {
  name: "userinfo",
  alias: ["info"],

execute (client, message, args){

  let estados = {
    "online": "Online",
    "idle": "Ausente",
    "dnd": "No me molestes",
    "offline": "Offline",
  };
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

  const embedinfo = new Discord.MessageEmbed()

  .setColor("BLUE")
  .setDescription(`**Información de ${member}:**`)
  .addField(`**Nombre**:`, `${member.user.tag}`)
  .addField("**ID**", `${member.id}`)
  .addField("**Apodo:**", `${member.nickname}` !== null ? `${member.nickname}`: 'ninguno')
  .addField("**Fecha de creación de la cuenta**", moment(member.user.createdAt).format(`YYYY-MM-D, HH:mm a`))
  .addField("**Fecha de unión al servidor:**", moment(message.member.joinedAt).format('YYYY-MM-D, HH:mm a'))
  .addField("**Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(','))
  .addField("**Boosts:**", member.premiumSince ? 'Usuario booster' : 'Usuario no booster')
  .addField("Estado", estados[member.user.presence.status])
  .setThumbnail(member.user.displayAvatarURL( {format: 'png', dynamic: 'true'} ))

  message.channel.send(embedinfo)

 }

}