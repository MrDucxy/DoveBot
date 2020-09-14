const discord = require('discord.js');
const trev = require('trev')

module.exports = {
        name: "ass",
        aliases: ["booty"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$ass",
    run: async (bot, message, args) => {

      let ass = await trev.nsfw.ass();

      if (message.channel.nsfw === true) {
        try {
          let embed = new discord.MessageEmbed()
          .setTitle('Have some round ass!')
          .setDescription(ass.title)
          .setImage(ass.media)
          .setColor('#007dff')
          .setFooter(`From: ${ass.subreddit} | Powered By: Trev`)
          message.channel.send(embed);
        } catch (error) {
          message.channel.send('Error! This is probably caused by shitty Trev lol.');
        }
      } else {
          message.channel.send("This isn't an NSFW channel!")
      }

    } 

};

