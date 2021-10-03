const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const Schema = require('../../Schemas/afk.js')

module.exports = {
  name: "afk",
  alias: [],

async execute (client, message, args){

  const content = args.join(" ")

    if(!content){

      await new Schema({
      guild: message.guild.id,
      user: message.author.id,
      razon: "No especificado"
    }).save();

      message.channel.send(new Discord.MessageEmbed()
      .setTitle("Usuario AFK")
      .setDescription(`${message.author.username} ahora estas AFK por la razon: **No especificado**, avisare a quienes te pingueen`)
      .setColor("RANDOM")
      )

    } else {

      Schema.findOne({ guild: message.guild.id}, async(err, data) => {
      if(data) data.delete();
      new Schema({
      guild: message.guild.id,
      user: message.author.id,
      razon: content
    }).save();
    message.channel.send(new Discord.MessageEmbed()
      .setTitle("Usuario AFK")
      .setDescription(`${message.author.username} ahora estas AFK por la razon: **${content}**, avisare a quienes te pingueen`)
      )
    })
  }
 
 }

}