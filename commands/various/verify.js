const Discord = require("discord.js");
const fetch = require('node-fetch')

module.exports = {
  name: "verify",
  alias: ["verificar"],

  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  **/

async execute (client, message, args){

    const url = 'https://api.no-api-key.com/api/v2/captcha';
    try {
      fetch(url)
        .then(res => res.json())
        .then(async json => {
          message.channel.send(json.captcha)
        })
    } catch (error) {
      console.log(error)
    }
    
 }

}