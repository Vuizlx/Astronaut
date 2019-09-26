const firebase = require("firebase")
exports.run = async (client, message, args, opts) => {
  return firebase.database().ref(`Servidores/${message.guild.id}/Premium/Premium`).once('value').then(async function (snapshot) {
    const kkk = (snapshot.val());
    if(kkk === "Ativado") {
   if(message.member.voiceChannel !==message.guild.me.voiceChannel)
        return message.reply("você precisa estar no mesmo canal de voz que o meu para fazer isso");
    message.channel.send(`${message.author} A musica padarada e a foi lista limpa com sucesso !!`)
    let fetched = opts.map.get(message.guild.id);
    
    fetched.queue=[];
    console.log('Parado!');
    return fetched.dispatcher.end();
    } else {
      message.channel.send(`${message.author}, Você deve ter uma Key Premium Ativada Neste Servidor!`)
    }
  })
}

exports.config = {
    name: 'stop',
    aliases: ['stop','parar']
}