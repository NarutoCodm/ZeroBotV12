//only for creators
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "a2",
  aliases: ["a2"],
  description: "Get accsess",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("**__How to get Code__**")
      .setDescription(`<:Right:948818330054164540>  Subscribe The channel you want to get accsess     
<:Right:948818330054164540>  Send The ScreenShot in <#949297862846586940>     
<:Right:948818330054164540>  Ping <@835164331741413426> or <@&949297783133859890>`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Click on these buttons to Get the channels")
      .setColor("blurple")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('840260133686870036')
      .setLabel('NarutoCodm') 
      .setURL("https://www.youtube.com/channel/UCpW4KtW2TLxWi_B0WgDfWEQ")


      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('SOON!') 
      .setEmoji('840260133686870036')
      .setURL("https://www.youtube.com/channel/UCpW4KtW2TLxWi_B0WgDfWEQ")
 
      return message.channel.send(helpEmbed,{
        button: [button1,button3],
      });

  },
};
