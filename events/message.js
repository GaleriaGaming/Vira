const Discord = require('discord.js');
const { prefix, version, name } = require("../config.json")
const { MessageEmbed } = require("discord.js")

const afk = require('../Schemas/afk.js')
const tokenGrappers = require('../Schemas/token-grappers');

module.exports = async (client, message) => {

console.log(`${message.author.username}: `, `${message.content}`);

/////////////////////////////////ANTI LINKS/////////////////////////////////

/////////////////////////////////ANTI INVITACIONES/////////////////////////////////

/////////////////////////////////PING/////////////////////////////////
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
    const embed = new Discord.MessageEmbed()
    .setDescription(`Hola, soy ${name}, un bot creado por <@684580316886859791>, fui diseñado para mejorar la experiencia del server de <@557535696919986176>\nActualmente estoy en mi version ${version} pero mi creador <@684580316886859791> siempre va a trabajar en mi desarrollo\n\nSi quieres ayudar a mi desarrollo con ideas puedes usar el comando -sugerencia`)
    .setFooter(`Si quieres ayudar directamente en mi desarrollo puedes pinguear a Galeria Gaming#0309 o enviarle un mensaje directo\nSi vas a mandar un mensaje directo solo para molestar vas a ser warneado o baneado de este servidor dependiendo del mensaje`)
    message.channel.send(embed)
    return;
  }
  /////////////////////////////////MD/////////////////////////////////
    if(message.channel.type === "dm"){
    if(message.author.bot) return;
    const embed = new Discord.MessageEmbed()
    .setDescription(`Hola, soy ${name}, un bot creado por <@684580316886859791>, fui diseñado para mejorar la experiencia del server de <@557535696919986176>\nActualmente estoy en mi version ${version} pero mi creador <@684580316886859791> siempre va a trabajar en mi desarrollo\n\nSi quieres ayudar a mi desarrollo con ideas puedes usar el comando -sugerencia`)
    .setFooter(`Si quieres ayudar directamente en mi desarrollo puedes pinguear a Galeria Gaming#0309 o enviarle un mensaje directo\nSi vas a mandar un mensaje directo solo para molestar vas a ser warneado o baneado de este servidor dependiendo del mensaje`)
    message.channel.send(embed)
    return;
  }
/////////////////////////////////AFK/////////////////////////////////
  const newAfk = await afk.findOne({ guild: message.guild.id, user: message.author.id })
    if(newAfk){
    await afk.findOneAndDelete({ guild: message.guild.id, user: message.author.id })
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Bienvenido de vuelta tu estado de AFK ha sido removido ya no avisare cuando te pingueen`)
    .setColor("RANDOM")
    )
  }

  if(message.mentions.members.first()) {
    const newAfk1 = await afk.findOne({ guild: message.guild.id, user: message.mentions.members.first()})
    if(newAfk1) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`${message.mentions.members.first().user.username} esta AFK en este momento porfavor no lo menciones`)
      .setColor("RANDOM")

      )
    }else return;
  }else;

  if (!message.content.startsWith(prefix)) return;

/////////////////////////////////Anti Token-Grappers/////////////////////////////////

  const deleteMessage = () => {
    message.delete()
    message.member.kick("Enviar token grapper")
  };
  
  const links = [
    "2no.co",
    "blasze.com",
    "blasze.tk",
    "gotyouripboi.com",
    "iplogger.com",
    "iplogger.org",
    "iplogger.ru",
    "ps3cfw.com",
    "yip.su",
    "bmwforum.co",
    "bucks.as",
    "cyberh1.xyz",
    "discörd.com",
    "disçordapp.com",
    "fortnight.space",
    "fortnitechat.site",
    "freegiftcards.co",
    "grabify.link",
    "joinmy.site",
    "leancoding.co",
    "minecräft.com",
    "quickmessage.us",
    "särahah.eu",
    "särahah.pl",
    "shört.co",
    "spötify.com",
    "spottyfly.com",
    "starbucks.bio",
    "starbucksisbadforyou.com",
    "starbucksiswrong.com",
    "stopify.co",
    "xda-developers.us",
    "youshouldclick.us",
    "yoütu.be",
    "yoütübe.co",
    "yoütübe.com",
    "youtubeshort.watch",
    "adblade.com",
    "adcash.com",
    "adcell.de",
    "adexchangecloud.com",
    "adf.ly",
    "adfoc.us",
    "adforce.com",
    "bc.vc",
    "bitl.cc",
    "btcclicks.com",
    "ceesty.com",
    "cur.lv",
    "fastclick.com",
    "getcryptotab.com",
    "gmads.net",
    "l2s.pet",
    "linkbucks.com",
    "linkshrink.net",
    "miniurl.pw",
    "nitroclicks.com",
    "ouo.io",
    "pay-ads.com",
    "petty.link",
    "pnd.tl",
    "restorecosm.bid",
    "sh.st",
    "short.es",
    "shorte.st",
    "shrtz.me",
    "udmoney.club",
    "uii.io",
    "ur-l.me",
    "vivads.net",
    "xponsor.com",
    "zeusclicks.com",
    "zipansion.com",
    "black-friday.ga",
    "boost.ink",
    "easycommerce.cf",
    "featu.re",
    "free.gg",
    "justdoit.cards",
    "makeprogress.ga",
    "pointsprizes.com",
    "referralpay.co",
    "selly.gg",
    "shoppy.gg",
    "weeklyjob.online",
    "wn.nr",
    "nakedphotos.club",
    "privatepage.vip",
    "viewc.site",
    "baymack.com",
    "btconline.io",
    "btcpool.io",
    "freebitco.in",
    "minero.cc",
    "outbuck.com",
    "alex-nv.ru",
    "alexandrnav.ru",
    "alexandrs1.ru",
    "amazingsexdating.com",
    "clooud9.xyz",
    "cloud9team.fun",
    "cloud9team.space",
    "cloudteam9.com",
    "cloudteam9.fun",
    "cs-moneiy.us",
    "csgocyber.ru",
    "csgocyber.ru",
    "easter-event.com",
    "ezence.ink",
    "ezrobux.gg",
    "fnaticprize.site",
    "fnaticwin.xyz",
    "fortnite.cards",
    "fortnite.events",
    "fortnite-christmas.com",
    "fortnite-gifts.com",
    "fortnite-giveaway.com",
    "fortnite-special.com",
    "fortnite-vbuck.com",
    "fortnite-vbucks.de",
    "fortnite-vbucks.net",
    "fortnite.cards",
    "fortnite.events",
    "fortnitevb.com",
    "free-gg.com",
    "free-steam-code.com",
    "gams-toph.xyz",
    "giveawaybot.pw",
    "intimki.com",
    "katowice.ru",
    "keymagic.me",
    "libra-sale.io",
    "lootweapons.com",
    "magicstreek.me",
    "myetherermwallet.com",
    "natus-vincerygivez.xyz",
    "navi.auction",
    "new-give.com",
    "nv-box.com",
    "nv-drop.com",
    "operation-broken.xyz",
    "oprewards.com",
    "rbxfree.com",
    "roblox-christmas.com",
    "robloxsummer.com",
    "rocketcase.xyz",
    "roll-case.com",
    "rollskin.ru",
    "rustgift.ru",
    "seamcommunlty.com",
    "seamcommunty.com",
    "sleamcomnnunity.me",
    "sleamconnunnity.me",
    "sleamcormunity.me",
    "sreancommuniity.com",
    "staemcommeuneuity.ru",
    "staerncomrmunity.com",
    "steaamcomnnunity.com",
    "steaimeecommuniity.com",
    "steam-event.com",
    "steam-gift-codes.com",
    "steam-money.org",
    "steam-promo-page.ml",
    "steam-wallet-rewards.com",
    "steamcannunlty.com",
    "steamcommanitty.ru",
    "steamcomminiity.site",
    "steamcommnnunnity.world",
    "steamcommnunty.com",
    "steamcommunity-com.xyz",
    "steamcommunniitly.ru",
    "steamcommunyru.com",
    "steamcommunyti.ru",
    "steamcommunytu.ru",
    "steamcomnuniity.ru",
    "steamcomrnuniuty.com",
    "steamcomrrnunity.com",
    "steamcomunity.ru",
    "steamconnunjty.com",
    "steamcornmuniti.xyz",
    "steammcomunity.ru",
    "steamncomnmunity.com",
    "steamprofiles.site",
    "steampromote.com",
    "steamquests.com",
    "steamreward.com",
    "steamspecial.com",
    "steamsummer.com",
    "steamtradeoffer.ml",
    "steancommuinity.me",
    "steancommutitly.ru",
    "steancomunnity.com",
    "steancomunnity.ru",
    "steancoommunlty.ru",
    "steanncomunitly.com",
    "steannconnnnunity.com",
    "stearmcommunitty.ru",
    "stearmcommunity.ru",
    "stearmcommunnitty.ru",
    "stearmcommunnity.ru",
    "steemcommunnity.ru",
    "stermccommunitty.ru",
    "stermcommuniity.com",
    "sterrmccommunity.ru",
    "stleamconnunlty-tyztradeoffernewpartnhr15902271.xyz",
    "streamcommuniuity.com",
    "streamcommunnitly.com",
    "streamcomnunely.com",
    "streancommunitiy.icu",
    "streancommunuty.ru",
    "strearmcomunity.ru",
    "steamconmunity.co",
    "steancommunity.com",
    "steancommunytiu.ru",
    "toom-skins.xyz",
    "topr-games.xyz",
    "topw-gamez.xyz",
    "topz-games.xyz",
    "trade-offers.me",
    "whatsappx.com",
    "wild-day.com",
    "winfnatic.pro",
    "wowcloud9.com",
    "wowfnatic.com",
    "wowfnatic.site",
    "getlⅰbra.tech",
    "ngrok",
    "stearncommuty.com",
    "discord-gifts.me",
    "giftdiscord.site",
    "steamcommunityz.com",
    "eonxcrypto.com",
    "steamcomminutiu.ru",
    "steamcomminytiu.ru",
    "steamncommunitu.co",
    "steamcomrnunity.ru",
    "stearmmcomunitty.ru",
    "dicsord.space",
    "steamcommunlilty.com",
    "discord.wales",
    "discord-gift.co",
    "steamcomnunnirty.ru",
    "stearmmcomunity.ru",
    "steamcomrnunitiy.com",
    "dlscord.online",
    "rocket-way.com",
    "steamcommunlilty.com",
    "linkdeej.com",
    "dlscord.press",
    "leech.is",
    "discordgivenitro.com",
    "steancomnunytu.ru",
    "discrodnitro.org",
    "steamcommytiny.com",
    "steamcommnunylti.com",
    "steamcommunityu.ru",
    "stieamcommuunitey.us",
    "steamcommunity.link",
    "stermmcomuniity.ru",
    "bit.do",
    "steamcommutyniu.com",
    "dlscord.work",
    "glft-discord.com",
    "steamcommunitiyu.com",
    "discorcl.link",
    "discorcl.art",
    "keydropcs.ru",
    "steamcommunutiy.com",
    "steamcomrninuty.link",
    "steamgivenitro.com",
    "stermcomunniity.ru",
    "steamcomnumily.com",
    "nitro-airdrop.org",
    "dicord.gift",
    "discord-nitro.su",
    "steamcommmunilty.com",
    "free-nitlross.ru",
    "diskord.ru.com",
    "discord-nitro.link",
    "steamconmumnity.com",
    "steancommunity.link",
    "freenitros.ru",
    "discordnltro.com",
    "discorb.ru.com",
    "discorcl.click",
    "discordgift.ru.com",
    "discordglft.ru",
    "discodnitro.info",
    "dlscordgift.com",
    "steamcomminuty.com",
    "discord-airdrop.com",
    "dlscord-app.com",
    "discord-app.ru.com",
    "dlscord-nitro.click",
    "steamdiscord.com",
    "dicsordgift.com",
    "discrodapp.ru",
    "discord-give.com"
  ];

  tokenGrappers.findOne({ guild: message.guild.id}, async(err, data) => {
    if(data){
      if(links.some(word => message.content.toLowerCase().includes(word))){
        deleteMessage()
      }
    }
  })

}