const discord = require('discord.js');
var pingJS = require('ping-lite');


module.exports = {
        name: "ping",
        aliases: ["pong", "lag", "latency"],
        category: "Misc",
        description: "Returns Pong.",
        usage: "$ping",
    run: async (bot, message, args) => {

        if(!args[0]) return message.channel.send('Pong! | Latency: ' + Math.round(bot.ws.ping) + 'ms')
        else{
            var ping = new pingJS(args[0]);
            ping.send(function(err, res){
                let embed = new discord.MessageEmbed()
                .setColor('#007dff')
                .setTitle('Ping Response: '+ args[0])
                .addField('Host:', ping._host)
                .addField('Time',`${Math.round(res)}ms`)
                .setAuthor('Cubic | Ping', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
    
                message.channel.send(embed)
            })

        }

    }

};

