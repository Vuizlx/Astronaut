const Discord = require("discord.js");
const firebase = require("firebase")

module.exports.run = async (client, message, args) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Canais/Punições/Canal`).once('value').then(async function (snapshot) {
        const canal = (snapshot.val());
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(bUser === message.author) return message.channel.send(`Você Não Pode Me Banir`)
    if(!bUser) return message.channel.send(`Não Foi Possivel Achar O Usuario`)
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send(`Please provide a reason!`)
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:Cancel:604380680352301078> **| Você Não Pode Banir Membros!**`)
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("User", bUser.user.tag)
    .addField("Moderator", message.author.tag)
    .addField("Reason", bReason)
    .setTimestamp()
    let incidentchannel = client.channels.get(`${canal}`);
    if(!incidentchannel) return message.channel.send(`<:Cancel:604380680352301078> **| O Canal De Punições Não Foi Definido**`)
    let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .addField("Banned In", message.guild.name)
    .setColor("#bc0000")
    .addField("Moderator", message.author.tag)
    .addField("Reason", bReason)
    bUser.send(embed);
    message.channel.send(`<:certo:604380475158429707> **| Esse Membro Foi Banido Com Sucesso!**`)
    
    bUser.ban(bReason)
    incidentchannel.send(banEmbed);
})
}
module.exports.config = {
    name: "ban",
    aliases: ["ban","banir"]
}