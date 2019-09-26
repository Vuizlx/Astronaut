const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyD_nS2I_k43J8DoPQ9MbUFlSiq2sgGFDEM");

exports.run = async (client, message, args) => {

  youtube.searchVideos(args, 1)
  .then(results => {

        const ytEmbed = new Discord.RichEmbed()
          .setAuthor(`Resultados de: ${args}`.split(',').join(' '), "https://cdn.discordapp.com/attachments/494189179383578624/503679656264990751/Sem_Titulo-1.png")
          .setImage(results[0].thumbnails.high.url)
          .setColor('#FF0000') 
          .addField('Nome do canal', results[0].channel.title, true)
          .addField('Titulo', results[0].title, true)
          .addField('Descrição', results[0].description)
          .addField("Publicado em", ` ${results[0].publishedAt}`)
          .addField('Link', `[Clique Aqui](https://youtu.be/${results[0].id})`);
          

          message.channel.send(ytEmbed);
      }).catch()
}
exports.config = {
    name: 'youtube',
    aliases: ['youtube','yt']
}