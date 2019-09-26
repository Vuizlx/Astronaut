const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/meow`);
    
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`**GATO ENTREGUE:**`)
    .setImage(body.url)
    .setColor('36393e')
    .setTimestamp(new Date())
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
    message.channel.send(embed);
    
}

module.exports.config = {
    name: "cat",
    aliases: ["cat","gato","meow"]
}