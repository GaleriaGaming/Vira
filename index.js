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
  };
});

/////////////////////////////////Distube/////////////////////////////////

const Distube = require('distube')
client.distube = new Distube(client, {
  emitNewSongOnly: true,
  seachSongs: false,
  leaveOnStop: true,
  leaveOnFinish: true,
  leaveOnEmpty: true
});

client.distube.on("addList", (message, queue, playList) => {
  const embed = new Discord.MessageEmbed()

  .setTitle("PlayList Añadida")
  .setDescription(`**PlayList: ${playList.name}**`, `**Videos de la Playlist: ${playList.songs.lenght}**\n\n\n${playList.link}`)

  message.channel.send(embed)
})

client.distube.on("addSong", (message, queue, song) => {
  const embed = new Discord.MessageEmbed()

  .setTitle("Cancion Añadida")
  .setDescription(`**Cancion: ${song.name}**`, `**Duracion de la Cancion: ${song.formattedDuration}**\n\n\n${song.link}`)

  message.channel.send(embed)
})

client.distube.on("playSong", (message, queue, playSong) => {
  const embed = new Discord.MessageEmbed()

  .setTitle("Reproduciendo Cancion")
  .setDescription(`**Cancion: ${playSong.name}**`, `**Duracion de la Cancion: ${playSong.formattedDuration}**\n\n\n${playSong.link}`)

  message.channel.send(embed)
})  

client.distube.on("playList", (message, queue, playList) => {
  const embed = new Discord.MessageEmbed()

  .setTitle("Reproduciendo PlayList")
  .setDescription(`**PlayList: ${playList.name}**`, `**Videos de la PlayList: ${playList.songs.lenght}**\n\n\n${playList.link}`)

  message.channel.send(embed)
})

client.distube.on("error", (message, error) => {
  console.log(error)
  message.channel.send("Ha ocurrido un error")
});

/////////////////////////////////TOKENS/////////////////////////////////

client.login('ODUwNTUyODgzNTM1MTUxMTM0.YLrZGQ.rWUqWhUBdE-5625Zv1Usfk-yjMM');