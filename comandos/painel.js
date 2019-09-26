const firebase = require('firebase')
const database = firebase.database()
const { RichEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/Status`).once('value').then(function (snapshot) {
        const coins = (snapshot.val());
        return firebase.database().ref(`Servidores/${message.guild.id}/Ranks/Status`).once('value').then(function (snapshot) {
            const ranks = (snapshot.val());
            return firebase.database().ref(`Servidores/${message.guild.id}/Autorole/Menção`).once('value').then(function (snapshot) {
                const at = (snapshot.val());
                return firebase.database().ref(`Servidores/${message.guild.id}/Prefixo/Prefix`).once('value').then(function (snapshot) {
                    const prefix = (snapshot.val());
                    return firebase.database().ref(`Servidores/${message.guild.id}/Canais/Sugestão/Menção`).once('value').then(function (snapshot) {
                        const sugerir = (snapshot.val());
                        return firebase.database().ref(`Servidores/${message.guild.id}/Canais/Denuncia/Menção`).once('value').then(function (snapshot) {
                            const denuncia = (snapshot.val());
                            return firebase.database().ref(`Servidores/${message.guild.id}/Entrada/Menção`).once('value').then(function (snapshot) {
                                const entrada = (snapshot.val());
                                return firebase.database().ref(`Servidores/${message.guild.id}/Entrada/Mensagem`).once('value').then(function (snapshot) {
                                    const entradamsg = (snapshot.val());
                                    return firebase.database().ref(`Servidores/${message.guild.id}/Saida/Menção`).once('value').then(function (snapshot) {
                                        const saida = (snapshot.val());
                                    return firebase.database().ref(`Servidores/${message.guild.id}/Saida/Mensagem`).once('value').then(function (snapshot) {
                                        const saidamsg = (snapshot.val());
                                        return firebase.database().ref(`Servidores/${message.guild.id}/Canais/Punições/Menção`).once('value').then(function (snapshot) {
                                            const puni = (snapshot.val());
                                          return firebase.database().ref(`Servidores/${message.guild.id}/Premium/Premium`).once('value').then(function (snapshot) {
                                            const key = (snapshot.val());
    message.channel.send(new RichEmbed()
    .setTitle(`Painel  ${message.guild.name}`)
    .setColor("#000000")
    .setDescription(`<:databaseconfig:604381246939856943> ${message.author} Caso Queira Configurar Algo De ${prefix}config`)
    .setThumbnail(message.guild.iconURL)
    .addField(`<a:config:605190039839965214> Prefixo`,`**${prefix}**`)
    .addField(`⭐ AutoRole`,`${at}`)
    .addField(`<a:Entrada:605424199942799392> Entrada`,`
    **Canal:** ${entrada}
    **Mensagem:** ${entradamsg}`)
    .addField(`<a:saindo:605189558715416577> Saida`,`
    **Canal:** ${saida}
    **Mensagem:** ${saidamsg}`)
    .addField(`🖊 Canais`,`
    **Sugestões:** **${sugerir}**
    **Denuncias:** **${denuncia}**
    **Punições:** **${puni}**`)
    .addField(`<:DiscordCoin:609555394435612730> Coins`,`**${coins}**`)
    .addField(`<:Rank:620066744484233226> Ranks`,`**${ranks}**`)
    .addField(`👑 Premium`, `**${key}**`)
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
})
};
exports.config = { 
    name: 'painel',
    aliases: ['painel']
}