module.exports.run = async(client, message, args, Discord) => {
let pessoa = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let avatar = pessoa.displayAvatarURL
    if (avatar.endsWith(".gif")) {
      avatar = `${pessoa.displayAvatarURL}?size=2048`
    }
    message.channel.send({embed: {
      title: `${pessoa.tag}`,
      description: `[Link Direto](${avatar})`,
      image: {url: `${avatar}`},
      color: 0X660066
    }})
}
module.exports.config = {
    name: "avatar",
    aliases: ["avatar"]
}
