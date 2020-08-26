const discord = require('discord.js');
var ping = require('ping');


module.exports = {
        name: "ping",
        aliases: ["pong", "lag", "latency"],
        category: "Misc",
        description: "Returns Pong.",
        usage: "$ping",
    run: async (bot, message, args) => {

        if(!args[0]) return message.channel.send('Pong! | Latency: ' + Math.round(bot.ws.ping) + 'ms')
        else{
            var hosts = [args[0]];
            hosts.forEach(function (host) {
                ping.promise.probe(host)
                    .then(function (res) {

                        if(res.host != 'unknown'){
                            let embed = new discord.MessageEmbed()
                            .setColor('#007dff')
                            .setTitle('Ping Response: '+res.host)
                            .addField('Time', `${res.time}ms`)
                            .addField('Host IP', res.numeric_host)
                            .setAuthor('Cubic | Ping', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
    
                            message.channel.send(embed)
                        }
                        else{
                            let embed = new discord.MessageEmbed()
                            .setColor('#007dff')
                            .setTitle('Ping Response: ')
                            .setDescription('This host did not reply or timed out.')
                            .setAuthor('Cubic | Ping', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
    
                            message.channel.send(embed)
                        }
                        
                    });
            });

        }

    }

};

