const botconfig = require('./botconfig.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const { badwords } = require("./badwords.json") 
const blacklistUsers = require("./blacklist.json") 


global.__basedir = __dirname;

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 10, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 15, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '{@user} has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '{@user} has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 15, // Amount of duplicate messages that trigger a warning.
    //exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});



bot.on("ready", async () => {
    console.log(`${bot.user.username} is up and running in ${bot.guilds.cache.size} servers.`)
    bot.user.setActivity(`${bot.guilds.cache.size} servers | $help`, {type: "WATCHING"})
});

//////////////////////////////////////////////////////////////////////////////////////////////

// Load Commands
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");

['command'].forEach(handler => {
    require(`./handler/${handler}`)(bot);
})

//////////////////////////////////////////////////////////////////////////////////////////////

// Message Event
    
bot.on('message', (message) =>{
	antiSpam.message(message);

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(botconfig.prefix)) return;

    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = bot.commands.get(cmd);
	if(!command) command = bot.commands.get(bot.aliases.get(cmd));
	
	if(command && blacklistUsers.blacklistedUsers.includes(message.author.id)){
		return message.reply('You are blacklisted from using Cubic!')
	}

    if(command){
		command.run(bot, message, args, blacklistUsers, botconfig)
	}
		if(!message.member.permissions.has('ADMINISTRATOR') || !message.author.bot){
			let confirm = false;
	   
			var i;
			for(i = 0;i < badwords.length; i++) {
			  
			  if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
				confirm = true;
			  
			}
	
			if(confirm){
				let target = message.member;
				let logs = message.guild.channels.cache.find(channel => channel.name === botconfig.logsChannel);
				let embed = new Discord.MessageEmbed()
				.setColor('BLACK')
				.setThumbnail(target.avatarURL)
				.addField('Banned Member', `<@${target.id}> (${target.id})`)
				.addField('Banned Time', message.createdAt)
				.addField('Banned In', message.channel)
				.addField('Ban Reason', 'Racism/Bad Words')
		
			message.delete();
			message.channel.send(`<@${target.id}> has been banned for racism/bad words.`);
			message.guild.members.ban(target);
			logs.send(embed);
			}
		}

});









bot.on("messageDelete", async msg => {

    try {
        	//Find the logs channel
	var logChannel = msg.guild.channels.cache.find(channel => channel.name.toLowerCase() === "logs")

	//Create it if it doesn't exist
	if(!logChannel){
		logChannel = await msg.guild.channels.create("logs", {
			type: "text",
			nsfw: true,
			reason: "Cubic attempted to log something, but the logs channel did not exist."
		})
	}
	//Exit if the bot could not find or create the logs channel(E.g lacks permission)
	if(!logChannel) return;

	if(msg.attachments.size > 0){

			let embed = new Discord.MessageEmbed()
			.setColor('#007dff')
			.setAuthor('Cubic | Moderation', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
			.setThumbnail(msg.author.avatarURL())
			.setTitle(`Attachment Deleted: ${msg.author.tag}`)
			.addField('Channel', `<#${msg.channel.id}>`)
			logChannel.send(embed)

	}
	else {
		let embed = new Discord.MessageEmbed()
		.setColor('#007dff')
		.setAuthor('Cubic | Moderation', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
		.setThumbnail(msg.author.avatarURL())
		.setTitle(`Message Deleted: ${msg.author.tag}`)
		.addField('Message', msg.content.substr(0,500) + (msg.content.length > 500 ? "..." : ""))
		.addField('Channel', `<#${msg.channel.id}>`)
		logChannel.send(embed)
	}


        
    } catch (error) {
		logChannel.send('Error!')
    }
})
















bot.on("messageUpdate", async (oldMsg, newMsg) => {
    try {
        	//Don't handle messages from bots
	if (oldMsg.author.bot) return
	//Only handle messages in text channels
	if(oldMsg.channel.type !== "text") return

	//Don't log if the edited message is the same (Idk how it happens, but it does)
	if(oldMsg.content === newMsg.content) return

	//Find the logs channel
	var logChannel = oldMsg.guild.channels.cache.find(channel => channel.name.toLowerCase() === "logs")
	//Create it if it doesn't exist
	if(!logChannel){
		logChannel = await oldMsg.guild.channels.create("logs", {
			type: "text",
			nsfw: true,
			reason: "Cubic attempted to log something, but the logs channel did not exist."
		})
	}
	//Exit if the bot could not find or create the logs channel(E.g lacks permission)
	if(!logChannel) return

	let embed = new Discord.MessageEmbed()
	.setColor('#007dff')
	.setThumbnail(oldMsg.author.avatarURL())
	.setAuthor('Cubic | Moderation', 'https://media.giphy.com/media/j3J8QlFC5avvVd1JAj/giphy.gif')
	.setTitle(`Message Edited: ${oldMsg.author.tag}`)
	.addField('Old Message', oldMsg.content)
	.addField('New Message', newMsg.content)
	.addField('Channel', `<#${oldMsg.channel.id}>`)
	logChannel.send(embed)

        
    } catch (error) {
		console.log(error)
		logChannel.send('Error, Message probably contains an attachment/image.')
	}
})

bot.on("disconnect", function(event) {
	console.log(
	  `The WebSocket has closed and will no longer attempt to reconnect`
	);
  });

//////////////////////////////////////////////////////////////////////////////////////////////

bot.login(botconfig.token);