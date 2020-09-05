const discord = require('discord.js');

module.exports = {
        name: "killswitch",
        aliases: ["killbot"],
        category: "Owner",
        description: "Kills the bot.",
        usage: "$killswitch",
    run: async (bot, message, args,) => {

        if(message.author.id !== ['297195707159281665', '299263276028788737']){
            return message.channel.send('Only Ducxy can run this command.')
        }

        message.channel.send('Bot is now shutting down...')

        function kill() {
            bot.destroy()
        }
    
        setTimeout(kill, 1000);
    }

};

