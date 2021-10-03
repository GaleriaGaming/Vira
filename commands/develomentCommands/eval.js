const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const { inspect } = require("util");

module.exports = {
  name: "eval",
  alias: [],

execute (client, message, args){

  if(message.author.id !== '684580316886859791') return message.channel.send("❌ **• Solo <@684580316886859791> puede hacer eso**")

  const command = args.join(" ")
  if(!command) return message.channel.send("❌ **• Debes de poner el codigo**")

  try{
    const evaled = eval(command)
    let palabras = ["token", "destroy", "dotenv"]
    if(palabras.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send("❌ **• Esas palabras no estan permitidas**");
    return;
    }

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("EVALUADO CORRECTAMENTE")
    .addField(`**Tipo:**`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
    .addField(`**Evaludado en:**`, `\`\`\`yaml\n${Date.now() - message.createdTime}ms\`\`\``, true)
    .addField(`**Entrada:**`, `\`\`\`js\n${command}\`\`\``)
    .addField(`**Salida**`, `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
    message.channel.send(embed)

  } catch (error){
    const embed1 = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .addField(`**Entrada:**`, `\`\`\`js\n${command}\`\`\``)
    .addField(`**Error:**`, `\`\`\`js\n${error}\`\`\``)
    message.channel.send(embed1)
  }

 }

}