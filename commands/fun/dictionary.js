const discord = require('discord.js');
const urban = require('urban');

module.exports = {
        name: "dictionary",
        aliases: ["urban", "ud", "dic"],
        category: "Fun",
        description: "Find a word in the Urban Dictionary",
        usage: "$dictionary <word>",
    run: async (bot, message, args) => {

        let icon = "https://i.pinimg.com/originals/04/83/c7/0483c76e02e484dbf20009418758849e.jpg";
        let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
            try {
                search.first(res => {
                    if(!res) return message.channel.send("No results found for that word!");
                    let { word, definition, example, thumbs_up, thumbs_down, permalink} = res;

                        let embed = new RichEmbed()
                            .setColor('BLACK')
                            .setTitle(word + 'Urban Dictionary')
                            .setThumbnail(icon)
                            .setDescription(stripIndents`**Defintion:** ${definition || "No definition."}
                            **Example:** ${example || "No example."}
                            **Upvotes:** ${thumbs_up || 0}
                            **Downvotes:** ${thumbs_down || 0}
                            **Link:** [link to ${word}](${permalink || "https://www.urbandictionary.com/"})`)

                            message.channel.send(embed)
                })
            } catch(e) {
                return message.channel.send("An error has occurred!")
            }
        

    }

};

