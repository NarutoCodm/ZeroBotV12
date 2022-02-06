const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js")
const Random = require("image-cord");


module.exports = {
  name: "pussy",
  description: "Anime",

  run: async (client, message, args) => {

    const Pussy = await Random.Pussy();
        return message.channel.send(Pussy);
   
}};