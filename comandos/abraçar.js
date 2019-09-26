const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (Robin, message, args, emoji) => {

let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${message.author.username}\`, Você esqueçeu de **mencionar** o membro que deseja abraçar!`);
if(message.mentions.users.first().id == message.author.id) return message.channel.send(`\`${message.author.username}\`, Você não pode abraçar si mesmo.`);
if(message.mentions.users.first().bot) return message.channel.send(`\`${message.author.username}\`, Você não pode abraçar um bot.`);


const {body} = await superagent
.get(`https://nekos.life/api/v2/img/hug`);

var embed = new Discord.RichEmbed()
.setDescription(`\`${message.author.username}\` **Deu um abraço no(a)** \`${usuario.username}\``)
.setImage(body.url)
.setColor('36393e')
.setTimestamp(new Date())
message.channel.send(embed);

}

exports.config = {
    name: "abraçar",
    aliases: ["abraçar"]
}