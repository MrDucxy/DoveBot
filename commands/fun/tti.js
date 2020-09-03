const discord = require('discord.js');
const textToImage = require('text-to-image');

module.exports = {
        name: "tti",
        aliases: "texttoimage",
        category: "Fun",
        description: "Convert text into an image",
        usage: "$tti (bgColor(hex)) (textColor(hex)) (textAlign (left, start, center, right, end)) <text>",
    run: async (bot, message, args) => {

        var backColor = args[0];
        var fontColor = args[1];
        var fontAlign = args[2];

        if(!args[0]) backColor = "#FFFFFF"
        if(!args[1]) fontColor = "#000000";
        if(!args[2]) fontAlign = "left";

        let targetText = args.slice(3).join(' ')
        if(!targetText) return message.channel.send('Please specify some text to convert!')

        try {

            textToImage.generate(targetText, {
                debug: false,
                maxWidth: 720,
                fontSize: 18,
                fontFamily: 'Arial',
                lineHeight: 30,
                margin: 5,
                bgColor: backColor,
                textColor: fontColor,
                textAlign: fontAlign
              }).then(function (dataUri) {
                console.log(dataUri);
              });
            
        } catch (error) {
            return message.channel.send('Error! You probably provided invalid arguments.')
        }


    }

};

