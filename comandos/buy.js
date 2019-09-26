const firebase = require("firebase");
const database = firebase.database()
module.exports.run = async (client, message, args) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/Status`).once('value').then(function (snapshot) {
        const aaa = (snapshot.val());
        if(aaa === "Desativado") {
            message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, A loja está desativada neste servidor!`)
        }
        if(aaa === "Ativado") {
            let item = args[0]
            if(item === "1") {
                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto1/Preço`).once('value').then(function (snapshot) {
                    const preço1 = (snapshot.val());
                    return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto1/Nome`).once('value').then(function (snapshot) {
                        const item1 = (snapshot.val());
                    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/${message.author.id}/coins`).once('value').then(function (snapshot) {
                        const quantia1 = (snapshot.val());
                        if(preço1 === "**</Não Definido>**") {
                            message.channel.send(`${message.author}, Nenhum item foi definido no slot 1!`)
                        }
                        if(preço1 > quantia1) {
                            message.channel.send(`${message.author}, Você não tem coins suficientes para comprar isso!`)
                        } else {
                            const Soma = preço1-quantia1
                            database.ref(`Servidores/${message.guild.id}/Coins/${message.author.id}`)
                            .update({
                                coins: `${Soma}`
                            })
                            message.channel.send(`${message.author}, Você acabou de compar o item "${item1}" por ${preço1}`)
                        }
                    })
                })
            })
            }
            if(item === "2") {}
            if(item === "3") {}
            if(item === "4") {}
            if(item === "5") {}
        }
    })
}
module.exports.config = {
    name: "buy",
    aliases: ["buy","comprar"]
}