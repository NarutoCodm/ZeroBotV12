const { Discord, MessageEmbed } = require("discord.js")
module.exports = {
  name: "codes",
  aliases: [],
  category: "owner",
  description: "Evaluates the code you put in but it's only available for the my Developer and no one else!!!!!",
  ownerOnly: true,
  run: async (bot, message, args) => {
    let embed = new MessageEmbed()
      .setTitle("━━━━<a:728495315711164437:934812216899797012>  Download Links <a:728495315711164437:934812216899797012> ━━━━━" )
      .setDescription("NArutoCodm")
      .setThumbnail("https://cdn.discordapp.com/avatars/933351535109373972/0b734020dcf83b8246abc29e06bb4961.webp?size=1024")
      .addField("<a:arrow:934812215171751957>  DropDown Roles | Credits: https://github.com/Nuggies-bot", "> [Click here for repl](https://replit.com/@akg1111/DropDown-Roles?v=1)")
      .addField("<a:arrow:934812215171751957>  Invite Manager | Credits: https://github.com/TheShadowGamer ", "> [Click here for repl](https://replit.com/@akg1111/Invite-Manager-1?v=1)")
      .addField("<a:arrow:934812215171751957>  Button Music Bot | Credits: https://discord.gg/B2mQ8BGdVj ", "> [Click here for repl](https://replit.com/@akg1111/MUSICBOT-WITHBUTTONS-XD-1?v=1)")
      .addField("<a:arrow:934812215171751957>  Even Better Music Bot | Credits: https://discord.com/invite/2YEcB3D7eNg ", "> [Click here for repl](https://replit.com/@akg1111/Music-Bot-With-Buttons-3?v=1)")
      .addField("<a:arrow:934812215171751957>  Giveaway Bot | Credits: NarutoCodm ", "> [Click here for repl](https://github.com/NarutoCodm/GiveawayBotWithReq.git)")
      .addField("<a:arrow:934812215171751957>  ZeroBot Code | Credits: NarutoCodm ", "> [Click here for repl](https://replit.com/@ZeroBotCodes/ZeroBotV12?v=1)")
      .addField("<a:arrow:934812215171751957>  Modmail Bot | Credits: NarutoCodm ", "> [Click here for repl](https://replit.com/@ZeroBotCodes/MODMAILBOT?v=1)")
      .setColor("cccfff")
      .setImage("https://cdn.discordapp.com/attachments/939872592817438810/948430373329731594/standard_2.gif")
    
    message.channel.send(embed)
    
  }
}