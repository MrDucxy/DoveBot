const discord = require('discord.js');
const userInstagram = require('user-instagram');

module.exports = {
        name: "instagram",
        aliases: ["ig", "insta"],
        category: "Social",
        description: "Get info on an Instagram user.",
        usage: "$instagram <username>",
    run: async (bot, message, args) => {

      if(!args[0]) return message.channel.send('Please specify a user!')


      userInstagram(args[0]) // Same as getUserData()
      .then(function(result){
        console.log(result)
        let embed = new discord.MessageEmbed()
        .setColor('#007dff')
        .setThumbnail(result.profilePicHD)
        .setTitle(result.username)
        .setURL(result.link)
        .setAuthor('Cubic | Instagram', 'https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579602-yumminkysocialmedia36_83067.png')
  
        message.channel.send(embed)
        
      })
      .catch(console.error);

  
 

    }

};

