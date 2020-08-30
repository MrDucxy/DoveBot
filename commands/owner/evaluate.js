const discord = require('discord.js');
const beautify = require("beautify")

module.exports = {
        name: "evaluate",
        aliases: ["execute", "eval"],
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

        if (args.join(" ").toLowerCase().includes("token")) {
            return;
        }
    
        try {
            const toEval = args.join(" ")
            const evaluated = eval(toEval)
    
            if(typeof evaluated === 'string' && evaluated.includes("NzE3NTgwOTI4NjgzMjEyODgy.XtcZUQ.og_yq29sIDyDvYo7x17yf_4CTyM")) return message.channel.send('Ducxy, you retard. That contains your token.')
    
            let embed = new discord.MessageEmbed()
                .setColor("#007dff")
                .setAuthor('Cubic | Evaluate', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
                .setTitle("Evaluation")
                .addField("Evaluation Request:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Result:", `\`\`\`js\n${evaluated}\n\`\`\``)
                .addField("Type:", typeof(evaluated));
    
            message.channel.send(embed);
        } catch (e) {
    
            let embed = new discord.MessageEmbed()
                .setAuthor('Cubic | Evaluate', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
                .setColor("RED")
                .setTitle("Evaluation Error")
                .setDescription(e)
    
            message.channel.send(embed);
    }
    }

};

