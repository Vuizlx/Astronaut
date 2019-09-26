const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let botping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("🏓 Pong:")
        .addField('BOT: ', Math.floor(botping) + 'ms')
        .addField('API: ', Math.floor(bot.ping) + 'ms')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM").setTimestamp()

        message.channel.send(pEmbed);
}

exports.config = { // module.exports.config
    name: 'ping',
    aliases: ['ping']
}