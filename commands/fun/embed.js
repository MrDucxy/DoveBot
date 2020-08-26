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
        .setColor('#007dff')
        .setAuthor('Cubic | User Embed', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
        .setThumbnail(message.author.avatarURL())
        .setTitle(`Embed From: ${message.author.username}`)
        .setDescription(args.join(' '))
    
        message.reply(embed);
    }

};

