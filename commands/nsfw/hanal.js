const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
        name: "hanal",
        aliases: ["hentaianal", "hentaibuttfuck"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$hanal",
    run: async (bot, message, args) => {


        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: 'hanal'})
            .end((err, response) => {
                let embed = new discord.MessageEmbed()
                .setTitle('Have some hentai anal!')
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

