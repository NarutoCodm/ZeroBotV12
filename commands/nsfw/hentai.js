const discord = require("discord.js");
const akaneko = require('akaneko');
const colors = require('./../../colors.json')

module.exports = {
  name: "hentai",
  aliases: [],
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("💢 This channel dosen't support nsfw content")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor(colors.uptime)
    akanekoSan.setImage(akaneko.nsfw.hentai());
    return message.channel.send(akanekoSan);
      
    }
  }
}

