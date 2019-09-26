const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    let twitch = args.slice(0).join('+');

    let link = `https://www.twitch.tv/` + twitch;
    if(!twitch)return message.reply(`Fale o perfil que deseja procurar!`)
    if(!link)return message.reply("Console error")
    let embed = new Discord.RichEmbed()
    .setColor("#5e0092")
    .setTitle(`Twitch`)
    .setThumbnail("https://cdn.dribbble.com/users/527354/screenshots/5057270/bouncing_twitch.gif")
    .setTimestamp()
    .addField('Ação:', 'Pesquisa na Twitch')
    .addField("Nome:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter(`Comando pesso por: ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed);
}

exports.config = {
    aliases: ['twitch'],
    name: "twitch"
}