const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require("ytdl-core");

const token = 'NzM0Nzg5NDQxNzA4NzUyOTg2.XxWz_g.FWE6H7OZPbZMyTyE6cr4Dyv5yGk';
const Prefix = '!';
var servers = {}
bot.on('ready',()=>{
    console.log('This bot is online!');
})
bot.on('message', message =>{
let args = message.content.substring(Prefix.length).split(" ");
switch(args[0]) {
    case 'Fuckyou':
       // message.reply('Fuck you too');
       // message.channel.sendMessage('fuck you too');
        break;
    case 'website':
        message.reply('https://discord.js.org/#/docs/main/stable/general/welcome');
        break;
    case 'info':
        if(args[1] === 'version'){
            message.reply('version 1.0.1'); 
        }
        else{
            message.reply('invalid args');
        }
    break;
    case 'play':
        if(!args[1]){
            message.reply("provide a link master!");
            return;
        }
        if(!message.member.voiceChannel){
            message.reply("Master u must be in voice channel to play music");
            return;
        }    
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }
        var server = servers[message.guild.id];

        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection)){
            play(connection, message);            
        }
}
})
bot.login(token);