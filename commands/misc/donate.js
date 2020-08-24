const discord = require('discord.js');

module.exports = {
        name: "donate",
        aliases: ["donation", "paypal", "cashapp"],
        category: "Misc",
        description: "Donate to help out with development",
        usage: "$donate",
    run: async (bot, message, args) => {

        let embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setTitle('Donate to Ducxy')
        .addField('PayPal', 'https://www.paypal.com/paypalme/doveroblox')
        .addField('CashApp', 'https://www.cash.app/$D3Signer')
        .setAuthor('Cubic | Donate', 'https://cdn.discordapp.com/avatars/717580928683212882/4e4a8cb8c44b31a1634d446569f8ad73.png')

        message.channel.send(embed);
    }

};

