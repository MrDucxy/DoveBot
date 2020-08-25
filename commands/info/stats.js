const discord = require('discord.js');
const { readdirSync } = require("fs");

module.exports = {
        name: "stats",
        aliases: ["about", "info"],
        category: "Info",
        description: "Bot Stats",
        usage: "$stats",
    run: async (bot, message, args) => {
        
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;

                let embed = new discord.MessageEmbed()
                .setColor('#007dff')
                .setThumbnail('https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
                .setAuthor('Cubic | Bot Stats', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
                .addField('Stats',
                 `**Creator: **<@297195707159281665>
                 **Name: **${bot.user.username}
                 **Servers: **${bot.guilds.cache.size}
                 **Uptime: **${uptime}
                 **Ping: **${bot.ws.ping}ms`)
        
                message.reply(embed);

    }

};

