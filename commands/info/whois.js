const discord = require('discord.js');

module.exports = {
        name: "whois",
        aliases: ["userinfo", "ui", "whos"],
        category: "Info",
        description: "Get info on someone.",
        usage: "$whois <mention>",
    run: async (bot, message, args) => {

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!target) return message.channel.send('You must mention someone!')
        let embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setTitle(target.user.username)
        .setThumbnail(target.user.avatarURL())
        .setAuthor('Cubic | WhoIs/User Lookup', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
        .addField('User Info',
         `**Display Name: **${target.displayName}
         **ID: **${target.user.id}
         **Creation Date: **${target.user.createdAt}
         **Join Date: **${target.joinedAt}`)

        message.reply(embed);
        
    }

};

