const { RichEmbed } = require("discord.js")
const firebase =  require("firebase")
module.exports.run = async (client, message, args) => {
  if(message.author.id != ("343778106340802580")) return message.reply(`Somente meu criador tem acesso a este comando!`)
  return firebase.database().ref(`Servidores/${message.guild.id}/Premium/Premium`).once('value').then(async function (snapshot) {
                                            const premium = (snapshot.val());
    return firebase.database().ref(`Servidores/${message.guild.id}/Premium/key`).once('value').then(async function (snapshot) {
                                            const key = (snapshot.val());
  message.channel.send(new RichEmbed()
                      .setTitle(message.guild.name)
                      .setColor("RANDOM")
                      .setThumbnail(message.guild.iconURL)
                      .addField(`👑 Premium`,`**${premium}**`)
                      .addField(`⭐ Key`,`**${key}**`)
                      )
})
})
}
module.exports.config = {
  name: "key",
  aliases: ["key"]
}