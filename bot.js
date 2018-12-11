
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



const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith(".كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});












client.login(process.env.BOT_TOKEN);
