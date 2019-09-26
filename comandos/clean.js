const firebase = require("firebase")
const db = firebase.database()
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_SERVER'))
        return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author} Você Não Tem Permições Para Isso!`)
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/Status`).once('value').then(function (snapshot) {
        const aaa = (snapshot.val());
        if(aaa === "Desativado") {
            message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, A loja está desativada neste servidor!`)
        }
        if(aaa === "Ativado") {
            let limpar = args[0]
            if(limpar === "1") {
                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto1/Nome`).once('value').then(function (snapshot) {
                    const Val = (snapshot.val());
                    if(Val === "**</Não Definido>**") {
                        message.channel.send(`${message.author}, O Slot 1 da loja ja está limpo!`)
                    } else {
                db.ref(`Servidores/${message.guild.id}/Loja/Produto1`)
                .update({
                    Nome: `**</Não Definido>**`,
                    Preço: `**</Não Definido>**`
                })
                message.channel.send(`${message.author}, O Slot 1 da loja foi limpo!`)
            }
            })
            }
            if(limpar === "2") {
                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto2/Nome`).once('value').then(function (snapshot) {
                    const Val = (snapshot.val());
                    if(Val === "**</Não Definido>**") {
                        message.channel.send(`${message.author}, O Slot 2 da loja ja está limpo!`)
                    } else {
                db.ref(`Servidores/${message.guild.id}/Loja/Produto2`)
                .update({
                    Nome: `**</Não Definido>**`,
                    Preço: `**</Não Definido>**`
                })
                message.channel.send(`${message.author}, O Slot 2 da loja foi limpo!`)
            }
        })
            }
            if(limpar === "3") {
                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto3/Nome`).once('value').then(function (snapshot) {
                    const Val = (snapshot.val());
                    if(Val === "**</Não Definido>**") {
                        message.channel.send(`${message.author}, O Slot 3 da loja ja está limpo!`)
                    } else {
                db.ref(`Servidores/${message.guild.id}/Loja/Produto3`)
                .update({
                    Nome: `**</Não Definido>**`,
                    Preço: `**</Não Definido>**`
                })
                message.channel.send(`${message.author}, O Slot 3 da loja foi limpo!`)
            }
            })
            }
            if(limpar === "4") {
                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto4/Nome`).once('value').then(function (snapshot) {
                    const Val = (snapshot.val());
                    if(Val === "**</Não Definido>**") {
                        message.channel.send(`${message.author}, O Slot 4 da loja ja está limpo!`)
                    } else {
                db.ref(`Servidores/${message.guild.id}/Loja/Produto4`)
                .update({
                    Nome: `**</Não Definido>**`,
                    Preço: `**</Não Definido>**`
                })
                message.channel.send(`${message.author}, O Slot 4 da loja foi limpo!`)
            }
        })
            }
            if(limpar === "5") {
                return firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto5/Nome`).once('value').then(function (snapshot) {
                    const Val = (snapshot.val());
                    if(Val === "**</Não Definido>**") {
                        message.channel.send(`${message.author}, O Slot 5 da loja ja está limpo!`)
                    } else {
                db.ref(`Servidores/${message.guild.id}/Loja/Produto5`)
                .update({
                    Nome: `**</Não Definido>**`,
                    Preço: `**</Não Definido>**`
                })
                message.channel.send(`${message.author}, O Slot 5 da loja foi limpo!`)
            }
        })
            }
        }
    })
}
module.exports.config = {
    name: "clean",
    aliases: ["clean","limpar"]
}