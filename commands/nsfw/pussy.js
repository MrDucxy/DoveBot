const discord = require('discord.js');
const trev = require('trev')

module.exports = {
        name: "pussy",
        aliases: ["animeporn"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$pussy",
    run: async (bot, message, args) => {

      let pussy = await trev.nsfw.pussy();

      if (message.channel.nsfw === true) {
        try {
          let embed = new discord.MessageEmbed()
          .setTitle('Have some nice pussy!')
          .setDescription(pussy.title)
          .setImage(pussy.media)
          .setColor('#007dff')
          .setFooter(`From: ${pussy.subreddit} | Powered By: Trev`)
          message.channel.send(embed);
        } catch (error) {
          message.channel.send('Error! This is probably caused by shitty Trev lol.');
        }
      } else {
          message.channel.send("This isn't an NSFW channel!")
      }

    } 

};

