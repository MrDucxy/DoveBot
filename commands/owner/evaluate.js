const discord = require('discord.js');
const beautify = require("beautify")

module.exports = {
        name: "evaluate",
        aliases: ["execute", "eval"],
        category: "Owner",
        description: "Evaluates JavaScript",
        usage: "$evaluate <code>",
    run: async (bot, message, args) => {

        if(message.author.id !== '299263276028788737'){
            return message.channel.send('Only Ducxy can run this command.')
        }
    
        if(!args[0]){
            return message.channel.send('You need to provide something to evaluate.')
        }

        if (args.join(" ").toLowerCase().includes("token")) {
            return;
        }
    
        try {
            const toEval = args.join(" ")
            const evaluated = eval(toEval)
    
            if(typeof evaluated === 'string' && evaluated.includes("NzUxNzA0MjkzNDI5NjA4NTA4.X1M9LQ.aEnXVP7s0p8oprorDaLyyZUVUI0")) return message.channel.send('Ducxy, you retard. That contains your token.')
    
            let embed = new discord.MessageEmbed()
                .setColor("#000000")
                .setAuthor('Dove | Evaluate', bot.user.avatarURL())
                .setTitle("Evaluation")
                .addField("Input:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Output:", `\`\`\`js\n${evaluated}\n\`\`\``)
                .addField("Type:", typeof(evaluated));
    
            message.channel.send(embed);
        } catch (e) {
    
            let embed = new discord.MessageEmbed()
                .setAuthor('Dove | Evaluate', bot.user.avatarURL())
                .setColor("RED")
                .setTitle("Evaluation Error")
                .setDescription(e)
    
            message.channel.send(embed);
    }
    }

};

