const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("😕parece que você não tem permições para isso 😕")
    let channel = message.mentions.channels.first(); 
    if(!channel)
        return message.channel.send('Você precisa mencionar um canal!').then(msg => {
            msg.delete(5000)  
            message.delete(5000)  
        })

    let argumentos = args.slice(1).join(" ")
    if(!argumentos)
        return message.channel.send({embed: {
            title: "Anunciar",
            description: "Uso correto: `a!anunciar #Canal <Mensagem>`",
            fields: [{
                name: "Alternativas",
                value: "`nenhuma`"
            },
            ],
        }}).then(msg => { 
            msg.delete(5000)  
            message.delete(5000)  

})
    let embed = new Discord.RichEmbed()
    .setTitle("Anúncio!")
    .setColor("RANDOM")
    .setThumbnail("http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif")
    .addField("Mensagem:", argumentos)
    .setFooter(`Enviado por: ${message.author.tag}`, message.author.avatarURL)


    channel.send("@everyone").then(msg => {
        msg.delete() 
    })
    channel.send(embed)
    message.delete(5000)  
    message.channel.send("Enviado com sucesso!").then(msg => { 
        msg.delete(5000)  
    })
}

module.exports.config = {
    name: 'anunciar',
    aliases: ['anunciar']
}