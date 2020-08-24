const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
        name: "porngif",
        aliases: ["nsfwgif", "pgif", "porn"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$porn",
    run: async (bot, message, args) => {


        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: 'pgif'})
            .end((err, response) => {
                let embed = new discord.MessageEmbed()
                .setTitle('Have a nice gif!')
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

