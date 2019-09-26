const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!args[2]) return message.reply("Porfavor faça uma pergunta mais completa")
  let replies = ["É certo", "É decididamente tão",
                 "Sem dúvida",
                 "Sim, Definitivamente",
                 "Na minha opinião, sim",
                 "Provavelmente",
                 "Sim",
                 "Sinais apontam que sim",
                 "Pergunte Mais Tarde",
                 "Melhor Eu Não Falar",
                 "Cannot predict now",
                 "Concentre-se e pergunte novamente",
                 "Não conte com isso",
                 "Minha resposta é não",
                 "Minhas fontes dizem não",
                 "Muito duvidoso"];
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  let ball = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#42f453")
  .addField("🎱Pergunta", question)
  .addField("🎱Resposta", replies[result]);
  message.channel.send(ball);
}
module.exports.config = {
    name: "8ball",
    aliases: ["8ball"]
}