const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
        name: "gonewild",
        aliases: ["wild"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$gonewild",
    run: async (bot, message, args) => {


        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: 'gonewild'})
            .end((err, response) => {
                let embed = new discord.MessageEmbed()
                .setTitle('NSFW gone wild!')
                .setImage(response.body.message)
                .setColor('BLACK')
                .setFooter('NSFW images provided by: https://nekobot.xyz/')
                message.channel.send(embed);
            });
          } else {
            message.channel.send("This isn't an NSFW channel!")
          }

          
        
    } 

};

