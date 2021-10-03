const Discord = require('discord.js');

module.exports = async (client, message) => {

    client.snipes.set(message.channel.id, {
      content: message.content,
      delete: message.author,
      canal: message.channel
    })

}