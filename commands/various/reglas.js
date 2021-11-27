const Discord = require("discord.js");

module.exports = {
  name: "reglas",
  alias: ["rules", "editareglas"],

  /**
  * @param {Discord.Client} client
  * @param {Discord.Message} message
  * @param {string[]} args
  **/

async execute (client, message, args){

    

    const rules = await client.channels.cache.get('891460235988979763').messages.fetch('896195492092969010')

    if(message.guild.id !== '861019874105098320') return;
    
    var perms = message.member.hasPermission('ADMINISTRATOR')
    if(!perms) return message.channel.send("❌ **• No tienes permisos suficientes para usar ese comando!**")
    
    const newRules = args.join(' ').slice(0);
    console.log(newRules)
    if(!newRules) {
        return message.channel.send("❌ **• Debes decir las nuevas reglas**")
    } else {
        const newRulesEmbed = new Discord.MessageEmbed()

        .setTitle('° | REGLAS | °')
        .setDescription(newRules)

        message.channel.send("✅ **• Las reglas han sido cambiadas**")

        try {
            rules.edit(newRulesEmbed)
        } catch (err) {
            console.log(err)
        }
    }



 }

}