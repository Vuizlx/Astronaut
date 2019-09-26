const firebase = require("firebase")
exports.run = async (client, message, args, opts) => {
return firebase.database().ref(`Servidores/${message.guild.id}/Premium/Premium`).once('value').then(async function (snapshot) {
    const kkk = (snapshot.val());
        if(kkk === "Ativado") {
        let fetched = opts.map.get(message.guild.id);

        
        if(!fetched)
            return message.reply(" não há músicas na fila para tocar");
        
        if(!message.member.voiceChannel || message.member.voiceChannel !==message.guild.me.voiceChannel)
            return message.reply(" você não está conectado a um canal de voz ou no mesmo que estou");
        
        if(!fetched.dispatcher.paused)
            return message.reply(" música já restá tocando");
        
        
        fetched.dispatcher.resume();

        message.reply(` a música ${fetched.queue[0].nome} foi retomada!`);
        } else {
          message.channel.send(`${message.author}, Você deve ter uma Key Premium Ativada Neste Servidor!`)
        }
})
}

exports.config = {
    name: 'resume',
    aliases: ['resume']
}

exports.config = {
    name: 'resume',
    aliases: ['resume']
}

