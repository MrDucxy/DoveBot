const discord = require('discord.js');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: 'f3cc04864ba942f9b2e97cc2c06ed293',
    secret: '609ea8616891447cac18c1d200a6c6f5'
  });


module.exports = {
        name: "spotsearch",
        aliases: ["spotify", "spot"],
        category: "Music",
        description: "Get information about your favorite song!",
        usage: "$spotsearch <song name>",
    run: async (bot, message, args) => {

        if(!args[0]) return message.channel.send('Please enter a song name!')

        let song = spotify.search({ type: 'track', query: args.join(' '), limit: 1 }, function(err, data) {
            try {
                let track = data.tracks.items[0];
                console.log(song)
                let embed = new discord.MessageEmbed()
                .setColor('#007dff')
                .setTitle(track.artists[0].name + ' - ' + track.name)
                .setThumbnail(track.album.images[0].url)
                .setURL(track.external_urls.spotify)
                .setAuthor('Cubic | Spotify', 'https://www.magneticmag.com/.image/t_share/MTY1MTczMzk2MzUzNTkwNTg0/spotify_icon_cmyk_green.png')
                .addField('Song Information',
           `**Album: ** ${track.album.name}
           **Album Release Date: ** ${track.album.release_date}
           **Album Total Tracks: ** ${track.album.total_tracks}
           **Length: ** ${track.duration_ms}
           **Explicit: **${track.explicit ? 'Yes':'No'}
           **Popularity: **${track.popularity}% (Higher = More Popular)`
           )
            
                message.channel.send(embed)
    
            } catch (error) {
                return message.channel.send('Could not find results for that song!');
            }
            // Do something with 'data'
        });

        try {
            console.log(song)
            let embed = new discord.MessageEmbed()
            .setColor('#007dff')
            .setTitle('Spotify')
        
            message.channel.send(embed)

        } catch (error) {
            return message.channel.send('Error!');
        }
        
    } 

};

