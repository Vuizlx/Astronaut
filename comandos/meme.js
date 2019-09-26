const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{});
let memes = ["https://cdn.discordapp.com/attachments/379374202031177729/618962609667964928/JPEG_20190726_233441.png",
            "https://cdn.discordapp.com/attachments/379374202031177729/606651226288816202/5d369ee544469.jpeg",
            "https://cdn.discordapp.com/attachments/604787789753483265/616351826672877589/images.jpg",
            "https://cdn.discordapp.com/attachments/379374202031177729/604864730158596145/557b018872acf5444a752e1cbb3c5d21.jpg",
            "https://cdn.discordapp.com/attachments/604787789753483265/622235626883907614/a6nu91o5ge731.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622235884603047938/IMG_20190618_210742_997.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622236034800943105/5d191168de5b3.jpeg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622236180393623565/218-mai-que-caraio_BHKS04ci8pfYSK9.jpg",
            "https://cdn.discordapp.com/attachments/379374202031177729/622235880001634314/13055817796007.png",
            "https://cdn.discordapp.com/attachments/379374202031177729/622236432605642752/Miguelpinto._2.gif",
            "https://cdn.discordapp.com/attachments/449963931713404939/603854438284656650/IMG_20190629_112844_811.jpg",
            "https://cdn.discordapp.com/attachments/449963931713404939/603854390637494274/IMG-20190719-WA0029.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622238231240376330/image0_1.gif",
            "https://cdn.discordapp.com/attachments/617415998290788362/622238332730081280/shushush.png",
            "https://cdn.discordapp.com/attachments/589592881753489428/617512513059291177/images_9.jpeg",
            "https://cdn.discordapp.com/attachments/589592881753489428/617512222532435974/07-33.png",
            "https://cdn.discordapp.com/attachments/589592881753489428/617512140621873163/IMG_20190814_213812-1.jpg",
            "https://cdn.discordapp.com/attachments/589592881753489428/617512075740053514/Screenshot_20190530-184522.png",
            "https://cdn.discordapp.com/attachments/589592881753489428/617511839697469460/IMG-20190406-WA0225_1_1.jpg",
            "https://cdn.discordapp.com/attachments/589592881753489428/617511720717516800/7005727.jpg",
            "https://cdn.discordapp.com/attachments/589592881753489428/617511638593044490/5e4df14.png",
            "https://cdn.discordapp.com/attachments/589592881753489428/617510980959862785/iuowj9kcfah21.gif",
            "https://cdn.discordapp.com/attachments/617415998290788362/622239883335041035/7762a057699ed6b2063ceb64c18b445e.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622240054995058709/20fcd3f5815a4b1fa19cf4ccecc93f03.png",
            "https://cdn.discordapp.com/attachments/617415998290788362/622240262961365032/c81c9b4.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622240658572443648/e440a8b.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622240890819444747/IMG_20190707_201420.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622241064614494219/IMG-20190906-WA0036.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622241508434772007/EDpmupiVAAAIiIr.png",
            "https://cdn.discordapp.com/attachments/617415998290788362/622241612763758599/IMG-20190909-WA0023.jpg",
            "https://cdn.discordapp.com/attachments/617415998290788362/622241740237176863/images_2.jpeg",
            "https://cdn.discordapp.com/attachments/379374202031177729/622255169614118933/Screenshot_2019-09-12-01-09-49.png",
        "https://cdn.discordapp.com/attachments/379374202031177729/624041057415593984/a84756b7439cf2888e5dbfe55172b9b9.jpg",
    "https://cdn.discordapp.com/attachments/379374202031177729/624041702327320577/56d40cb7a8f57_1_-_Copia.jpeg",
"https://cdn.discordapp.com/attachments/379374202031177729/624042655420121098/008471c2d07a5bd4e240768df5ee0152.jpg",
"https://cdn.discordapp.com/attachments/379374202031177729/624039247967551513/merdajesusda_um_help_o1x5ce.jpg",
"https://cdn.discordapp.com/attachments/379374202031177729/624039216455745558/JPEG_20190918_202810.jpg",
"https://cdn.discordapp.com/attachments/379374202031177729/624038664946712587/41ca7acf7efe56e48ab4ec1883cabdab-1.jpg",
"https://cdn.discordapp.com/attachments/379374202031177729/624038446930853908/FB_IMG_1567715591142.jpg",
"https://media.discordapp.net/attachments/379374202031177729/623640030778228736/Y_EEE_E_E_S.gif"]
let resultado = Math.floor((Math.random() * memes.length));

    var memeEmbed = new Discord.RichEmbed()
        .setTitle('**Meme entregue: **')
        .setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
        .setImage(memes[resultado])
        .setColor('RANDOM')
    message.channel.send(memeEmbed);

}

exports.config = {
    name: "meme",
    aliases: ["meme"]
    }