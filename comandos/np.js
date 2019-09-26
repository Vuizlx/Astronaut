const Discord = require('discord.js');
const moment = require('moment');
const firebase = require("firebase")
exports.run = async (client, message, args, opts) => {
  return firebase.database().ref(`Servidores/${message.guild.id}/Premium/Premium`).once('value').then(async function (snapshot) {
    const kkk = (snapshot.val());
    if(kkk === "Ativado") {
function emoji(id) {
        return client.emojis.get(id).toString();
    };
    let musica = opts.map.get(message.guild.id);
    if(!musica)
        return message.reply("não há nenhuma música!");
    
    let embed = new Discord.RichEmbed().setTitle(`${emoji("607440046659862528")} Tocando agora:`).
    setDescription('['+musica.queue[0].nome+']('+musica.queue[0].url+')').addField(`${emoji("608780708135305217")} Canal:`,musica.queue[0].canal)
    .addField(`${emoji("605182296966037505")} Publicado em:`, moment(musica.queue[0].pub).format("DD/MM/YYYY"))
    .setFooter("Adicionada por: "+musica.queue[0].qr.tag,musica.queue[0].qr.avatarURL)
    .setColor('RANDOM');
    message.reply(embed)
    } else {
      message.channel.send(`${message.author}, Você deve ter uma Key Premium Ativada Neste Servidor!`)
    }
  })
}

exports.config = {
    name: 'nowplaying',
    aliases: ['np','tocando agora']
}