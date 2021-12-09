const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const { MessageMenuOption, MessageMenu } = require('discord-buttons')

module.exports = {
  name: "help",
  alias: ["ayuda"],

async execute (client, message, args){

    const embedcargando = new Discord.MessageEmbed()

    .setDescription("**Espera a que carguen las reacciones**")

    const embedprincipal = new Discord.MessageEmbed()

    .setTitle("Bienvenido al apartado de Ayuda")
    .setDescription('**Prefix: -\n\n\n\n:money_with_wings:: Apartado de economia\n\n:video_game:: Apartado de Entretenimiento\n\n:sunglasses:: apartado de Varios\n\n:crown:: Apartado de Moderación\n\n:gift:: Apartado de giveaways\n\n🥇: Apartado de niveles\n\n\n\n||Recuerda que solo puedes usar este mensaje por 1 minuto||**')
    .setColor("RANDOM")

    const embedmoderacion = new Discord.MessageEmbed()

    .setTitle("Comandos de Moderación")
    .setDescription("**Prefix: -\n\n\n\nBan <User>\nSirve para bloquear usuarios del servidor permanentemente\n\nBanID <UserID>\nSirve para bloquear usuarios que no estan en el servidor mediante su ID\n\nTempBan <User>\nSirve para bloquear usuarios del servidor temporalmente\n\nUnban <UserID>\nSirve para desbloquear usuarios del servidor mediante su ID\n\nKick <User>\nSirve para expulsar usuarios del servidor\n\nMute <User>\nsirve para silenciar usuarios del servidor\n\nTempMute <User>\nSirve para silenciar temporalmente ususarios del servidor\n\nUnmute <User>\nSirve para des silenciar usuarios del servidor\n\nWarn <User>\nSirve para Avisar usuarios del servidor\n\nWarns <User>\nSirve para ver los avisos que tiene un usuario del servidor\n\nUnwarn <User>\nSirve para quitar avisos a un usuario\n\nSlowmode <User>\nSirve para añadir slowmode en el canal en el que lo usas**")
    .setColor("RANDOM")
    
    const embedeconomia = new Discord.MessageEmbed()

    .setTitle("Comandos de Ecomonia")
    .setDescription("**Prefix: -\n\n\n\nWork\nConsigue dinero trabajando\n\nCrime\nConsigue dinero haciendo un crimen\n\nBalance\nRevisa el dinero que tienes\n\nDep <Cantidad>\nSirve para guardar tu dinero en el banco\n\nWith <Cantidad>\nSirve para sacar dinero del banco\n\nAddMoney <User> <Cantidad>\nEste comandos solo lo puedes usar los admins, sirve para añadir dinero\n\nShop\nTodavia estamos trabajando en ello pero servira para comprar articulos\n\nRob <User>\nSirve para robar a un usuario**")
    .setColor("RANDOM")

    const embeddiversion = new Discord.MessageEmbed()

    .setTitle("Comandos de Diversion")
    .setDescription("**Prefix: -\n\n\n\nBuscaminas\nSirve para jugar al buscaminas\n\nTicTacToe <User>\nSirve para jugar al TicTacToe\n\nImpostor <User>\nSirve para saber si tu o el usuario que menciones es el impostor\n\nTriggered\nSirve para poner la foto de perfil de un usuario triggered\n\nPPT <Piedra, Papel o Tijera>\nSirve para jugar piedra papel o tijera\n\nMeme <texto, imagen>\nSirve para ver un meme en texto o en una imagen dependiendo de cual eligas**")
    .setColor("RANDOM")

    const embedvarios = new Discord.MessageEmbed()

    .setTitle("Comandos Varios")
    .setDescription("**Prefix: -\n\n\n\nPing\nRevisa cuanto ping tienes\n\nSay <Texto>\nDigo lo que quieras\n\nSayChannel <Canal> <Texto>\nDigo lo que quieras en el canal que quieras ||Solo lo pueden usar administradores||\n\nUserInfo <User>\nSirve para saber la informacion de un usuario\n\nServerInfo\nSirve para saber la informacion del servidor\n\nSugerencia <Sugerencia>\nSirve para sugerir algo\n\nPoll\nSirve para hacer una encuesta\n\nJumbo <Emoji>\nSirve para tener la imagen del emoji que pongas\n\nAvatar <User>\nSirve para tener la foto de perfil de usuario que menciones\n\nNuke\nSirve para borrar todos los mensajes de canal en el que lo hagas ||Solo lo pueden los administradores||\n\nUptime\nSirve para ver cuanto tiempo llebo prendido\n\nEval <Codigo>\nSirve para probar un codigo ||Solo lo puede usar <@684580316886859791>||\n\nReportBug <Bug>\nSirve para reportar bugs a <@684580316886859791> para que los arregle ||Si reportas bugs solo para molestar vas a ser betado del sistema||\n\nSetlogs <Canal>\nCon este comando puedes escoger en que canal se mandaran los logs\n\nCanalSugerencias <Canal>\nCon este comando puedes escoger en que canal se mandaran las sugerencias\n\nVotarSugerencia <Aceptar/Rechazar> <ID>\nCon este comando los admins pueden dar el voto final de una sugerencia\n\nInvite\nEste comando sirve para que mande la invitacion del servidor de mi creador**")
    .setColor("RANDOM")

    const embedgiveaway = new Discord.MessageEmbed()

    .setTitle("Comandos de Giveaway")
    .setDescription("**Prefix: -\n\n\n\nGiveaway\nSirve para iniciar un sorteo\n\nEdit\nSirve para editar un sorteo\n\nRerrol\nSirve para volver a elegir los ganadores\n\nDelete\nSirve para eliminar un sorteo**")
    .setColor("RANDOM")

    const embedniveles = new Discord.MessageEmbed()

    .setTitle("Comandos de Niveles")
    .setDescription("**Prefix: -\n\n\n\nNivel\nSirve para sirve cual es tu nivel y cantidad de experiencia\n\nLeaderboard\nSirve apra ver la tabla de posiciones del servidor\n\nAddlevel <User> <Cantidad>\nSirve para añadir una cantidad de niveles a quien pinguees o a ti mismo ||Solo lo pueden usar personas con el permiso de Administrador||**")
    .setColor("RANDOM")

    const embedmusica = new Discord.MessageEmbed()

    setTitle("Comandos de Musica")
    .setDescription("Prefix: v!\n\n\n\n`Play/p <cancion/playlist>`\nSirve para poner una cancion o una playlist mediante su nombre o su link de youtube\n\n`Stop`\nSirve para detener todas las canciones o playlists que esten en la cola o sonando\n\n`Pause`\nSirve apara pausar la cancion que esta sonando\n\n`Continue`\nSirve para despausar la cancion que esta pausada\n\n`Volume <1/100>`\nSirve para determinar el volumen de la cancion que este sonando\n\n`loop <0, 1, 2>`\nSirve para repetir la cancion o la queue dependiendo del numero que sea (0: Desactivar, 1: Repetir la cancion, 2: Repetir la queue)\n\n`Queue`\nSirve para ver las 10 primeras cancion de la cola\n\n`Skip`\nSirve para saltar la cancion que esta sonando por la siguiente de la cola")
    .setColor("RANDOM")

    let opcionmoderacion = new MessageMenuOption()
    
    .setEmoji("👑")
    .setValue("1")
    .setLabel("Moderación")
    .setDescription("Click aqui para ver los comandos de moderacion")

    let opcioneconomia = new MessageMenuOption()

    .setEmoji("💸")
    .setValue("2")
    .setLabel("Economia")
    .setDescription("Click aqui para ver los comandos de economia")

    let opcionesdiversion = new MessageMenuOption()

    .setEmoji("🎮")
    .setValue("3")
    .setLabel("Diversion")
    .setDescription("Click aqui para ver los comandos de diversion")

    let opcionvarios = new MessageMenuOption()

    .setEmoji("😎")
    .setValue("4")
    .setLabel("Varios")
    .setDescription("Click aqui para ver los comandos varios")

    let opciongiveaway = new MessageMenuOption()

    .setEmoji("🎁")
    .setValue("5")
    .setLabel("Sorteos")
    .setDescription("Click aqui para ver los comandos de giveaway")
    
    let opcionniveles = new MessageMenuOption()

    .setEmoji("🥇")
    .setValue("6")
    .setLabel("Niveles")
    .setDescription("Click aqui para ver los comandos de niveles")

    let opcionmusica = new MessageMenuOption()

    .setEmoji("🎧")
    .setValue("7")
    .setLabel("Musica")
    .setLabel("Click aqui para ver los comandos de musica")

    let menu = new MessageMenu()

    .setID("98")
    .setPlaceholder("Menu")
    .addOption(opcioneconomia)
    .addOption(opcionesdiversion)
    .addOption(opcionvarios)
    .addOption(opcionmoderacion)
    .addOption(opciongiveaway)
    .addOption(opcionniveles)
    .addOption(opcionmusica)

    const msg = await message.channel.send(embedprincipal, menu)

    const filter = (menu) => menu.clicker.id === message.author.id;
    const collector = msg.createMenuCollector(filter, { time: 60000 })

    collector.on('collect', (menu) => {
      if(menu.values[0] === '1'){
        menu.reply.defer()
        return menu.message.edit(embedmoderacion) 
      }
      if(menu.values[0] === '2'){
        menu.reply.defer()
        return menu.message.edit(embedeconomia)
      }
      if(menu.values[0] === '3'){
        menu.reply.defer()
        return menu.message.edit(embeddiversion)
      }
      if(menu.values[0] === '4'){
        menu.reply.defer()
        return menu.message.edit(embedvarios)
      }
      if(menu.values[0] === '5'){
        menu.reply.defer()
        return menu.message.edit(embedgiveaway)
      }
      if(menu.values[0] === '6'){
        menu.reply.defer()
        return menu.message.edit(embedniveles)
      }
      if(menu.values[0] === '7'){
        menu.reply.defer()
        return menu.message.edit(embedmusica)
      }
    })

 }

}