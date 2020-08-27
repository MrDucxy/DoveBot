const discord = require('discord.js');
const trev = require('trev')

module.exports = {
        name: "anal",
        aliases: ["buttfuck"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$anal",
    run: async (bot, message, args) => {

      let anal = await trev.nsfw.anal();

      if (message.channel.nsfw === true) {
        try {
          let embed = new discord.MessageEmbed()
          .setTitle('Have some deeeeep anal!')
          .setDescription(anal.title)
          .setImage(anal.media)
          .setColor('#007dff')
          .setFooter(`From: ${anal.subreddit} | Powered By: Trev`)
          message.channel.send(embed);
        } catch (error) {
          message.channel.send('Error! This is probably caused by shitty Trev lol.');
        }
      } else {
          message.channel.send("This isn't an NSFW channel!")
      }

    } 

};

