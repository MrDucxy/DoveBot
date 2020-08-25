const discord = require('discord.js');

module.exports = {
        name: "ban",
        category: "Moderation",
        description: "Bans a user",
        usage: "$ban <mention>",
    run: async (bot, message, args) => {

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        let reason = args.slice(1).join(' ');
        let findlogs = message.guild.channels.cache.find(channel => channel.name === 'logs');
    
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You do not have permission to do that!');
    
        if(!target) return message.reply('You did not mention anybody!');
        if(target.hasPermission('KICK_MEMBERS')) return message.reply('You cannot kick another moderator!');
        if(!reason) return message.reply('Please specify a reason to kick this member!');
        if(!findlogs){
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
            .addField('Banned Member', `<@${target.id}> (${target.user.id})`)
            .addField('Banned By', `<@${message.author.id}> (${message.author.id})`)
            .addField('Banned Time', message.createdAt)
            .addField('Banned In', message.channel)
            .addField('Reason', reason)
            .setAuthor('Cubic | Moderation', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
    
        message.channel.send(`<@${target.id}> has been banned for: **${reason}**`);
        message.guild.members.ban(target);
        logs.send(embed);
    }

};

