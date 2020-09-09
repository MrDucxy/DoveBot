const discord = require('discord.js');
const cheerio = require('cheerio');
const request = require('request');

module.exports = {
        name: "wrd",
        aliases: ["wearedevs", "wrduser"],
        category: "Social",
        description: "Get info on a WeAreDevs forum user.",
        usage: "$wrd <uid>",
    run: async (bot, message, args) => {

        //if(message.guild.id === '753242387517800608') return message.channel.send('This command is blocked here because of the owners requests.')

        let url = `https://wearedevs.net/profile?uid=${args[0]}`

        if(!args[0]) return message.channel.send('Please specify a WRD UID. (Eg. 44296)');


        request(url, (error, response, html) => {

            if(!error && response.statusCode == 200){
                const $ = cheerio.load(html);

                const wrdUSERNAME = $('.username').html()
                const wrdALIAS = $('.alias').html()
                const wrdBIO = $('.biography').html()

                if(wrdUSERNAME && wrdALIAS === null) return message.channel.send('Could not find info on that user!')


                let embed = new discord.MessageEmbed()
                .setColor('#007dff')
                .setTitle(`WeAreDevs Lookup: ${wrdUSERNAME}`)
                .setURL(url)
                .setAuthor('Cubic | WeAreDevs', 'https://images-ext-2.discordapp.net/external/KQXNNXdl0S8HlhdMEt_kQjM8OmS3sWxHsvjENYmALsY/https/cdn.discordapp.com/icons/753242387517800608/a7d59422138fb7759e9d2a303b700223.webp?width=115&height=115')

                .addFields(
                    {name: 'Username', value: wrdUSERNAME, inline: true},
                    {name: 'Alias', value: wrdALIAS, inline: true},
                    {name: 'UID', value: args[0], inline: true},
                    {name: 'Biography', value: wrdBIO}
                )

                .setFooter(`Note: This command is in beta, More information will be added later.`)
      
                message.channel.send(embed)

            }

        })


    }

};

