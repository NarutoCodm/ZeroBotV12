const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { coin } = require('../../JSON/emoji.json');
const { prefix, developerID } = require("../../config.json")
const math = require("mathjs");

module.exports = {
 
    name: "pay",
    aliases: ["give"],
    category: "economy",
    description: "Pay to Somebody",
    usage: "[mention | ID] <amount>",
    accessableby: "everyone"
  ,
  run: async (bot, message, args) => {

  let user2 = message.author
    if (!args[0]) return message.channel.send("Please mention a user you wanna give!");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()
      );
    if (!user) return message.channel.send("Please mention a user you wanna give!");

    let member = db.fetch(`money_${user2.id}`);


    if (!args[0]) {
      return message.channel.send(`Please mention a user you wanna give!`);
    }
    let embed2 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`❌ You cannot pay yourself`);

    if (user.user.id === message.author.id) {
      return message.channel.send(`Hey Dumb, You cannot give coins yourself`);
    }


    if (!args[1]) {
      return message.channel.send(`Specify an amount of freaking coins you wanna give!`);
    }
    

    if (isNaN(args[1])) {
      return message.channel.send(`Please enter A valid amount!`);
    }


    if (member < args[1]) {
      return message.channel.send(`Seems like you are poor, Go beg somewhere. You don't have that much coins`);
    }

    let z = math.evaluate(`${member} - ${args[1]}`);


     const embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Confirm Payment`)
    .setDescription(`<@${message.author.id}> are you sure you want to give ${args[1]} to **${user.user.username}** `)

    const accepted = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Paypment successfull`)
    .setDescription(`You payed ${args[1]} freaking coins to ${user.displayName} \n\n Now you have ${z} ${coin} in purse`)


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
    .setStyle("grey");

    let button4 = new MessageButton()
    .setLabel(`Cancel`)
    .setID(`dreject`)
    .setDisabled()
    .setStyle("grey");

    let row = new MessageActionRow()
    .addComponents(button1, button2);

    let rows = new MessageActionRow()
    .addComponents(button3, button4);



    const MESSAGE = await message.channel.send(embed, row);
 const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter);

    collector.on('collect', async (b) => {

        if(b.id == "accept") {
           db.add(`money_${user.id}`, args[1]);
    db.subtract(`money_${user2.id}`, args[1]);

            MESSAGE.edit(accepted, rows);
            await b.reply.defer()
            
        }

        if(b.id == "reject") {
            
            MESSAGE.edit(`You have canceled your payment`, rows);
            await b.reply.defer()

        }
    });

  }
};