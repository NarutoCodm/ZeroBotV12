const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const db = require("quick.db");
const aa = ['Discord', 'Youtube', 'Portal', 'Server']; 
const bb = ['Hotel', 'Bank', 'School', 'Street'];
const cc = ['River', 'Mountain', 'Ocean', 'Mud'];
const dd = ['ZeroBot Development', 'Snowflake Community', 'Developers Hub', 'TownHall'];
const maxbanks = require('../../JSON/maxbank.json');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const roasts = require('../../JSON/roast.json');
const bamounts = require('../../JSON/bamount.json');
const { prefix, developerID } = require("../../config.json")
const { coin } = require('../../JSON/emoji.json');
const ms = require("ms");
const ads = require('../../JSON/ad.json');
const smess = require('../../JSON/smes.json');

module.exports = {
  name: "search",
  description: "Economy",
  aliases: ["scout"],

  run: async (client, message, args) => {

    let maxbank = maxbanks.maxbank[Math.floor((Math.random() * maxbanks.maxbank.length))];

    let smes = smess.smes[Math.floor((Math.random() * smess.smes.length))];

     let user = message.author;

     let ad = ads.ad[Math.floor((Math.random() * ads.ad.length))];

     let bamount = bamounts.bamount[Math.floor((Math.random() * bamounts.bamount.length))];

      let timeout = 20000;
        let amount = bamount;


        let ser = await db.fetch(`ser_${user.id}`);

         if (ser !== null && timeout - (Date.now() - ser) > 0) {
            let time = ms(timeout - (Date.now() - ser));

           

           

  message.lineReplyNoMention(`You have recently searched so you can have more coins in \`${time.seconds}\` seconds \n \n ${ad}`)
        } else {

           let fa = aa[Math.floor(Math.random() * aa.length)];

            let fb = bb[Math.floor(Math.random() * bb.length)];

            let fc = cc[Math.floor(Math.random() * cc.length)];

            let fd = dd[Math.floor(Math.random() * dd.length)];

          db.add(`sers_${user.id}`, 1)
            db.set(`ser_${user.id}`, Date.now())





    const discord = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} searched in ${fa}`)
    .setDescription(`You found ${amount} ${coin} ${smes}`)

    const youtube = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} searched in ${fb}`)
    .setDescription(`You found ${amount} ${coin} ${smes}`)

    const server = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} searched in ${fc}`)
    .setDescription(`You found ${amount} ${coin} ${smes}`)

    const portal = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} searched in ${fd}`)
    .setDescription(`You found ${amount} ${coin} ${smes}`)


    let button1 = new MessageButton()
    .setLabel(`${fa}`)
    .setID(`discord`)
    .setStyle("blurple");
    

    let button2 = new MessageButton()
    .setLabel(`${fb}`)
    .setID(`youtube`)
    .setStyle("red");

    let button3 = new MessageButton()
    .setLabel(`${fc}`)
    .setID(`server`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`${fd}`)
    .setID(`portal`)
    .setStyle("grey");

        let button5 = new MessageButton()
    .setLabel(`${fa}`)
    .setID(`discord`)
    .setDisabled()
    .setStyle("grey");
    

    let button6 = new MessageButton()
    .setLabel(`${fb}`)
    .setID(`youtube`)
    .setDisabled()
    .setStyle("grey");

    let button7 = new MessageButton()
    .setLabel(`${fc}`)
    .setID(`server`)
    .setDisabled()
    .setStyle("grey");

    let button8 = new MessageButton()
    .setLabel(`${fd}`)
    .setID(`portal`)
    .setDisabled()
    .setStyle("grey");


    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4);

    let rows = new MessageActionRow()
    .addComponents(button5, button6, button7, button8);

const se = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Where do you want to search?`)
    .setDescription(`*Choose an option below to start searching in that location!*`) 

    const MESSAGE = await message.channel.send(se, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 18000 });

    collector.on('collect', async (b) => {

        if(b.id == "discord") {

            MESSAGE.edit(discord, rows);
            await b.reply.defer()
            db.add(`money_${user.id}`, amount)
             db.add(`maxbank_${user.id}`, maxbank)
            
            
        }

        if(b.id == "youtube") {

            MESSAGE.edit(youtube, rows);
            await b.reply.defer()
            db.add(`money_${user.id}`, amount)
             db.add(`maxbank_${user.id}`, maxbank)
            
        }

        if(b.id == "server") {

            MESSAGE.edit(server, rows);
            await b.reply.defer()
            db.add(`money_${user.id}`, amount)
             db.add(`maxbank_${user.id}`, maxbank)
        
            
        }

        if(b.id == "portal") {

            MESSAGE.edit(portal, rows)
            await b.reply.defer()
                         db.add(`sers_${user.id}`, 1)
            db.set(`ser_${user.id}`, Date.now())
            db.add(`money_${user.id}`, amount)
             db.add(`maxbank_${user.id}`, maxbank)
            
            
        }
        
    });


        }
         

   
}};