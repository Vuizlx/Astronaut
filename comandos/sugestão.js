const Discord = require('discord.js');
const firebase = require('firebase')
module.exports.run = async (client, message, args, database) => {
return firebase.database().ref(`Servidores/${message.guild.id}/Canais/Sugestão/Canal`).once('value').then(function (snapshot) {
        const scanal = (snapshot.val());
    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("insira sua sugestão.")

    let embed = new Discord.RichEmbed()
        .setColor("#0051FF")
        .addField("**Sugestão**", `${sugestao}`)
        .setFooter(`Sugestão enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp(new Date())

    let canal = message.guild.channels.find(canal => canal.name === `${scanal}`);

    message.delete();
    canal.send(embed).then(msg => msg.react("604380475158429707").then(r => msg.react("604380680352301078")));
    message.channel.send(`<:certo:604380475158429707> ${message.author}, sua sugestão foi enviada com sucesso!`);
    })
}

module.exports.config = {
    name: "sugestão",
    aliases: ["sugerir","sugestao","sugestão"]
}