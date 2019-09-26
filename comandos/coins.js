const { RichEmbed } = require("discord.js")
const firebase = require("firebase")
module.exports.run = async (client, message, args) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/Status`).once('value').then(function (snapshot) {
        const aaa = (snapshot.val());
        if(aaa === "Desativado") {
            message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, Os Coins estão desativados neste servidor!`)
        }
        if(aaa === "Ativado") {
    let user = message.mentions.users.first() || message.author
    let id = user.id
return firebase.database().ref(`Servidores/${message.guild.id}/Coins/${id}/coins`).once('value').then(function (snapshot) {
        const coins = (snapshot.val());
    message.channel.send(new RichEmbed()
    .setColor("#dbce0a")
    .setTitle(`Coins | ${user.tag}`)
    .setThumbnail(user.avatarURL)
    .addField(`Coins`,`**${coins}**`)
    .addField(`Pode Comprar`,`**TESTE**`)
    .addField(`Rank`,`**EM BREVE**`)
    )
    })
}
})
}
module.exports.config = {
    name: "coins",
    aliases: ["coins","coin"]
}