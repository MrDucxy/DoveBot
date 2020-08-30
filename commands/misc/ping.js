const discord = require('discord.js');


module.exports = {
        name: "ping",
        aliases: ["pong", "lag", "latency"],
        category: "Misc",
        description: "Returns Pong.",
        usage: "$ping",
    run: async (bot, message, args) => {

        message.channel.send('Pong! | Latency: ' + Math.round(bot.ws.ping) + 'ms')


    }

};

