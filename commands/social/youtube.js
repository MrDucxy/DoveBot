const discord = require('discord.js');
const { YouTube } = require('popyt')
const youtube = new YouTube('AIzaSyD7CoeqcMFRIHVnq2C2tomXm1BZ05gXGEc')

module.exports = {
        name: "youtube",
        aliases: ["yt", "ytsearch"],
        category: "Social",
        description: "Get info on a YouTube video.",
        usage: "$youtube <video name>",
    run: async (bot, message, args) => {

        if(!args[0]) return message.channel.send('Please enter a song name!')

        try {
            const video = await youtube.getVideo(args.join(' '), 1)
            if(!video) return message.channel.send('Could not find a YouTube video with that name.')

          let embed = new discord.MessageEmbed()
          .setColor('#007dff')
          .setThumbnail(video.thumbnails.default.url)
          .setTitle(video.title)
          .setURL(video.shortUrl)
          .addField('Video Information',
           `**Length: ** ${video.minutes} Minutes, ${video.seconds} Seconds
           **Comments: **${video.commentCount}
           **Video ID: **${video.id}
           **Made For Kids? **${video.kids.madeForKids ? "Yes":"No"}`
           )
           .setFooter(`👍: ${video.likes} | 👎: ${video.dislikes} | 👁️: ${video.views}`)

          message.channel.send(embed)

        } catch (error) {
            message.channel.send('An error has occurred.')
        }

    }

};

