const discord = require('discord.js');

module.exports = {
        name: "kick",
        category: "Moderation",
        description: "Kicks a user",
        usage: "$kick <mention>",
    run: async (bot, message, args) => {

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        let reason = args.slice(1).join(' ');
        let findLogs = message.guild.channels.cache.find(channel => channel.name === 'logs');
    
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not have permission to do that!');
    
        if(!target) return message.reply('You did not mention anybody!');
        if(target.hasPermission('KICK_MEMBERS')) return message.reply('You cannot kick another moderator!');
        if(!reason) return message.reply('Please specify a reason to kick this member!');
        if(!findLogs){
            try {
                await message.channel.guild.channels.create('logs')
            } catch (error) {
                return message.channel.send('Logs channel does not exist and I have insufficient permissions to create one.')
            }
        }
    
        let logs = message.guild.channels.cache.find(channel => channel.name === 'logs');
    
        let embed = new discord.MessageEmbed()
            .setColor('#007dff')
            .setThumbnail(target.avatarURL)
            .addField('Kicked Member', `<@${target.id}> (${target.user.id})`)
            .addField('Kicked By', `<@${message.author.id}> (${message.author.id})`)
            .addField('Kicked Time', message.createdAt)
            .addField('Kicked In', message.channel)
            .addField('Reason', reason)
    
        message.channel.send(`<@${target.id}> has been kicked for: **${reason}**`);
        target.kick();
        logs.send(embed);
    }

};

