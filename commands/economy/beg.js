const { MessageEmbed } = require("discord.js");
const Discord = require('discord-reply')
const db = require("quick.db");
const ms = require("ms");
const names = require('../../JSON/name.json');
const bamounts = require('../../JSON/bamount.json');
const begls = require('../../JSON/begl.json');
const maxbanks = require('../../JSON/maxbank.json');
const ads = require('../../JSON/ad.json');
const { prefix, developerID } = require("../../config.json")
const { coin } = require('../../JSON/emoji.json');

module.exports = {
 
        name: "beg",
        category: "economy",
        description: "Beg for money",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {

      let name = names.name[Math.floor((Math.random() * names.name.length))];

      let bamount = bamounts.bamount[Math.floor((Math.random() * bamounts.bamount.length))];

      let begl = begls.begl[Math.floor((Math.random() * begls.begl.length))];

      let ad = ads.ad[Math.floor((Math.random() * ads.ad.length))];

      let maxbank = maxbanks.maxbank[Math.floor((Math.random() * maxbanks.maxbank.length))];


        let user = message.author;

        let timeout = 10000;
        let amount = bamount;

        let beg = await db.fetch(`beg_${user.id}`);

        if (beg !== null && timeout - (Date.now() - beg) > 0) {
            let time = ms(timeout - (Date.now() - beg));

  message.lineReplyNoMention(`Stop begging so much, it makes you look like a very poor dumb guy. You can have more coins in \`${time.seconds}\` seconds \n \n ${ad}`)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setTitle(`${name}`)
                .setDescription(`${begl} ${amount} coins`);
            message.lineReplyNoMention(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.add(`begs_${user.id}`, 1)
            db.set(`beg_${user.id}`, Date.now())
            db.add(`maxbank_${user.id}`, maxbank)


        }
    }
};