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
        .setThumbnail('https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
        .setAuthor('Cubic | Tips', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
        .addField('Programming Tip', replies[result])

        message.reply(embed);
        
    }

};

