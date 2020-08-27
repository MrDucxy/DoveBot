const discord = require('discord.js');
const trev = require('trev')

module.exports = {
        name: "reddit",
        aliases: ["subreddit"],
        category: "NSFW",
        description: "Shows some nice NSFW content.",
        usage: "$pussy",
    run: async (bot, message, args) => {

      let image = await trev.getCustomSubreddit(`/r/${args[0]}`)

      if (image.over_18 && message.channel.nsfw === true) {
        try {
          let embed = new discord.MessageEmbed()
          .setTitle(`Subreddit: ${image.subreddit}`)
          .setURL(image.permalink)
          .setDescription(image.title)
          .setImage(image.media)
          .setColor('#007dff')
          .setFooter(`Powered By: Trev`)
          message.channel.send(embed);
        } catch (error) {
          message.channel.send('Error! This is probably caused by shitty Trev lol.');
        }
      } else if(image.over_18 && message.channel.nsfw === false){
          message.channel.send("This isn't an NSFW channel!")
      }
      else{
        try {
            let embed = new discord.MessageEmbed()
            .setTitle(`From: ${image.subreddit}`)
            .setURL(image.permalink)
            .setDescription(image.title)
            .setImage(image.media)
            .setColor('#007dff')
            .setFooter(`Powered By: Trev`)
            message.channel.send(embed);
          } catch (error) {
            message.channel.send('Error! This is probably caused by shitty Trev lol.');
          }
      }

    } 

};

