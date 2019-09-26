const Discord = require('discord.js')
const firebase = require("firebase")
exports.run = (client, message, args) => {
    firebase.database().ref(`Servidores/${message.guild.id}/Prefixo/Prefix`).once('value').then(async function (snapshot) {
        const a = (snapshot.val());
  if(!args[0]) return message.channel.send(`Use: ${a}reverso <texto>`);

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}..Espere ... Você quebrou!`
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('INVERSO: ', '**' + `${args.join(' ')}` + '**')
  .addField('REVERSO: ', '**' + `${sreverse}` + '**')
  message.channel.send({embed: reverseEmbed})
})
}
exports.config = {
    name: "reverse",
    aliases: ["reverse","reverso"]
}