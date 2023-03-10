const Discord = require("discord.js");
const { MessageMenuOption, MessageMenu } = require('discord-buttons')

module.exports = {
  name: "autoroles",
  alias: [],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

        if(message.guild.id !== '861019874105098320') return message.channel.send("ā **ā¢ Solo puedes usar ese comando en el server de mi creador**")

        const embedespera = new Discord.MessageEmbed()
        .setTitle('Espera')
        .setDescription('Espera un momento a que carguen todas las reacciones')

        const embed = new Discord.MessageEmbed()
        .setTitle('Autoroles')
        .setDescription('Has clic en a el autorol al que quieras acceder')

        const embedroles = new Discord.MessageEmbed()
        .setTitle('Autoroles de roles')
        .setDescription('š¢ ā¢ Avisos\n\nš» ā¢ VMs')

        const embedcolores = new Discord.MessageEmbed()
        .setTitle('Autoroles de colores')
        .setDescription('š“ ā¢ Rojo\n\nš” ā¢ Amarillo\n\nš£ ā¢ Morado\n\nšµ ā¢ Azul\n\nš  ā¢ Naranja\n\nš¢ ā¢ Verde')

        let opcionroles = new MessageMenuOption()

        .setValue("1")
        .setLabel("Roles")
        .setDescription("Click aqui para ver los autoroles de Roles")

        let opcioncolores = new MessageMenuOption()

        .setValue("2")
        .setLabel("Colores")
        .setDescription("Click aqui para ver los autoroles de Colores")

        let menu = new MessageMenu()

        .setID('98')
        .setPlaceholder("Autoroles")
        .addOption(opcionroles)
        .addOption(opcioncolores)

        const msg = await message.channel.send(embed, menu)

        const filter = (menu) => menu.clicker.id === message.author.id;
        const collector = msg.createMenuCollector(filter, { time: 60000 })

            collector.on('collect', (menu) => {
                if(menu.values[0] === '1'){
                    menu.reply.defer()
                    return menu.message.edit(embedespera).then(msg => {
                        msg.reactions.removeAll().then(msg => {
                        msg.react('š¢'),
                        msg.react('š»').then(m => {
                            msg.edit(embedroles).then(m => {
                            msg.awaitReactions(async(reaction, user) => {
                                const miembro = await msg.guild.members.cache.get(user.id)
                                if(message.author.id !== user.id) return;
                                if(reaction.emoji.name === 'š¢'){
                                    miembro.roles.add('891636763653705768')
                                    miembro.send('Se te ha otorgado el rol de **Avisos**').catch(err => msg.channel.send('Se te ha otorgado el rol de **Avisos**'))
                                    reaction.users.remove(message.author.id);
                                }
                                if(reaction.emoji.name === 'š»'){
                                    miembro.roles.add('891637307113873469')
                                    miembro.send('Se te ha otorgado el rol de **VMs**').catch(err => msg.channel.send('Se te ha otorgado el rol de **VMs**'))
                                    reaction.users.remove(message.author.id);
                                }
                            })
                            })
                        })
                        })
                    })
                  }
                  if(menu.values[0] === '2'){
                    menu.reply.defer()
                    return menu.message.edit(embedespera).then(msg => {
                        msg.reactions.removeAll().then(msg => {
                            msg.react('š“'),
                            msg.react('š”'),
                            msg.react('š£'),
                            msg.react('šµ'),
                            msg.react('š '),
                            msg.react('š¢').then(m => {
                                msg.edit(embedcolores).then(m => {
                                msg.awaitReactions(async(reaction, user) => {
                                    const miembro = await msg.guild.members.cache.get(user.id)
                                    if(message.author.id !== user.id) return;
                                    if(reaction.emoji.name === 'š“'){
                                        miembro.roles.add('891511390483927070')
                                        miembro.send('Se te ha otorgado el color **Rojo**').catch(err => msg.channel.send('Se te ha otorgado el color **Rojo**'))
                                        reaction.users.remove(message.author.id);
                                    }
                                    if(reaction.emoji.name === 'š”'){
                                        miembro.roles.add('891511511024033802')
                                        miembro.send('Se te ha otorgado el color **Amarillo**').catch(err => msg.channel.send('Se te ha otorgado el color **Amarillo**'))
                                        reaction.users.remove(message.author.id);
                                    }
                                    if(reaction.emoji.name === 'š£'){
                                        miembro.roles.add('891511603277738036')
                                        miembro.send('Se te ha otorgado el color **Morado**').catch(err => msg.channel.send('Se te ha otorgado el color **Morado**'))
                                        reaction.users.remove(message.author.id);
                                    }
                                    if(reaction.emoji.name === 'šµ'){
                                        miembro.roles.add('891511709989212160')
                                        miembro.send('Se te ha otorgado el color **Azul**').catch(err => msg.channel.send('Se te ha otorgado el color **Azul**'))
                                        reaction.users.remove(message.author.id);
                                    }
                                    if(reaction.emoji.name === 'š '){
                                        miembro.roles.add('891511826393739306')
                                        miembro.send('Se te ha otorgado el color **Naranja**').catch(err => msg.channel.send('Se te ha otorgado el color **Naranja**'))
                                        reaction.users.remove(message.author.id);
                                    }
                                    if(reaction.emoji.name === 'š¢'){
                                        miembro.roles.add('891511815798943784')
                                        miembro.send('Se te ha otorgado el color **Verde**').catch(err => msg.channel.send('Se te ha otorgado el color **Verde**'))
                                        reaction.users.remove(message.author.id);
                                    }
                                })
                                })
                            })
                        })
                    })
                  }
            })
 
 }

}