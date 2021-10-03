const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const zeew = require('zeew-eco')
const Economia = new zeew.Tienda()
require('dotenv').config
new zeew.Options(process.env.URI)

module.exports = {
  name: "shop",
  alias: ["tienda"],

  /**
   * 
   * @param {Discord.client} client 
   * @param {Discord.Message} message 
   * @param {string[]} args 
   */

async execute (client, message, args){

    const tienda = await Economia.ver(message.guild.id)

    const map = tienda.map(m => `Nombre: ${m.name}\nDescripcion: ${m.description}\nID: ${m.id}`).join('\n\n')

    const embed = new Discord.MessageEmbed()

    .setTitle(`Tienda del servidor \`${message.guild.name}\``)
    .setDescription(`**${map}**`)
    .setColor("RANDOM")
    
    message.channel.send(embed)
 
 }

}