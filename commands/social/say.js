const discord = require('discord.js');
var figlet = require('figlet');

module.exports = {
        name: "say",
        aliases: ["talk"],
        category: "Social",
        description: "Talk through the bot",
        usage: "$say <text>",
    run: async (bot, message, args) => {

        if(message.guild.id === '707113280275087462') return;
        if(!args[0]) return message.channel.send('Please specify some text to say.');

        if(message.content.includes('@everyone')) return message.channel.send('Nice try, you cannot mass ping.')
        if(message.content.includes('@here')) return message.channel.send('Nice try, you cannot mass ping.')

        message.channel.send(args.join(' '));

    }

};

