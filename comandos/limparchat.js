const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const deleteCount = parseInt(args[0], 10);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.member}, Desculp mas você não tem permições para isso!`)
    if(!deleteCount || deleteCount < 2 || deleteCount > 500)
    return message.channel.send(`${message.author}, Fale um numero de 2 ate 500 de mensagens para serem deletadas`)
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    .catch(error => message.reply( `${message.member}, Não possivel deletar pois: ${error}`))
        }


exports.config = { 
    name: 'limparchat',
    aliases: ['limparchat']
}