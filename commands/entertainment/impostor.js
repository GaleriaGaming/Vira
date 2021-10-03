const Discord = require("discord.js");

module.exports = {
  name: "impostor",
  alias: [],

execute (client, message, args){

  let impostores = ["1", "2"]

  const user = message.mentions.members.first() || message.author

  let impostorrandom = ["impostorsi", "impostorno"]
  let impostorFinal = impostorrandom[Math.floor(Math.random() * impostorrandom.length)]

  if(impostorFinal === 'impostorsi') return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
        　　　.　　　 　　.　　　　　。　　 。　. 　

        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

        　　ﾟ　　${user} Era Un Impostor.　 。　.

        　　'    　${impostores[(Math.floor(Math.random() * impostores.length))]} Impostor/es Restantantes 　 。

        　　ﾟ　　　.　　　. ,　　　　.　 .`)
 
 if(impostorFinal === 'impostorno') return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
        　　　.　　　 　　.　　　　　。　　 。　. 　

        .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

        　　ﾟ　　${user} No Era Un Impostor.　 。　.

        　　'    　${impostores[(Math.floor(Math.random() * impostores.length))]} Impostor/es Restantantes 　 。

        　　ﾟ　　　.　　　. ,　　　　.　 .`)

 }

}