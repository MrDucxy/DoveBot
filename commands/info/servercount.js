const discord = require('discord.js');

module.exports = {
        name: "servercount",
        aliases: ["servers"],
        category: "Info",
        description: "How many servers use Cubic",
        usage: "$servercount",
    run: async (bot, message, args) => {

        return message.channel.send(`I am currently watching over **${bot.guilds.cache.size}** servers!`)
    }

};

