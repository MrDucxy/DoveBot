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
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }
            console.log(data)
            // Do something with 'data'
        });

        if(!song) return message.channel.send('Could not find results for that song!');

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

