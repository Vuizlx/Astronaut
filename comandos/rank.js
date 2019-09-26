const firebase = require("firebase");
const { RichEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Ranks/Status`).once('value').then(function (snapshot) {
        const stats = (snapshot.val());
        if(stats === "Desativado") {
            message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, Os Ranks Estão Desativados Neste Servidor`)
        }
        if(stats === "Ativado") {
    let user = message.mentions.users.first() || message.author
    let id = user.id
    return firebase.database().ref(`Servidores/${message.guild.id}/Ranks/${id}/rank`).once('value').then(function (snapshot) {
        const rank = (snapshot.val());
        return firebase.database().ref(`Servidores/${message.guild.id}/Ranks/${id}/xp`).once('value').then(function (snapshot) {
            const xp = (snapshot.val());
            message.channel.send(new RichEmbed()
            .setTitle(`Ranks | ${user.tag}`)
            .setColor("RANDOM")
            .setThumbnail(user.avatarURL)
            .addField(`Xp`,`**${xp}**`)
            .addField(`Rank`,`**${rank}**`)
            .addField(`Recompensa`,`**EM BREVE**`)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`) 
            )
        
        })
    })
}
    })
}
module.exports.config = {
    name: "rank",
    aliases: ["rank","Rank"]
}