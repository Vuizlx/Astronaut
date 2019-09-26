const Discord = require("discord.js");

module.exports.run = async (client, message, args, emoji) => {



    let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
    
    .setColor("#0d66d4")
    .setTitle(`Google`)
    .setThumbnail('https://static1.squarespace.com/static/50ff1acce4b047a6c7999c73/59d7dba1f6576ed92f017582/59fb85648e7b0f7a6307b756/1509730530324/Google+Attract+Loop+%28dribbble%29+2.gif?format=500w')
    .setTimestamp()
    .addField('Ação:', 'Pesquisando no Google')
    .addField("Pesquisando:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter(`Pesquisa solicitada por: ${message.author.tag}`, `${message.author.avatarURL}`)
          
    message.channel.send(embed);
  
}

exports.config = {
    name: "google",
    aliases: ["google"]
}