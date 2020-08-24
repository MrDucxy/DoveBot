const discord = require('discord.js');

module.exports = {
        name: "guildinfo",
        aliases: ["serverinfo", "si", "gi"],
        category: "Info",
        description: "Server information",
        usage: "$guildinfo",
    run: async (bot, message, args) => {

        let embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .addField('Server Info',
         `**Name: **${message.guild.name}
         **ID: **${message.guild.id}
         **Members: **${message.guild.memberCount}
         **Owner: **${message.guild.owner.user.username}
         **Created: **${message.guild.createdAt}`)

        message.reply(embed);
        
    }

};

