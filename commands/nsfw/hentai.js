const discord = require('discord.js');
const trev = require('trev')

module.exports = {
        name: "hentai",
        aliases: ["animeporn"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$hentai",
    run: async (bot, message, args) => {

      let hentai = await trev.nsfw.hentai();

      if (message.channel.nsfw === true) {
        try {
          let embed = new discord.MessageEmbed()
          .setTitle('Have some nice hentai!')
          .setDescription(hentai.title)
          .setImage(hentai.media)
          .setColor('#007dff')
          .setFooter(`From: ${hentai.subreddit} | Powered By: Trev`)
          message.channel.send(embed);
        } catch (error) {
          message.channel.send('Error! This is probably caused by shitty Trev lol.');
        }
      } else {
          message.channel.send("This isn't an NSFW channel!")
      }

    } 

};

