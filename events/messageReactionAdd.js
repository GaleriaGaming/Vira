const Discord = require('discord.js');
const Schema = require('../Schemas/reaction-roles')

module.exports = async (client, reaction, user, message) => {

    const servidor = reaction.message.guild
    const mensaje = reaction.message
    const canal = reaction.message.channel
    const miembro = await servidor.members.cache.get(user.id)
      if(servidor.id === '861019874105098320' && mensaje.id === '891460605335183411' && canal.id === '891460235988979763' && reaction.emoji.name === '✅'){
        miembro.roles.add("891503221762297857")
        miembro.send(`Has sido verificado del servidor ${servidor.name}`)
      }
      if(servidor.id === '861019874105098320' && mensaje.id === '891515298006573066' && canal.id === '891460235988979763' && reaction.emoji.name === '✅'){
        client.channels.cache.get('861065298076631051').send(`el usuario ${miembro} se ha verificado con zira mientras estoy prendido 😡`)
        miembro.roles.remove("891503221762297857")
      }
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    Schema.findOne({ Message: reaction.message.id }, async(err, data) => {
      if(!data) return;
      if(!Object.keys(data.Roles).includes(reaction.emoji.name)) return;

      const [ roleid ] = data.Roles[reaction.emoji.name];
      reaction.message.guild.members.cache.get(user.id).roles.add(roleid); 
    })

}