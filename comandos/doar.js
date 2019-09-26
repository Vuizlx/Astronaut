const { RichEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
    message.channel.send(new RichEmbed()
    .setTitle(`**DONATE**`)
    .setThumbnail(client.user.avatarURL)
    .setColor("RANDOM")
    .setDescription(`
    Olá ${message.author}, Quer fazer uma donate e me ajudar?
    Link: https://is.gd/PgsPVa
    `)
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
    )
}
module.exports.config = {
    name: "doar",
    aliases: ["doar","donate"]
}