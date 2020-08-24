const discord = require('discord.js');
const lyrics = require('solenolyrics');

module.exports = {
        name: "lyrics",
        aliases: ["songlyrics", "sl"],
        category: "Music",
        description: "Get the lyrics to your favorite song",
        usage: "$lyrics <song name>",
    run: async (bot, message, args) => {
        let song = await lyrics.requestLyricsFor(`${args.join(' ')}`); 
        if(!song) return message.channel.send('Could not find results for that song!');
        let author = await lyrics.requestAuthorFor(`${args.join(' ')}`); 
        let title = await lyrics.requestTitleFor(`${args.join(' ')}`); 
        let icon = await lyrics.requestIconFor(`${args.join(' ')}`); 
        if(!args[0]) return message.channel.send('Please enter a song name!')
        try {
                if(song.length > 1500){
                    let embed = new discord.MessageEmbed()
                    .setColor('#007dff')
                    .setDescription(song.substring(0, 1500) + '-\r**...**')
                    .setThumbnail(icon)
                    .setTitle(title + ' - ' + author)
        
                    message.channel.send(embed)
                } else{
                    let embed = new discord.MessageEmbed()
                    .setColor('#007dff')
                    .setThumbnail(icon)
                    .setTitle(title + ' - ' + author)
                    .setDescription(song)
        
                    message.channel.send(embed)
                }


            
 

        } catch (error) {
            return message.channel.send('Error!');
        }
        
    } 

};
