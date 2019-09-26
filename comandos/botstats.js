const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');

exports.run = async (client ,message, args) => {
  let bot = client
  let bicon = bot.user.displayAvatarURL;
  const msg = await message.channel.send(new RichEmbed()
  .setTitle(`Informações | ${bot.user.username}`)
  .setColor("RANDOM")
  .setThumbnail(bicon)
  .addField("Nome do bot", bot.user.username)
  .addField("Servidor oficial","Nave do Astronaut")
  .addField("Criado em:", bot.user.createdAt)
  .addField("Desenvolvido",`<:javascript:604380930504654869> JavaScript`)
  .addField("DataBase",`<:firebase:607370878849646592> FireBase`)
  );
  const emojis = ['604380930504654869','607370878849646592'];
for (const i in emojis) {
    await msg.react(emojis[i])
}
  const filter = (r, u) => r.me && u.id === message.author.id;
  const collector = msg.createReactionCollector(filter, { max: 10, time: 60 * 1000 });
  
  collector.on('collect', async (r) => {
      switch(r.emoji.name) {
        case 'javascript':
            msg.edit(new RichEmbed()
            .setColor('BLUE')
            .setTitle(`JavaScript | Astronaut`)
            .setDescription(`
            https://www.javascript.com
            `)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
            )
            break;
        case 'firebase':
            msg.edit(new RichEmbed()
            .setColor('BLACK')
            .setTitle(`DataBase | Astronaut`)
            .setDescription(`
            https://firebase.google.com/docs/projects/learn-more?authuser=0
`)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)            
            )
            break;
          }
        })
      }
module.exports.config = {
  name:"botstatus",
  aliases: ["botstatus","botstats","botinfo"]
}