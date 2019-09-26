const { RichEmbed } = require('discord.js')
module.exports.run = async (client, message, args, emoji) => {
    message.channel.send(new RichEmbed()
    .setColor("BLUE")
    .setThumbnail(client.user.displayAvatarURL)
    .setTitle(`WebSite`)
    .setDescription(`Minha Pequena Loja Online:
    https://is.gd/PgsPVa
    Esta Em Desenvolvimento Então Não Me Julgue`)
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
    )
}
module.exports.config = {
    name: "site",
aliases: ["site","web","website"]
}