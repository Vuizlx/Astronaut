const { RichEmbed } = require("discord.js")
module.exports.run = (bot ,message, args, emoji) => {
message.channel.send(new RichEmbed()
.setColor('BLUE') 
.setThumbnail("https://images-ext-1.discordapp.net/external/478w6sHC10rbkvT86CHYPO6rHZuDKkpiNr7vTInVtGE/https/cdn.discordapp.com/icons/603022898566791208/7cf7943931f3ea517485baaa7afcffcd.jpg")
.setTitle(`Nave Do Astronaut`)  
.setDescription(`
Olá!
Bem parece que você esta precisando de um suporte melhorado!
Então entre no meu servidor de suporte!!
Link: https://discord.gg/dxBGNYK
(Servidor tambem encontrado no Discord Server List)`)    
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)    
);
}
exports.config = {
    name: 'suporte',
    aliases: ['suporte','support']
}
