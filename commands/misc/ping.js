const discord = require('discord.js');
var pingJS = require('ping-lite');


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

