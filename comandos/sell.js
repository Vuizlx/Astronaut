const firebase = require("firebase")
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES'))
        return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author} Você Não Tem Permições Para Isso!`)
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/Status`).once('value').then(function (snapshot) {
        const aaa = (snapshot.val());
        if(aaa === "Desativado") {
            message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, A venda não esta funcionando pois os coins estão desativados!`)
        }
        if(aaa === "Ativado") {
            return firebase.database().ref(`Servidores/${message.guild.id}/Prefixo/Prefix`).once('value').then(function (snapshot) {
                const prefixo = (snapshot.val());
            let item = args[0]
            let preço = args[1]
            let numero = args[2]
            if (!args[2]) return message.channel.send(`${message.author}, **Use ${prefixo}sell </Cargo> </Preço> </Slot>**`)
            if(numero === "1") {
                firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto1`)
                .update({
                    Nome: `${item}`,
                    Preço: `${preço} coins`
                })
                message.channel.send(`${message.author}, Você colocou o item "${item}" por ${preço} coins no slot 1`)
            }
            if(numero === "2") {
                firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto2`)
                .update({
                    Nome: `${item}`,
                    Preço: `${preço} coins`
                })
                message.channel.send(`${message.author}, Você colocou o item "${item}" por ${preço} coins no slot 2`)
            
            }
            if(numero === "3") {
                firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto3`)
                .update({
                    Nome: `${item}`,
                    Preço: `${preço} coins`
                })
                message.channel.send(`${message.author}, Você colocou o item "${item}" por ${preço} coins no slot 3`)
            
            }
            if(numero === "4") {
                firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto4`)
                .update({
                    Nome: `${item}`,
                    Preço: `${preço} coins`
                })
                message.channel.send(`${message.author}, Você colocou o item "${item}" por ${preço} coins no slot 4`)
            
            }
            if(numero === "5") {
                firebase.database().ref(`Servidores/${message.guild.id}/Loja/Produto5`)
                .update({
                    Nome: `${item}`,
                    Preço: `${preço} coins`
                })
                message.channel.send(`${message.author}, Você colocou o item "${item}" por ${preço} coins no slot 5`)
            
            }
        })
        }
    })
}
module.exports.config = {
    name: "sell",
    aliases: ["sell","vender"]
}