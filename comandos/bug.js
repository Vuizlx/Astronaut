const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let bug = args.slice(1).join(" ")
    let comando = args[0]
    let canal = client.channels.get('603387332833443864');
    canal.send(new Discord.RichEmbed()
    .setTitle(`Bugs E Reports`)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor("RANDOM")
    .setDescription(`Bug Reportado Do Servidor: ${message.guild.name}
Enviado Por: ${message.author.tag}
Comando: ${comando}.js
Falha: ${bug}`)
    ).then(msg => {
        msg.react("604380475158429707").then(() => {
            msg.react("604380680352301078")
        })
    })
    message.channel.send(`${message.author}, Bug Enviado Com Sucesso!`)
}
module.exports.config = {
    name: "bug",
    aliases: ["bug","report"]
}