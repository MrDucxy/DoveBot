const discord = require('discord.js');

module.exports = {
        name: "about",
        aliases: ["info", "botinfo"],
        category: "Info",
        description: "About the bot",
        usage: "$about",
    run: async (bot, message, args) => {

        return message.channel.send("Hello! I am Cubic, a multi-purpose AI to help out with Ducxy's servers.")
    }

};

