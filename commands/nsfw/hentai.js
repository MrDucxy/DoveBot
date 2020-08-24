const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
        name: "hentai",
        aliases: ["animeporn", "aporn"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$hentai",
    run: async (bot, message, args) => {


        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: 'hentai'})
            .end((err, response) => {
                let embed = new discord.MessageEmbed()
                .setTitle('Have some hentai')
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

