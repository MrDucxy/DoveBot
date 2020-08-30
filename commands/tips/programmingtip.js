const discord = require('discord.js');
const replyFile = require('./tipsArrays/devTips.json')

module.exports = {
        name: "programmingtip",
        aliases: ["devtip", "codetip", "devstip"],
        category: "Tips",
        description: "Gives you a random tip for helping out with programming",
        usage: "$programmingtip",
    run: async (bot, message, args) => {

        let replies = replyFile.devTips;

        let result = Math.floor((Math.random() * replies.length));

        let embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setThumbnail('https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
        .setAuthor('Cubic | Tips', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
        .addField('Programming Tip', replies[result])

        message.reply(embed);
        
    }

};

