const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "برفكسك";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

  const lol =
[
'**__W__elcome To Codes**',
'**W__e__lcome To Codes**',
'**We__l__come To Codes**',
'**Wel__c__ome To Codes**',
'**Welc__o__me To Codes**',
'**Welco__m__e To Codes**',
'**Welcom__e__ To Codes**',
'**Welcome __T__o Codes**',
'**Welcome T__o__ Codes**',
'**Welcome To __C__odes**',
'**Welcome To C__o__des**',
'**Welcome To Co__d__es**',
'**Welcome To Cod__e__s**',
'**Welcome To Code__s__**'
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("473537444214472714");//ايدي الشات
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});
  


client.login(process.env.BOT_TOKEN); 
