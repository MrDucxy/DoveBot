const discord = require('discord.js');
const ytdl = require('ytdl-core');
const opus = require('opusscript');
const { connect } = require('superagent');

const queue = new Map()

module.exports = {
        name: "music",
        aliases: ["tunes"],
        category: "Music",
        description: "Play some music in a voice channel!",
        usage: "$music <function(play, pause, skip, etc)> <song name/link>",
    run: async (bot, message, args) => {
        const voiceChannel = message.member.voice.channel;
        const permissions = voiceChannel.permissionsFor(message.client.user)

        if(!voiceChannel) return message.channel.send('You must be in a voice channel to use this command!')
        if(!permissions.has('CONNECT')) return message.channel.send('I do not have voice permissions!')
        if(!permissions.has('SPEAK')) return message.channel.send('I do not have voice permissions!')
        if(!args[0]) return message.channel.send('Please specify what you want to do (play, pause, skip, etc.)')
        const serverQueue = queue.get(message.guild.id)

        switch(args[0]){

            case 'play':

                const songInfo = await ytdl.getInfo(args[1])
                const song = {
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url,
                    thumbnail: songInfo.videoDetails.thumbnail.thumbnails[1].url
                }

                if(!serverQueue){
                    const queueConstruct = {
                        textChannel: message.channel,
                        voiceChannel: voiceChannel,
                        connection: null,
                        songs: [],
                        volume: 5,
                        playing: true
                    }
                    queue.set(message.guild.id, queueConstruct)
        
                    queueConstruct.songs.push(song)
        
                    try {
                        var connection = await voiceChannel.join()
                        queueConstruct.connection = connection
                        play(message.guild, queueConstruct.songs[0])
                    } catch (error) {
                        queue.delete(message.guild.id)
                        return message.channel.send('There was an error connecting to the voice channel!');
                    }
                } else{
                    serverQueue.songs.push(song)
                    let embed = new discord.MessageEmbed()
                    .setColor('#007dff')
                    .setTitle(song.title)
                    .setDescription('Song added to queue!')
                    .setThumbnail(song.thumbnail)
                    .setURL(song.url)
                    .setAuthor('Cubic | Music', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
                    
                    return message.channel.send(embed)
                }



            break;

            case 'stop':
                if(!serverQueue) return message.channel.send('There is nothing playing!')
                serverQueue.songs = []
                serverQueue.connection.dispatcher.end()
                message.channel.send('Stopped playing music!')

            break;

            case 'skip':
                if(!serverQueue) return message.channel.send('There is nothing playing!')
                serverQueue.connection.dispatcher.end()
                message.channel.send('Skipped the current song!')

            break;

        }

        function play(guild, song){
            const serverQueue = queue.get(guild.id)

            if(!song){
                serverQueue.voiceChannel.leave()
                queue.delete(guild.id)
                return
            }

            const dispatcher = serverQueue.connection.play(ytdl(song.url))
            .on('finish', () => {
                serverQueue.songs.shift()
                play(guild, serverQueue.songs[0])
            })
            .on('error', error => {
                console.log(error)
            })
            dispatcher.setVolumeLogarithmic(serverQueue.volume / 5)

        }
        
    } 

};

