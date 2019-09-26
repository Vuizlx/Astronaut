const { RichEmbed } = require("discord.js")
const firebase = require("firebase")
module.exports.run = async (client, message, args) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/Status`).once('value').then(function (snapshot) {
        const aaa = (snapshot.val());
        if(aaa === "Desativado") {
            message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, A loja não esta funcionando pois os coins estão desativados!`)
        }
        if(aaa === "Ativado") {
            return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto1/Nome`).once('value').then(function (snapshot) {
                const nome1 = (snapshot.val());
                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto1/Preço`).once('value').then(function (snapshot) {
                    const prec1 = (snapshot.val());
                    return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto2/Nome`).once('value').then(function (snapshot) {
                        const nome2 = (snapshot.val());
                        return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto2/Preço`).once('value').then(function (snapshot) {
                            const prec2 = (snapshot.val());
                            return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto3/Nome`).once('value').then(function (snapshot) {
                                const nome3 = (snapshot.val());
                                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto3/Preço`).once('value').then(function (snapshot) {
                                    const prec3 = (snapshot.val());
                                    return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto4/Nome`).once('value').then(function (snapshot) {
                                        const nome4 = (snapshot.val());
                                        return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto4/Preço`).once('value').then(function (snapshot) {
                                            const prec4 = (snapshot.val());
                                            return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto5/Nome`).once('value').then(function (snapshot) {
                                                const nome5 = (snapshot.val());
                                                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto5/Preço`).once('value').then(function (snapshot) {
                                                    const prec5 = (snapshot.val());
                                                    return firebase.database().ref(`Servidores/${message.guild.id}/Prefixo/Prefix`).once('value').then(function (snapshot) {
                                                        const prefixo = (snapshot.val());
    message.channel.send(new RichEmbed()
    .setTitle(`Shop | ${message.guild.name}`)
    .setColor("#05bd65")
    .setThumbnail(message.guild.iconURL)
    .setDescription(`Caso queira comprar algo de ${prefixo}comprar`)
    .addField(`Produto 1`,`
    Nome: ${nome1}
    Preço: ${prec1}`)
    .addField(`Produto 2`,`
    Nome: ${nome2}
    Preço: ${prec2}`)
    .addField(`Produto 3`,`
    Nome: ${nome3}
    Preço: ${prec3}`)
    .addField(`Produto 4`,`
    Nome: ${nome4}
    Preço: ${prec4}`)
    .addField(`Produto 5`,`
    Nome: ${nome5}
    Preço: ${prec5}`)
    .setFooter(`Loja aberta por: ${message.author.tag}`, `${message.author.avatarURL}`) 
    )
    })
})
})
})
})
})
})
})
})
})
})
}
})
}
module.exports.config = {
    name: "loja",
    aliases: ["shop","loja"]
}