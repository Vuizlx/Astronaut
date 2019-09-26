const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    let instagram = args.slice(0).join('+');

    let link = `https://www.instagram.com/` + instagram;
    if(!instagram)return message.reply(`Fale o perfil que deseja procurar!`)
    if(!link)return message.reply("Console error")
    let embed = new Discord.RichEmbed()
    .setColor("#e9e700")
    .setTitle(`Intagram`)
    .setThumbnail("https://i.gifer.com/CHz8.gif")
    .setTimestamp()
    .addField('Ação:', 'Pesquisa no Instagram')
    .addField("Nome:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter(`Comando pesso por: ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed);
}

exports.config = {
    aliases: ['intagram','insta'],
    name: "instagram"
}
