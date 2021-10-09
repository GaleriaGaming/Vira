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

    const rules = await client.channels.cache.get('891460235988979763').messages.fetch('896184979493646356')
    
    const newRules = args.slice(0);
    if(!newRules) {
        return message.channel.send("❌ **• Debes decir las nuevas reglas (Para poner espacios pon \n)**")
    } else {
        const newRulesEmbed = new Discord.MessageEmbed()

        .setTitle('° | REGLAS | °')
        .setDescription(newRules)

        message.channel.send("✅ **• Las reglas han sido cambiadas**")

        try {
            rules.edit()
        } catch (err) {
            console.log(err)
        }
    }



 }

}