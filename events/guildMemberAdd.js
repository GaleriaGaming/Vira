const Discord = require('discord.js');
const fetch = require('node-fetch');
const messageReactionAdd = require('./messageReactionAdd');

module.exports = async (client, member) => {


    const canal = client.channels.cache.get('894395193149779999');
    if(member.guild.id !== '861019874105098320') return;
    if(member.bot) return;

    const url = 'https://api.no-api-key.com/api/v2/captcha';
        try {
            fetch(url)
                .then(res => res.json())
                .then(async json => {
                    console.log(json)
                    const msg = await canal.send(new Discord.MessageEmbed()
                        .setTitle(`Verificacion del servidor ${member.guild.name}`)
                        .setDescription('Has `<captcha>` en el canal de verificacion')
                        .setFooter('Solo tiene 30 segundos')
                        .setImage(json.captcha)
                )
                    try {
                        const filter = (m) => {
                            if(m.author.bot) return;
                            if(m.author.id === member.id && m.content === json.captcha_text) return true;
                            else {
                                msg.channel.send(`❌ **• ${member} Has respondido incorrectamente el captcha**`)
                            }
                        };
                        const response = await msg.channel.awaitMessages(filter, {
                            max : 1,
                            time : 30000,
                            errors : ['time']
                        }).then(msg => msg.delete())
                        if(response) {
                            msg.channel.send(`✅ **• ${member} Has sido verificado del servidor ${member.guild.name}**`)
                            member.roles.add("891503221762297857")
                            msg.delete()
                        }
                    } catch (error) {
                        member.send(`Has sido kickeado del servidor ${member.guild.id} por no responder el captcha`).then(member.kick())
                    }
                })
        } catch (error) {

        }

}