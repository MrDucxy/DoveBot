const discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
        name: "reddit",
        aliases: ["subreddit"],
        category: "Fun",
        description: "Get an image from your favorite subreddit!",
        usage: "$reddit",
    run: async (bot, message, args) => {

        if(!args[0])return message.channel.send('Please specify a subreddit!')
        const img = await randomPuppy(args[0]);
    
        const embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setAuthor('Cubic | Reddit', 'https://www.redditinc.com/assets/images/site/reddit-logo.png')
        .setImage(img)
        .setTitle(`Subreddit: /r/${args[0]}`)
        .setURL(`https://reddit.com/r/${args[0]}`)
    
        message.reply(embed);
    }

};

