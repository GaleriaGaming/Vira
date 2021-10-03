const Discord = require('discord.js');
const Schema = require('../Schemas/reaction-roles')

module.exports = async (client, reaction, user, message) => {

    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    Schema.findOne({ Message: reaction.message.id }, async(err, data) => {
      if(!data) return;
      if(!Object.keys(data.Roles).includes(reaction.emoji.name)) return;

      const [ roleid ] = data.Roles[reaction.emoji.name];
      reaction.message.guild.members.cache.get(user.id).roles.remove(roleid); 
    })

}