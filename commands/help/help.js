const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const reactions = ["🤣"];


module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:arrow:904908180901994556> Click the buttons below to click the help menu!`);

    const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('<a:8200verifygreen:934792547811856435> Admin, Moderation/automod & Economy <a:8200verifygreen:934792547811856435>')
        .addField("ㅤ⠀⠀⠀ \n <a:8200verifygreen:934792547811856435> **Admin** | <a:8200verifygreen:934792547811856435> **ENABLED**",
          "`nuke` `react` `snipe` \n\n<a:8200verifygreen:934792547811856435> **Moderation** | <a:yes:865963544380964864> **ENABLED** \n `addrole` `ban` `purge` `hackban` `kick` `lock` `mute` `removerole` `slowmode` `timedlockdown` `unlock` `unmute`\n\n<a:8200verifygreen:934792547811856435>**AutoModeration** | <a:8200verifygreen:934792547811856435> **ENABLED** \n `anti-alt` `autorole` `role-all`"
        )

    const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
     .setTitle('<a:8200verifygreen:934792547811856435> Info & help <a:8200verifygreen:934792547811856435>')
      .addField("⠀⠀⠀ \n <a:8200verifygreen:934792547811856435> **Info** | <a:8200verifygreen:934792547811856435> **ENABLED**",
        "`badges` `botinfo` `roleinfo` `servericon` `serverinfo` `userinfo` `invite` `uptime` `avatar` \n\n<a:8200verifygreen:934792547811856435> **Help** | <a:8200verifygreen:934792547811856435> **ENABLED**\n `bug` `help` `invite`\n\n<a:8200verifygreen:934792547811856435>**ECONOMY** |<a:8200verifygreen:934792547811856435> **ENABLED** \n  `balance` `daily` `deposit` `give` `inventory` `leaderboard` `withdraw` `search`"
        )

    const embed3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('<a:8200verifygreen:934792547811856435> Fun & Images <a:8200verifygreen:934792547811856435>')
      .addField("ㅤ⠀⠀⠀ \n <a:8200verifygreen:934792547811856435> **Fun** | <a:8200verifygreen:934792547811856435> **ENABLED**","`ascii` `coinflip` `drake` `emojify` `joke` `meme` `rps` `slap` `trumptweet` `idp`\n\n <a:8200verifygreen:934792547811856435> **Image** | <a:8200verifygreen:934792547811856435> **ENABLED** \n`achievement` `captcha` `hug` `gay` `meeting` `rip` `tweet` `300yr`",)

    const embed4 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`<a:8200verifygreen:934792547811856435> Ticket & Owner <a:8200verifygreen:934792547811856435>`)
      .addField("ㅤ⠀⠀⠀ \n <a:8200verifygreen:934792547811856435> **Ticket** |<a:8200verifygreen:934792547811856435> **ENABLED**",
        "`tadd` `tclose` `tdelete` `tremove` `topen` `trename`\n\n<a:8200verifygreen:934792547811856435> **Owner** | <a:8200verifygreen:934792547811856435> **ENABLED** \n`eval` `leaveserver` `serverlist` `status`\n\n<a:8200verifygreen:934792547811856435>**UTILITY** | <a:8200verifygreen:934792547811856435> **ENABLED** \n`vote` `advice` `findemoji` `members or membercount` `announce` `enlarge` `afk`\n\n<a:8200verifygreen:934792547811856435>**GAMES** | <a:8200verifygreen:934792547811856435> **ENABLED** \n`8ball` `fight` `rps` `snake` `trivia` " //bro here 
        )
      .setThumbnail(client.user.displayAvatarURL())

    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`Admin , Auto/Moderation`)
    .setID(`help1`)
    .setEmoji(`934794987533656064`)
    .setStyle("green");

    let button2 = new MessageButton()
    .setLabel(`Info, Help & Economy`)
    .setID(`help2`)
    .setEmoji(`934812208498614303`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`Fun & Images`)
    .setID(`help3`)
    .setEmoji(`934792553021194281`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Ticket , Owner, UTILITY, Games`)
    .setID(`help4`)
    .setEmoji(`934796446237069363`)
    .setStyle("green");

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row);
            await b.reply.defer()

        }


    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
    })

    }
  };