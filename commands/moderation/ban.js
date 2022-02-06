const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix } = require("../../config.json")


module.exports = {
  name: "ban",
  description: "MOD",

  run: async (client, message, args) => {



const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You don't have enough powers to ban someone`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`I don't have powers to ban someone`)
    
    if(!args[0]) return message.channel.send(`Usage: \`${prefix}\`ban @user <reason>`)
    
    if(!target) return message.channel.send(`I can't find that member`)
    
    if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.channel.send(`You dont that much power to ban that user`)
    }
    
    if(target.id === message.author.id) return message.channel.send(`I can't ban you as you are the GOD`)







    const embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Confirm Ban?`)
      .setDescription(`${message.author.username} are you sure to ban ${target}`)

    const accepted = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(`**${message.author.username}** just  banned \`${target}\` for \`${reason || "No Reason"}\``)

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

            target.ban()
            MESSAGE.edit(accepted, rows);
            await b.reply.defer()
            
        }

        if(b.id == "reject") {
            
            MESSAGE.edit(`${message.author.username} you have canceled to ban ${target}`, rows);
            await b.reply.defer()

        }
    });


   
}};