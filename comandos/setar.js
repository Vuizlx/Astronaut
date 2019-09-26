const firebase = require("firebase")
module.exports.run = async (client, message, args) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/Status`).once('value').then(function (snapshot) {
        const aaa = (snapshot.val());
        if(aaa === "Desativado") {
            message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, Os Coins estão desativados neste servidor!`)
        }
        if(aaa === "Ativado") {
            let NEWcoins = args.slice(1).join(" ")
            let user = message.mentions.users.first()
            let ide = user.id
            firebase.database().ref(`Servidores/${message.guild.id}/Coins/${ide}`)
            .update({
                coins: NEWcoins
            })
            message.channel.send(`<:DiscordCoin:609555394435612730> ${message.author}, Você acabou de definir **${NEWcoins}** coins na conta do ${user}`)
        }
    
})
}
module.exports.config = {
    name: "setar",
    aliases: ["setar","dar"]
}