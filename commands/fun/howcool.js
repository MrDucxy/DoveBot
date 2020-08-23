const discord = require('discord.js');

module.exports = {
        name: "howcool",
        aliases: ["coolnes", "cool"],
        category: "Fun",
        description: "Shows how cool someone is.",
        usage: "$howcool",
    run: async (bot, message, args) => {

        let target = message.guild.member(message.mentions.users.first());
        if(!target) return message.reply('You did not mention anybody!');
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
    
        message.channel.send(`<@${target.id}>` + ' is ' + between(1, 100) + '% cool :sunglasses:');
    }

};

