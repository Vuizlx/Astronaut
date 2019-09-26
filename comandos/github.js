const Discord = require("discord.js") //npm i discord.js -S ou se vc usa yarn so dar yarn add discord.js
const axios = require("axios") //npm i axios -S ou se vc usa yarn so dar yarn add axios
module.exports.run = async (client, message, args) => {
    let usuario = args.slice(0).join(" ")
    axios.get(`https://api.github.com/users/${usuario}`)
    .then(async function (response) {
        let nome = response.data.name
        let avatar = response.data.avatar_url
        let bio = response.data.bio
        let tipo = response.data.type
        let compania = response.data.company
        let link = response.data.html_url
        message.channel.send(new Discord.RichEmbed()
        .setTitle(`Github`)
        .setColor("BALCK")
        .setThumbnail(avatar)
        .addField(`User`,`${usuario}`)
        .addField(`Nome Do Usuario`,`${nome}`)
        .addField(`Compania`,`${compania}`)
        .addField(`Tipo De Usuario`,`${tipo}`)
        .addField(`Bio`,`${bio}`)
        .addField(`Link Para O Perfil`,`${link}`)
        )
    })
}
module.exports.config = {
    name: "github",
    aliases: ["github"]
}