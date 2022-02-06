const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID } = require("../../config.json")

module.exports = {
  name: "deletechannel",
  aliases: ["dchannel", "delchannel"],
  description: "MOD",

  run: async (client, message, args) => {

    
    const reason = args.slice(1).join(" ")

    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`I dont have permission to delete role`)
    
   if (!message.member.hasPermission("MANAGE_CHANNELS")) {
	return message.channel.send("You don't have enough Permissions")
	}
        const fetchedChannel = message.mentions.channels.first();
	if (!fetchedChannel) {
	return message.channel.send(`Usage: \`${prefix}\`delchannel <channel> <reason>`)
        }






    const embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Confirm Delete?`)
      .setDescription(`${message.author.username} are you sure to delete ${fetchedChannel}`)

    const accepted = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(`**${message.author.username}** has  deleted \`${fetchedChannel}\` channel. \n Reason: \`${reason || "Not provided"}\``)

    let button1 = new MessageButton()
    .setLabel(`Confirm`)
    .setID(`accept`)
    .setStyle("green");
    

    let button2 = new MessageButton()
    .setLabel(`Cancel`)
    .setID(`reject`)
    .setStyle("red");

    let button3 = new MessageButton()
    .setLabel(`Confirm`)
    .setID(`daccept`)
    .setDisabled()
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Cancel`)
    .setID(`dreject`)
    .setDisabled()
    .setStyle("red");

    let row = new MessageActionRow()
    .addComponents(button1, button2);

    let rows = new MessageActionRow()
    .addComponents(button3, button4);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "accept") {

            fetchedChannel.delete()
            MESSAGE.edit(accepted, rows);
            await b.reply.defer()
            
        }

        if(b.id == "reject") {
            
            MESSAGE.edit(`${message.author.username}, canceled to delete ${fetchedChannel} channel`, rows);
            await b.reply.defer()

        }
    });


   
}};