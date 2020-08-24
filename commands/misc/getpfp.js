const discord = require('discord.js');

module.exports = {
        name: "getpfp",
        aliases: ["avatar", "getavatar"],
        category: "Misc",
        description: "Gets a user's avatar.",
        usage: "$getpfp <mention>",
    run: async (bot, message, args) => {

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!target) return message.reply('You did not mention anybody!');
    
        message.channel.send(target.user.displayAvatarURL({dynamic : true}));
    }

};

