const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let guild = message.guild;
    let icon = message.guild.iconURL;
    let createdAtRaw = guild.createdAt.toDateString();
    let createdAt = createdAtRaw.split(" ");
    let bots = message.guild.members.filter(m => m.user.bot).size;
    let humans = message.guild.members.filter(m => !m.user.bot).size;
    let channels = message.guild.channels.size;
    let textChannels = message.guild.channels.filter(m => m.type == "text").size;
    let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
    let emojis = [];
    guild.emojis.forEach(emoji => {
        emojis.push(`\`${emoji.name}\``);
    });
    emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");
    let roles = [];
    guild.roles.forEach(role => {
        roles.push(`\`${role.name}\``);
    });
    roles = roles.join(", ");
    let embed = new Discord.RichEmbed()
    .setTitle(`Status do Servidor`)
    .setColor("RANDOM")
    .setThumbnail(icon)
    .addField(':house: Nome', guild.name, true)
    .addField(':link: ID', guild.id, true)
    .addField(':shield: Dono', guild.owner, true)
    .addField(':motor_scooter: Criado', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
    .addField(':triangular_flag_on_post: Região', guild.region.toUpperCase(), true)
    .addField(':busts_in_silhouette: Membros Totais:', guild.memberCount, true)
    .addField(':robot: Bots:', bots, true)
    .addField(':bust_in_silhouette: Usuarios:', humans, true)
    .addField(':trophy: Nivel de Verificação:', guild.verificationLevel, true)
    .addField(':pencil: Canais de Texto:', textChannels, true)
    .addField(':speaking_head: Canais de Voz', voiceChannels, true)
    .addField(':family_wwgb: Cargos', `${guild.roles.size}`, true)
    .addField(':cowboy: Emojis', `${guild.emojis.size}`, true)
    .setFooter(`Comando pesso por: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send(embed);
}

exports.config = {
    name: "serverinfo",
    aliases: ["serverinfo"]
}