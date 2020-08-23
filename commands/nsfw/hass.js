const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
        name: "hass",
        aliases: ["hentaiass", "hentaibooty"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$hass",
    run: async (bot, message, args) => {


        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: 'hass'})
            .end((err, response) => {
                let embed = new discord.MessageEmbed()
                .setTitle('Have some hentai ass!')
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

