const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "poll",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")

  const filter = m => m.author.id === message.author.id;

  message.reply("**Debes especificar de que es esta poll**").then(r => r.delete(15000))

  const titulo = message.channel.awaitMessages(filter, {
    max: 1,
    time: 15000
    }).then(collected => {

      if(collected.first().content === 'cancelar'){
        return message.reply("Cancelado")
      }
    }).catch(err => {
   message.channel.send("❌ **• Se ha acabado el tiempo**").then(r => r.delete(5000));
    })

  message.reply("**Debes especificar la opcion 1**").then(r => r.delete(15000))

  const opcion1 = message.channel.awaitMessages(filter, {
    max: 1,
    time: 15000
    }).then(collected => {

      if(collected.first().content === 'cancelar'){
        return message.reply("Cancelado")
      }
    }).catch(err => {
   message.channel.send("❌ **• Se ha acabado el tiempo**").then(r => r.delete(5000));
    })
  message.reply("**Debes especificar la opcion 2**").then(r => r.delete(15000))

  const opcion2 = message.channel.awaitMessages(filter, {
    max: 1,
    time: 15000
    }).then(collected => {

      if(collected.first().content === 'cancelar'){
        return message.reply("Cancelado")
      }
    }).catch(err => {
   message.channel.send("❌ **• Se ha acabado el tiempo**").then(r => r.delete(5000));
    })
  message.reply("**Debes especificar la opcion 3**").then(r => r.delete(15000))

  const opcion3 = message.channel.awaitMessages(filter, {
    max: 1,
    time: 15000
    }).then(collected => {

      if(collected.first().content === 'cancelar'){
    const embed = new MessageEmbed()

    .setTitle(`${titulo}`)

    .setDescription(`1️⃣ ${opcion1}\n\n2️⃣ ${opcion2}`)
    
    message.channel.send(embed).then(msg => {

      msg.react('1️⃣')
      msg.react('2️⃣')
    })
      }
    }).catch(err => {
   message.channel.send("❌ **• Se ha acabado el tiempo**").then(r => r.delete(5000));
    })
  message.reply("**Debes especificar la opcion 4**").then(r => r.delete(15000))

  const opcion4 = message.channel.awaitMessages(filter, {
    max: 1,
    time: 15000
    }).then(collected => {

      if(collected.first().content === 'cancelar'){
    const embed = new MessageEmbed()

    .setTitle(`${titulo}`)

    .setDescription(`1️⃣ ${opcion1}\n\n2️⃣ ${opcion2}\n\n3️⃣ ${opcion3}`)
    
    message.channel.send(embed).then(msg => {

      msg.react('1️⃣')
      msg.react('2️⃣')
      msg.react('3️⃣')
    })
      }
    }).catch(err => {
   message.channel.send("❌ **• Se ha acabado el tiempo**").then(r => r.delete(5000));
    })

  message.reply("**Debes especificar la opcion 5**").then(r => r.delete(15000))

  const opcion5 = message.channel.awaitMessages(filter, {
    max: 1,
    time: 15000
    }).then(collected => {

      if(collected.first().content === 'cancelar'){
    const embed = new MessageEmbed()

    .setTitle(`${titulo}`)

    .setDescription(`1️⃣ ${opcion1}\n\n2️⃣ ${opcion2}\n\n3️⃣ ${opcion3}\n\n4️⃣ ${opcion4}`)
    
    message.channel.send(embed).then(msg => {

      msg.react('1️⃣')
      msg.react('2️⃣')
      msg.react('3️⃣')
      msg.react('4️⃣')
    })
      }
    }).catch(err => {
   message.channel.send("❌ **• Se ha acabado el tiempo**").then(r => r.delete(5000));
    })

  message.reply("**Debes especificar la opcion 6**").then(r => r.delete(15000))

  const opcion6 = message.channel.awaitMessages(filter, {
    max: 1,
    time: 15000
    }).then(collected => {

      if(collected.first().content === 'cancelar'){
    const embed = new MessageEmbed()

    .setTitle(`${titulo}`)

    .setDescription(`1️⃣ ${opcion1}\n\n2️⃣ ${opcion2}\n\n3️⃣ ${opcion3}\n\n4️⃣ ${opcion4}\n\n5️⃣ ${opcion5}`)
    
    message.channel.send(embed).then(msg => {

      msg.react('1️⃣')
      msg.react('2️⃣')
      msg.react('3️⃣')
      msg.react('4️⃣')
      msg.react('5️⃣')
    })
      }
    }).catch(err => {
   message.channel.send("❌ **• Se ha acabado el tiempo**").then(r => r.delete(5000));

 })

  opcion6.reply("**Di enviar si quieres enviar la poll o di cancelar si quieres cancelar la poll**").then(r => r.delete(15000))

  const enviar = message.channel.awaitMessages(filter, {
    max: 1,
    time: 15000
    }).then(collected => {

    if(collected.first().content === 'enviar'){
    const embed = new MessageEmbed()

    .setTitle(`${titulo}`)

    .setDescription(`1️⃣ ${opcion1}\n\n2️⃣ ${opcion2}\n\n3️⃣ ${opcion3}\n\n4️⃣ ${opcion4}\n\n5️⃣ ${opcion5}\n\n6️⃣ ${opcion6}`)
    
    message.channel.send(embed).then(msg => {

      msg.react('1️⃣')
      msg.react('2️⃣')
      msg.react('3️⃣')
      msg.react('4️⃣')
      msg.react('5️⃣')
      msg.react('6️⃣')
    })
      }

    if(collected.first().content === 'cancelar'){
    const embed = new MessageEmbed()

    .setTitle(`${titulo}`)

    .setDescription(`1️⃣ ${opcion1}\n\n2️⃣ ${opcion2}\n\n3️⃣ ${opcion3}\n\n4️⃣ ${opcion4}\n\n5️⃣ ${opcion5}`)
    
    message.channel.send(embed).then(msg => {

      msg.react('1️⃣')
      msg.react('2️⃣')
      msg.react('3️⃣')
      msg.react('4️⃣')
      msg.react('5️⃣')
    })
      }
    }).catch(err => {
   message.channel.send("❌ **• Se ha acabado el tiempo**").then(r => r.delete(5000));

 })
}
}