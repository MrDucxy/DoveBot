const discord = require('discord.js');
const ytdl = require('ytdl-core');
const opus = require('opusscript');
const { connect } = require('superagent');

var servers = {};

module.exports = {
        name: "music",
        aliases: ["tunes", "sl"],
        category: "Music",
        description: "Play some music in a voice channel!",
        usage: "$music <song name/link>",
    run: async (bot, message, args) => {

        if(!message.member.voice) return message.channel.send('You must be in a voice channel to use this command!')
        if(!args[0]) return message.channel.send('Please specify what you want to do (play, pause, skip, etc.)')

        switch(args[0]){

            case 'play':

                function play(connection, message){
                    var server = servers[message.guild.id];

                    server.dispatcher = connection.play(ytdl(server.queue[0], {filter: 'audioonly'}));

                    server.queue.shift();

                    server.dispatcher.on("end", function(){
                        if(server.queue[0]){
                            play(connection, message);
                        } else{
                            connection.disconnect();
                        }
                    })
                }


                if(!args[1]) return message.channel.send('Please provide a song link/name!');
                
                if(!servers[message.guild.id]) servers[message.guild.id] = {
                    queue: []
                }

                var server = servers[message.guild.id];

                server.queue.push(args[1]);

                if(!message.guild.voiceConnection) message.member.voice.channel.join().then(function(connection){
                    play(connection, message);
                })


            break;

            case 'skip':
                var server = servers[message.guild.id];
                if(server.dispatcher) server.dispatcher.end();
                message.channel.send('Skipped the current song!')
            break;

            case 'stop':
                var server = servers[message.guild.id];
                if(message.guild.voiceConnection){
                    for(var i = server.queue.length -1; i >=0; i--){
                        server.queue.splice(i, 1);
                    }

                    server.dispatcher.end();
                    message.channel.send('Stopped the queue.')
                }
            break;

        }
        
    } 

};

