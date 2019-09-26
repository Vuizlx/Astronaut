const Discord = require("discord.js");
const firebase = require("firebase")
exports.run = async (client, message, args, database) => {
    firebase.database().ref(`Servidores/${message.guild.id}/Canais/Denuncia/Canal`).once('value').then(function(snapshot) {
        const CanalDenuncia = (snapshot.val());
        firebase.database().ref(`Servidores/${message.guild.id}/Prefixo/Prefix`).once('value').then(function(snapshot) {
            const Prefix = (snapshot.val());
    if (message.mentions.users.size  == 0) return message.reply('Mencione alguem')
if (!args.slice(1).join(' ')) return message.reply(`Diga o motivo da denuncia! use ${Prefix}denuncia (usuario) (motivo)`)
var canal = message.guild.channels.find("name", `${CanalDenuncia}`);
if (!canal) return;
canal.send({embed:{
    'title':'Denuncias 🍭',
    'description':args.slice(1).join(' '),
    'thumbnail':{
        'url':message.mentions.users.first().avatarURL
    }
    ,'footer':{
        'text':'Denuncia enviada por: ' + message.author.tag
    },
    'color':message.member.displayColor
}})
message.reply(`🍭 **| Obrigado por denunciar o Usuario "${message.mentions.users.first()}", iremos conferir sua denuncia!**`)
        })
    })
}

module.exports.config = {
    name: "denuncia",
aliases: ["denuncia","denunciar"]
}