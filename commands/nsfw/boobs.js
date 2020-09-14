const discord = require('discord.js');
const trev = require('trev')

module.exports = {
        name: "boobs",
        aliases: ["animeporn"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$boobs",
    run: async (bot, message, args) => {

      let boobs = await trev.nsfw.boobs();

      if (message.channel.nsfw === true) {
        try {
          let embed = new discord.MessageEmbed()
          .setTitle('Have some nice boobs!')
          .setDescription(boobs.title)
          .setImage(boobs.media)
          .setColor('#000000')
          .setFooter(`From: ${boobs.subreddit} | Powered By: Trev`)
          message.channel.send(embed);
        } catch (error) {
          message.channel.send('Error! This is probably caused by shitty Trev lol.');
        }
      } else {
          message.channel.send("This isn't an NSFW channel!")
      }

    } 

};

