
const Discord = require('discord.js');
const UserBlocked = new Set();
const fs = require("fs"); 
const client = new Discord.Client();
const jimp = require('jimp');   
const prefix = "."
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('S.P.Z')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('S.')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('xR1')
  console.log('Informations :')
  console.log('Mdax77x')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Welcome Mdax`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     xR1Server' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("online")
 
});
client.on("message", async message => {
var prefix = "-";
var trans =[
    {q:"**ما معنى `Train` ?**",a:"قطار"},
    {q:"**ما معنى `Plane` ?**",a:"طائرة"},
    {q:"**ما معنى `Home` ?**",a:"منزل"},
    {q:"**ما معنى `Cook` ?**",a:"يطبخ"},
    {q:"**ما معنى `Car` ?**",a:"سيارة"},
    {q:"**ما معنى `Ask` ?**",a:"سؤال"},
    {q:"**ما معنى `afraid` ?**",a:"خائف"},
    {q:"**ما معنى `Air` ?**",a:"هواء"},
    {q:"**ما معنى `Always` ?**",a:"دائما"},
    {q:"**ما معنى `Never` ?**",a:"ابدا"},
    {q:"**ما معنى `box` ?**",a:"صندوق"},
    {q:"**ما معنى `Space` ?**",a:"فراغ"},



];
    if(message.content == prefix+"ترجمة"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = trans[Math.floor(Math.random() * trans.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('سؤال ترجمة')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.q);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "ترجمة") return
           if(result.content == ask.a){
             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {
 
                                  var embedx = new Discord.RichEmbed()
                .setTitle(':x:خطاء')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** الإجابة خاطئة`);
                message.channel.sendEmbed(embedx);
           }
     });
  }
});




client.on('message' , message => {
if (message.content === '.help') {
           if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
          .addField("**۩ஜ▬▬▬▬✦أوامر بوت الألعاب✦▬▬▬▬ஜ۩**","** **")
          .addField("**❖ .ترجمة**","**يعطيك كلمات لازم تترجمها**")
          .addField("**❖ .كت تويت**","**لعبة كت تويت**")
          .addField("**❖ .فكك**","**لعبة تفكيك جمل**")
          .addField("**❖ .عواصم**","**لعبة عواصم**")
          .addField("**❖ .صراحة**","**لعبة صراحة**")
          .addField("**❖ .مريم**","**لعبة مريم**")
          .addField("**❖ .سرعة**","**أسرع كاتب**")
          .addField("**❖ .rps<**","**لعبة حجرة ورقه مقص**")
          .addField("**❖ .xo**","**لعبة اكس او**")
          .addField("**۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩**","** **")
   
    .setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});



client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="-";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    message.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( message.content == prefix+'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`⏳ |You have »15« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
  .setDescription('**✅ |Good Job +1P**')
   .setFooter(`${collected.first().author}`)
  message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`🔚 |**Time Is End**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});










client.login(process.env.BOT_TOKEN);
