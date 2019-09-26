const { RichEmbed } = require('discord.js');
const firebase = require('firebase');
module.exports.run = async (client, message, args, database) => {
    if (message.author.id !== '343778106340802580') return message.channel.send(`<:Cancel:604380680352301078> ${message.author}, Esse comando ainda está em Testes por favor Aguarde ele ficar pronto!`)
    return firebase.database().ref(`Servidores/${message.guild.id}/Prefixo/Prefix`).once('value').then(function (snapshot) {
        const prefixo = (snapshot.val());
    message.channel.send(new RichEmbed()
    .setTitle(`<:databaseconfig:604381246939856943> Config`)
    .setColor("#000000")
    .setThumbnail(message.guild.iconURL)
    .addField(`<a:config:605190039839965214> | Prefixo`,`**${prefixo}set prefix </Prefixo>**`)
    .addField(`⭐ | Autorole`,`**${prefixo}set autorole </Cargo>**`)
    .addField(`<a:Entrada:605424199942799392> | Entrada`,`**Por Enquando Não Configuravel**`)
    .addField(`<a:saindo:605189558715416577> | Saida`,`**Por Enquando Não Configuravel**`)
    .addField(`🎷 | Sugestões`,`**${prefixo}set sugestao </Canal>**`)
    .addField(`📛 | Denuncias`,`**${prefixo}set denuncias </Canal>**`)
    .addField(`<:DiscordCoin:609555394435612730> | Coins`,`**${prefixo}set coins**`)
    .addField(`<:Rank:617480175189491722> | Ranks`,`**${prefixo}set ranks**`)
    )
})
}
exports.config = { 
    name: 'config',
    aliases: ['config']
}