const discord = require('discord.js');

module.exports = {
        name: "howgay",
        aliases: ["gaymeter"],
        category: "Fun",
        description: "Shows how gay someone is.",
        usage: "$howgay <mention>",
    run: async (bot, message, args) => {

        let target = message.guild.member(message.mentions.users.first());
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
    
        message.channel.send(`<@${target.id}>` + ' is ' + between(1, 100) + '% gay :rainbow_flag:');
        if(!target) return message.channel.send(`You are ` + between(1, 100) + '% gay :rainbow_flag:')
        else { message.channel.send(`<@${target.id}>` + ' is ' + between(1, 100) + '% gay :rainbow_flag:'); }
    }

};

