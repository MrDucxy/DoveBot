const discord = require('discord.js');
const Canvas = require('canvas')
const moment = require('moment')

module.exports = {
    name: "disabled",
    aliases: ["disable", "handicapped"],
    category: "ImageManip",
    description: "Make someone disabled.",
    usage: "$disabled <mention>",
    run: async (bot, message, args) => {

        if(message.channel.type === 'dm') return;

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author);


        //Create the canvas
        const canvas = Canvas.createCanvas(512, 512);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('https://www.belfastairport.com/media/3821/invisible-disabilityjpg.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


        ctx.beginPath();
        // Start the arc to form a circle
        ctx.arc(303, 62.5, 37.5, 0, Math.PI * 2, true);
        // Put the pen down
        ctx.closePath();
        // Clip off the region you drew on
        ctx.clip();
	    const avatar = await Canvas.loadImage(target.user.displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 265, 25, 75, 75);

        let attachment = new discord.MessageAttachment(canvas.toBuffer(), 'user_disabled.png')
        message.channel.send(attachment);
        
    }

};

