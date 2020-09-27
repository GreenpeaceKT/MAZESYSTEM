const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();


client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);

  client.channels.cache.get('749265842125930577').send('```MEIが起動しました!```');

  const guild = client.guilds.cache.get(MAZE)
   const channel = guild.channels.cache.get(MEMBERCOUNT)
   channel.setName('人数: ' + guild.memberCount)
 
});

client.on('guildMemberAdd', (member, guild) => {
    const channel = member.guild.channels.cache.get("749635026915950612");
    if (!channel) return;
    channel.send(`**${member.user}さんが参加しました！**`);
});

client.on('guildMemberAdd', member => {
   if (member.guild.id === '731348290267906068') {
     const channel = member.guild.channels.cache.get('752067627018485801')
     channel.setName('人数: ' + member.guild.memberCount)
   }
 })


client.on('message', async message =>{

    if(message.author.bot){
        return;
    }
    

    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "say"){
        const say_message = args.join(" ");
        message.delete().catch(msg=>{});
        message.channel.send(say_message);
    }

if(command === "addrole"){
        message.member.roles.add('742228974469382236');
        message.reply('あなたは認証されました!');
    }

if(command === "ban"){
        const args = message.content.split(' ').slice(1);

const user = message.mentions.users.first();
const banReason = args.slice(1).join(' ');
if (!user) {
  try {
    if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
    user = message.guild.members.get(args.slice(0, 1).join(' '));
    user = user.user;
  } catch (error) {
    return message.reply('Could not get a Discord user with this userID!');
  }
}
if (user === message.author) return message.channel.send('You can not ban yourself');
if (!reason) return message.reply('You forgot to enter a reason for this ban!');
if (!message.guild.member(user).bannable) return message.reply('You can not ban this user because you the bot has not sufficient permissions!');


}

});


client.login(process.env.DISCORD_BOT_TOKEN);
