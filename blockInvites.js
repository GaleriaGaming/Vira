const { MessageEmbed: Embed } = require("discord.js")

module.exports = async (message) => {
  
  if(message.type === 'dm'){
  
  const { content, channel, member } = message;
  const regex = 
    /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite|dsc\.gg)\/.+[a-z]/gi;

    if(message.member.hasPermission("BAN_MEMBERS")) return;
    
    if(regex.test(content)){
    await channel.send(new Embed()
    .setDescription(`<@${member.id}> **No puedes mandar invitaciones**`)
    .setColor("RANDOM")
    );
    await message.delete();
    return;
    }
  }
}