const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "برفكسك";
client.on('ready', () => {
    console.log('I am ready!');
});


  const lol =
[
'**𝓦𝓔𝓛𝓒𝓞𝓜𝓔 𝓣𝓞 𝓐𝓣𝓨**',
'**ŴĔĹČŐМĔ ŤŐ ÁŤŶ**',
'**𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝙰𝚃𝚈**',
'**ⲰⲈ𝓛ⲤⲞⲘⲈ ⲦⲞ ⲀⲦⲨ**',
'**𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐀𝐓𝐘**',
'**ωєℓcσмє τσ ατy**',
'**𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗔𝗧𝗬**',
'**ＷＥＬＣＯＭＥ ＴＯ ＡＴＹ**',
'**̶W̶E̶L̶C̶O̶M̶E  ̶T̶O  ̶A̶T̶Y̶**',
'**̶[̲̅w̲̅][̲̅e̲̅][̲̅l̲̅][̲̅c̲̅][̲̅o̲̅][̲̅m̲̅][̲̅e̲̅] [̲̅t̲̅][̲̅o̲̅] [̲̅a̲̅][̲̅t̲̅][̲̅y̲̅]**',
'**̶WELCOME TO ATY**
'**𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝘼𝙏𝙔**',
'**𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔸𝕋𝕐**',
'**𝒲ℰℒ𝒞𝒪ℳℰ 𝒯𝒪 𝒜𝒯𝒴**'
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("473537444214472714");//ايدي الشات
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});
  


client.login(process.env.BOT_TOKEN); 
