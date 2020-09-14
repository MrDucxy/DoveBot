const discord = require('discord.js');

module.exports = {
        name: "embed",
        aliases: ["sayembed"],
        category: "Fun",
        description: "Send an embed through the bot",
        usage: "$embed <text>",
    run: async (bot, message, args) => {

        if(!args[0])return message.channel.send('Please specify some text!');
    
        const embed = new discord.MessageEmbed()
        .setColor('#000000')
        .setAuthor('Dove | User Embed', bot.user.avatarURL())
        .setThumbnail(message.author.avatarURL())
        .setTitle(`Embed From: ${message.author.username}`)
        .setDescription(args.join(" "))
    
        message.reply(embed);
    }

};

