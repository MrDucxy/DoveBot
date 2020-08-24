const discord = require('discord.js');
const beautify = require("beautify")

module.exports = {
        name: "evaluate",
        aliases: ["execute"],
        category: "Owner",
        description: "Evaluates JavaScript",
        usage: "$evaluate <code>",
    run: async (bot, message, args) => {

        if(message.author.id !== '297195707159281665'){
            return message.channel.send('Only Ducxy can run this command.')
        }
    
        if(!args[0]){
            return message.channel.send('You need to provide something to evaluate.')
        }
    
        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return;
            }
    
            const toEval = args.join(" ")
            const evaluated = eval(toEval)
    
            let embed = new discord.MessageEmbed()
                .setColor("#007dff")
                .setAuthor('Cubic | Evaluate', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')
                .setTitle("Evaluation")
                .addField("Evaluation Request:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Result:", evaluated)
                .addField("Type:", typeof(evaluated));
    
            message.channel.send(embed);
        } catch (e) {
    
            let embed = new discord.MessageEmbed()
                .setColor("RED")
                .setTitle("Evaluation Error")
                .setDescription(e)
    
            message.channel.send(embed);
    }
    }

};

