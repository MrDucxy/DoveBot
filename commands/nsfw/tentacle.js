const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
        name: "tentacle",
        aliases: ["squid", "squidward"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$tentacle",
    run: async (bot, message, args) => {


        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: 'tentacle'})
            .end((err, response) => {
                let embed = new discord.MessageEmbed()
                .setTitle('Have some tentacles')
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

