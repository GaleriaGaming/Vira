const Discord = require("discord.js");
const Schema = require('../../Schemas/warn');

module.exports = {
  name: "warn",
  alias: [],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

  const user = message.mentions.members.first();
  if(user === message.author) return message.channel.send("❌ **• No te puedes mutear a ti mismo**");
  if(!user) return message.channel.send("❌ **• Debes mencionar a alguien!**");

  let cosa = args.slice(1).join(" ");
  if(!cosa) cosa = `Sin especificar`;
  let reason = `${cosa} (por: ${message.author})`

  if (user.id === client.user.id) return message.channel.send(':(')
  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("❌ **• No puedes banear a alguien con un rol superior o igual al tuyo**")

  const warning = {
    author: message.member.user.tag,
    timestamp: new Date().getTime(),
    reason
  };
    try{
      await Schema.findOneAndUpdate({
        guild: message.guild.id,
        user: user.id
      }, {
        guild: message.guild.id,
        user: user.id,
        $push: {
          warnings: warning
        }
      }, {
        upsert: true
      });
    } catch(err){
      message.channel.send("❌ **• Ha ocurrido un error**")
      console.log(err)
    }
    const embedSuccess = new Discord.MessageEmbed()
    .setTitle('Usuario Warneado')
    .setDescription(`Usuario: <@${user.id}>\nModerador: <@${message.author.id}>\nRazon: ${reason}`)
    .setColor("RANDOM")
    const embedUser = new Discord.MessageEmbed()
    .setTitle('Has sido warneado!')
    .setDescription(`Info: \n\`\`\`Razon: ${reason}\nStaff: ${message.author.tag}\nServidor: ${message.guild}\`\`\``)
    .setFooter('Comportate mejor!')
    .setColor("RANDOM")
    message.channel.send(embedSuccess)
    user.send(embedUser).catch(err=>{});
 
 }

}