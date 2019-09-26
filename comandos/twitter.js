const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    let twitter = args.slice(0).join('+');

    let link = `https://www.twitter.com/` + twitter;
    if(!twitter)return message.reply(`Fale o perfil que deseja procurar!`)
    if(!link)return message.reply("Console error")
    let embed = new Discord.RichEmbed()
    .setColor("#00e3fc")
    .setTitle(`Twitter`)
    .setTimestamp()
    .setThumbnail("https://techcrunch.com/wp-content/uploads/2014/06/twitter-rise.gif?w=730&crop=1")
    .addField('Ação:', 'Pesquisa no Twitter')
    .addField("Nome:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter(`Comando pesso por: ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed);
}

exports.config = {
    aliases: ['twitter','Twitter'],
    name: "twitter"
}
