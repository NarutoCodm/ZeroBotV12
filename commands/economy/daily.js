const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
const adailys = require('../../JSON/adaily.json');
const { coin } = require('../../JSON/emoji.json');

module.exports = {
    
        name: "daily",
        aliases: ["dail"],
        category: "economy",
    run: async (client, message, args) => {
        let user = message.author;

        let adaily = adailys.adaily[Math.floor((Math.random() * adailys.adaily.length))];

        let timeout = 86400000;
        let amount = adaily;

        let daily = await db.fetch(`daily_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
                .setColor("#FF0000")
                .setTitle(`You've already claimed your daily today`)
                .setDescription(`\nNow, you can claim next daily reward in \n **${time.hours}hours ${time.minutes}minutes ${time.seconds}seconds** `)
                .setTimestamp()
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setTitle(`Daily Reward`)
                .setDescription(`You've claimed your daily reward of ${amount} freaking coins. See your purse`);
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())


        }
    }
}