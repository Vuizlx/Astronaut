const firebase = require("firebase")
exports.run = async (client, message, args, opts) => {
    return firebase.database().ref(`Servidores/${message.guild.id}/Premium/Premium`).once('value').then(async function (snapshot) {
    const kkk = (snapshot.val());
      if(kkk === "Ativado") {
        let fetched = opts.map.get(message.guild.id);
        
        if(!fetched)
            return message.reply(" não há nenhuma música");
        
        if(message.member.voiceChannel !==message.guild.me.voiceChannel)
            return message.reply(" você não está conectado no mesmo que estou");
        
        let count = message.member.voiceChannel.members.size-1;
        let requerido;
        
        
        count%2==0? requerido = Math.ceil(count/2)+1 : requerido = Math.ceil(count/2);
        

        if(!fetched.queue[0].votes)
            fetched.queue[0].votes = [];
        if(fetched.queue[0].votes.includes(message.member.id))
            return message.reply(" você já votou, espertinho 😏");
        
        fetched.queue[0].votes.push(message.member.id);
        
        let msg = await message.channel.send('Votos para pular: '+fetched.queue[0].votes.length+'/'+requerido)
        msg.delete(5000)
        opts.map.set(message.guild.id,fetched);
        if (fetched.queue[0].votes.length>=requerido) {
            message.channel.send("Pulei!");
            return fetched.dispatcher.end();
        }
        
        console.log('musica pulada');
      } else {
        message.channel.send(`${message.author}, Você deve ter uma Key Premium Ativada Neste Servidor!`)
      }
    })

}

exports.config = {
    name: 'skip',
    aliases: ['skip','pular']
}