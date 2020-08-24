const discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
        name: "meme",
        aliases: ["reddit"],
        category: "Fun",
        description: "Sends a random reddit meme",
        usage: "$meme",
    run: async (bot, message, args) => {

        const subReddits = ['meme', 'me_irl', 'dankmeme', 'memes']
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        const embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setAuthor('Cubic | Meme', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
        .setImage(img)
        .setTitle(`Subreddit: /r/${random}`)
        .setURL(`https://reddit.com/${random}`)
    
        message.reply(embed);
    }

};

