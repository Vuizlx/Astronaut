const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    let facebook = args.slice(0).join('+');

    let link = `https://www.facebook.com/` + facebook;
    if(!facebook)return message.reply(`Fale o perfil que deseja procurar!`)
    if(!link)return message.reply("Console error")
    let embed = new Discord.RichEmbed()
    .setColor("#0008fc")
    .setTitle(`Facebook`)
    .setTimestamp()
    .setThumbnail("https://giffiles.alphacoders.com/144/14482.gif")
    .addField('Ação:', 'Pesquisa no Facebook')
    .addField("Nome:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter(`Comando pesso por: ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed);
}

exports.config = {
    aliases: ['facebook','face'],
    name: "facebook"
}
