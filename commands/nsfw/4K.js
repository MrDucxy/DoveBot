const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
        name: "4k",
        aliases: ["hdporn"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$4k",
    run: async (bot, message, args) => {


        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: '4k'})
            .end((err, response) => {
                let embed = new discord.MessageEmbed()
                .setTitle('NSFW in 4k!')
                .setImage(response.body.message)
                .setColor('#007dff')
                .setFooter('NSFW images provided by: https://nekobot.xyz/')
                message.channel.send(embed);
            });
          } else {
            message.channel.send("This isn't an NSFW channel!")
          }

          
        
    } 

};

