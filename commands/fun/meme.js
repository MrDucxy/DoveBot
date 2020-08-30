const discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
        name: "meme",
        category: "Fun",
        description: "Sends a random reddit meme",
        usage: "$meme",
    run: async (bot, message, args) => {

        const subReddits = ['meme', 'me_irl', 'dankmeme', 'memes']
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        const embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setAuthor('Cubic | Meme', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
        .setImage(img)
        .setTitle(`Subreddit: /r/${random}`)
        .setURL(`https://reddit.com/${random}`)
    
        message.reply(embed);
    }

};

