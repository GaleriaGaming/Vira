const Discord = require("discord.js");
const ms = require("ms");
const Schema = require('../../Schemas/muterol')

module.exports = {
  name: "mute",
  alias: [],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

  const muteid = await Schema.find({ guild: message.guild.id });
  if(!muteid) return message.channel.send("❌ **• Este servidor no tiene ningun rol para mutear**")
  const rol = muteid.map(m => m.role)

  var perms = message.member.hasPermission("BAN_MEMBERS");
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")
  
  let user = message.mentions.members.first();
  if(!user) return message.channel.send("❌ **• Debes mencionar a alguien!**")

  let time = args[1]
  if(!time) return message.channel.send(`❌ **• Debes decir el tiempo que ${user} va ha estar muteado\nEjemplo: \`1m, 1h, 1d, 1w\`**`)
  if(time <= 0) return message.channel.send("❌ **• No puedes decir un numero negativo**")
  const timems = ms(time) 

  const razon = args.slice(2).join(' ')
  if(!razon) return message.channel.send("❌ **• Debes decir la razon del mute**")

  const member = message.guild.members.cache.get(user.id);

  if(user.roles.cache.has(rol)){
    return message.channel.send("❌ **• Ese usuario ya habia sido muteado**")
  }

  if(user.id === client.user.id) return message.channel.send(":(")
  if(user.id === message.author.id) return message.channel.send("❌ **• No te puedes mutear a ti mismo**")

  try{
    member.roles.add(`${rol}`)
    message.channel.send(new Discord.MessageEmbed()
      .setTitle("Usuario muteado")
      .setDescription(`Moderador:\n<@${message.author.id}>\n\nUsuario muteado:\n<@${user.id}>\n\nTiempo del mute:\n${time}\n\nRazon del mute:\n${razon}`)
    )
  } catch (err) {
    return message.channel.send("❌ **• El rol para mutear de este servidor fue eliminado**");
  }
  setTimeout(() => {

    user.roles.remove(rol)

    message.channel.send(`✅ **• <@${user.id}> ha sido desmuteado**`).catch(error => {
      message.channel.send(`❌ **• Hubo un error al desmutear a <@${user.id}> ||${error}||**`);
    })
  }, timems);
 
 }

}