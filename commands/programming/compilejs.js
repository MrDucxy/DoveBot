const discord = require('discord.js');
const beautify = require("beautify")
paiza_io = require('paiza-io');

module.exports = {
        name: "compilejs",
        aliases: ["javascript"],
        category: "Programming",
        description: "Compile Some Code",
        usage: "$compilejs <code>",
    run: async (bot, message, args) => {

        if(!args[0]) return message.channel.send('Please provide some code')
        let lang = 'javascript'

            paiza_io(lang, args.join(" "), '', function (error, result) {
                if (error || result.result == 'failure'){
                    let embed = new discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor('Cubic | Compile', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
                        .setTitle("Compile Error!")
                        .addField('Output:', `\`\`\`\n${result.stderr}\n\`\`\``)
            
                        return message.channel.send(embed);
                }
                console.log('result:');
                console.log(result); //=> Hello, C++ World!

                    let embed = new discord.MessageEmbed()
                        .setColor("#007dff")
                        .setAuthor('Cubic | Compile', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
                        .setTitle("Compile")
                        .addField("Output:", `\`\`\`\n${result.stdout}\n\`\`\``)
            
                    message.channel.send(embed);

              });

    }

};

