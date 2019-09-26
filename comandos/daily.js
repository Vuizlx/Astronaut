const firebase = require("firebase");
const database = firebase.database();
const db = database
module.exports.run = async (client, message, args) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/Status`).once('value').then(function (snapshot) {
        const aaa = (snapshot.val());
        if(aaa === "Desativado") {
            message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, Os Coins estão desativados neste servidor!`)
        }
        if(aaa === "Ativado") {
const coin = Math.floor(Math.random() * 50) + 10;
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/${message.author.id}`).once('value').then(function (snapshot) {
        const coins = (snapshot.val() + coin);
        db.ref(`Servidores/${message.guild.id}/Coins/${message.author.id}/Cooldown`).once('value').then(async function(snap){
            let delay = 8.64e+7; // 1 dia
            if(snap){
                if(snap.val() !== null && snap.val() - (Date.now() - snap.val()) > 0){
                    return message.reply("Você precisa esperar 1 dia para coletar os coins navamente!");
                }else{
                db.ref(`Servidores/${message.guild.id}/Coins/${message.author.id}/Cooldown`).set(Date.now())
                database.ref(`Servidores/${message.guild.id}/Coins/${message.author.id}`)
        .once('value').then(async function(snap) {
            if(snap.val() == null) {
                database.ref(`Servidores/${message.guild.id}/Coins/${message.author.id}`)
                .set({
                    coins: coin
                });
            } else {
                database.ref(`Servidores/${message.guild.id}/Coins/${message.author.id}`)
                .update({
                    coins: coins
                });
            };
            message.channel.send(`<:DiscordCoin:609555394435612730> ${message.author}, Você coletou seus ${coin} coins diarios!`)
                }
            );
        };
    };
})
})
}
})
}




module.exports.config = {
    name: "daily",
    aliases: ["coletar","daily"]
}