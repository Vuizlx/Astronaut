const Discord = require("discord.js")

module.exports.run = async (bot, message, args, emoji) => {
let user = message.mentions.users.first();
  if(!user) return message.channel.send('Você precisa mencionar alguém para beijar!');
  let embed = new Discord.RichEmbed()
    .setColor('04ff00')
    .addField(`${message.author.username} deu um beijo no(a) ${user.username}`, `${message.author.username} + ${user.username} é um belo casal?`)
    .setImage(`https://media.giphy.com/media/1BcfiGlOGXzQ5xU4DA/giphy.gif`)   
message.channel.send(embed)
}
exports.config = { 
    name: 'beijar',
    aliases: ['beijar']
}