const discord = require('discord.js');

module.exports = {
        name: "guildinfo",
        aliases: ["serverinfo", "si", "gi"],
        category: "Info",
        description: "Server information",
        usage: "$guildinfo",
    run: async (bot, message, args) => {

        try {

            let embed = new discord.MessageEmbed()
            .setColor('#007dff')
            .setTitle(message.guild.name)
            .setThumbnail(message.guild.iconURL())
            .setAuthor('Cubic | Guild Info', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
            .addField('Server Info',
             `**Name: **${message.guild.name}
             **ID: **${message.guild.id}
             **Members: **${message.guild.memberCount}
             **Owner: **${message.guild.owner.user.tag}
             **Created: **${message.guild.createdAt}`)
    
            message.reply(embed);
            
        } catch (error) {

            let embed = new discord.MessageEmbed()
            .setColor('#007dff')
            .setTitle(message.guild.name)
            .setThumbnail(message.guild.iconURL())
            .setAuthor('Cubic | Guild Info', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
            .addField('Server Info',
             `**Name: **${message.guild.name}
             **ID: **${message.guild.id}
             **Members: **${message.guild.memberCount}
             **Created: **${message.guild.createdAt}`)
    
            message.reply(embed);
            
        }
        
    }

};

