const discord = require('discord.js');
const randomPuppy = require('random-puppy');
const { id } = require('common-tags');

module.exports = {
        name: "reddit",
        aliases: ["subreddit"],
        category: "Fun",
        description: "Get an image from your favorite subreddit!",
        usage: "$reddit",
    run: async (bot, message, args) => {

        if(!args[0])return message.channel.send('Please specify a subreddit!')
        const img = await randomPuppy(args[0]);
        if(!randomPuppy) return message.channel.send('That subreddit does not exist or is marked as NSFW.')
    
        const embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setAuthor('Cubic | Reddit', 'https://www.redditinc.com/assets/images/site/reddit-logo.png')
        .setImage(img)
        .setTitle(`Subreddit: /r/${args[0]}`)
        .setURL(`https://reddit.com/r/${args[0]}`)
    
        message.reply(embed);
    }

};

