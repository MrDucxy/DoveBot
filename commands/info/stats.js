const discord = require('discord.js');

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
                .setThumbnail('https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
                .setAuthor('Cubic | Bot Stats', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
                .addField('Stats',
                 `**Creator: **<@297195707159281665>
                 **Name: **${bot.user.username}
                 **Servers: **${bot.guilds.cache.size}
                 **Uptime: **${uptime}
                 **Ping: **${bot.ws.ping}ms`)
        
                message.reply(embed);

    }

};

