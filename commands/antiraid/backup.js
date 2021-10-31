const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const backup = require('discord-backup');
backup.setStorageFolder(__dirname+"/backups/");

module.exports = {
  name: "backup",
  alias: [],

execute (client, message, args){

  const accion = args[0]
  if(!accion) return message.channel.send("❌ **• Debes decir que vas a hacer ( create / load )**");

  if(accion === 'create'){

    var perms = message.member.hasPermission("ADMINISTRATOR");
    if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")
  
    message.channel.send("✅ **• El backup esta siendo creado, espera unos segundos**")

    backup.create(message.guild, {
      jsonBeautify: true,
    }).then(backupData => {
      const embed = new Discord.MessageEmbed()

      .setTitle("Backup Creado")
      .setDescription(`Para usar el backup has \`-backup load ${backupData.id}\``)
      .setColor("RANDOM")
      .setFooter("No compartas el ID con nadie ")

      message.author.send(embed)

      const embed2 = new Discord.MessageEmbed()

      .setTitle("Backup Creado")
      .setDescription("El ID ha sido enviado por mensaje directo")
      .setColor("RANDOM")
      .setFooter("Si no te ha llegado nada revisa si tienes los mensajes directos desactivados")

      message.channel.send(embed2)
    })
  }

  if(accion === 'load'){

    if(message.author.id !== message.guild.owner.id) return message.channel.send("❌ **• Solo el owner del servidor puede usar ese comando**")

    let backupID = args[1]
    if(!backupID) return message.chnanel.send("❌ **• Debes decirme el ID del backup**")

    const embedfinal = new Discord.MessageEmbed()

    .setTitle("Cargar Backup")
    .setDescription(`⚠️ Cuando el backup sea cargado, los canales, roles y emojis seran reeamplazados, si estas seguro de hacer eso reacciona en ✅`)
    .setColor("RANDOM")

    backup.fetch(backupID).then(async () => {
      message.channel.send(embedfinal).then(msg => {
        msg.react("✅")

        msg.awaitReactions((reaction, user) => {
          if(message.author.id !== user.id) return;

          if(reaction.emoji.name === '✅'){
            backup.load(backupID, message.guild).then(() => {
              clearGuildBeforeRestore: true,
              backup.remove(backupID)
            }).catch((err) => {
              return message.channel.send("❌ **• Ha ocurrido un error al cargar el backup**");
            })
          }
        })
      })
    })
  }

  if(!accion === 'create' || !accion === 'load') return message.channel.send("❌ **• Debes decir que vas a hacer ( create / load )**")
 
 }

}