const Discord = require('discord.js');
const client = new Discord.Client({intents: 32767});
const disbut = require('discord-buttons');
disbut(client);
require('dotenv').config();
const { prefix } = require("./config.json")

const { Client, MessageEmbed, Collection, Guild } = require('discord.js'); 

const fs = require('fs');
let { readdirSync } = require('fs');
/////////////////////////////////MONGODB/////////////////////////////////

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data', {
  useUnifiedTopology : true,
  useNewUrlParser: true,
  useFindAndModify: false
}).then(console.log("Conectado a Mongodb"))

/////////////////////////////////GIVEAWAYS/////////////////////////////////

const config = require('./configiveaways.json')
client.config = config

const { GiveawaysManager } = require("discord-giveaways")
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 60000,
  default: {
    botsCanWin: false,
    exemptPermission: [],
    embedColor: 'RANDOM',
    reaction: "🎉" 
  }
})

/////////////////////////////////HANDLER/////////////////////////////////

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);

    client.commands.set(command.name, command);
  }
}

for (const file of readdirSync('./events')) {
  if (file.endsWith('.js')) {
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./events/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }

}

/////////////////////////////////SNIPE/////////////////////////////////

client.snipes = new Map()

/////////////////////////////////EVENTO MESSAGE/////////////////////////////////

client.on('message', async (message) => {

  if(message.type === 'dm') return;

  if(message.content.length <= 4) return;

  const Levels = require('discord-xp');
  Levels.setURL('mongodb+srv://ViraDatabaseInMongoDB:1042312693@vira.hmcfo.mongodb.net/Data');
  const LevelChannel = require('./Schemas/canalniveles');

  if(message.author.bot) return;

  const randomXP = Math.floor(Math.random() * message.content.length) + 1

  const hasLeveldUP = await Levels.appendXp(message.author.id, message.guild.id, randomXP)
  console.log(`El usuario ${message.author} ha ganado ${randomXP} XP`)

  if(hasLeveldUP){
    const user = await Levels.fetch(message.author.id, message.guild.id)

    const data = await LevelChannel.findOne({ guild: message.guild.id })
    if(data){
      const canal = data.channel;
      client.channels.cache.get(canal).send(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL)
      .setDescription(`<@${message.author.id}> OMG AHORA TU NIVEL DE AUTISMO ES DE ${user.level} :sunglasses: GG!`)
      )
    } else {
      message.channel.send(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL)
      .setDescription(`<@${message.author.id}> OMG AHORA TU NIVEL DE AUTISMO ES DE ${user.level} :sunglasses: GG!`)
      )
    }
    
  }
/////////////////////////////////HANDLER/////////////////////////////////
  if(!message.content.startsWith(prefix)) return;
  let usuario = message.mentions.members.first() || message.member;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
    cmd.execute(client, message, args)
    
    }

});

client.on('message', async (message) => {
  if(!message.type === 'dm'){
  await require("./blockInvites")(message)
  }
});

/////////////////////////////////TOKENS/////////////////////////////////

client.login('ODUwNTUyODgzNTM1MTUxMTM0.YLrZGQ.3Tww1bacuHckpzbiChbtKofN3XM');