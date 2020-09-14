const discord = require('discord.js');
var figlet = require('figlet');

module.exports = {
        name: "say",
        aliases: ["talk"],
        category: "Social",
        description: "Talk through the bot",
        usage: "$say <text>",
    run: async (bot, message, args) => {

        if(!args[0]) return message.channel.send('Please specify some text to say.');


        message.channel.send(args.join(' '));

    }

};

