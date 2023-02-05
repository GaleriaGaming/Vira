const Discord = require('discord.js');
const { name, version } = require('../config.json');

 module.exports = async (client) => {

      console.log(`Bot listo como: ${client.user.tag}`);

  const array = [
    {
      name: '-help para conseguir ayuda',
      type: 'PLAYING'
    },
    {
    name: client.guilds.cache.size + " servidores", 
    type: 'WATCHING',
    },
  ]

  setInterval(() => {
    function presence() {
      client.user.setPresence({
        status: 'on',
        activity: array[Math.floor(Math.random() * array.length)]
      });
    }

    presence();
  }, 7000)

  console.log(`\n\nNombre: ${name}\nVersion: ${version}`)

}