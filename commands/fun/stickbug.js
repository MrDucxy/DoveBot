const discord = require('discord.js');

module.exports = {
        name: "stickbug",
        aliases: ["stickroll"],
        category: "Fun",
        description: "get stickbugged lol",
        usage: "$stickbug",
    run: async (bot, message, args) => {

        const attachment = new discord.MessageAttachment('./commands/fun/media/stickbug.mp4')
        message.channel.send(attachment)

    }

};

