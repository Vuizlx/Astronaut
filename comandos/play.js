const YouTube = require('simple-youtube-api');
const apikey = "AIzaSyD_nS2I_k43J8DoPQ9MbUFlSiq2sgGFDEM"
const yt = new YouTube(apikey);
const ytdl = require('ytdl-core-discord');
const moment = require('moment');
const Discord = require('discord.js');
const prism = require('prism-media');
const fs = require('fs');
const firebase = require("firebase")


exports.run = async (client, message, args, opts) => {
  return firebase.database().ref(`Servidores/${message.guild.id}/Premium/Premium`).once('value').then(async function (snapshot) {
    const kkk = (snapshot.val());
    if(kkk === "Ativado") {
        try {
            
            if (!message.member.voiceChannel)
                return message.reply(" entre em um canal de voz antes para que eu possa soltar o som...");
            
            if(!args)
                return message.reply(" coloque um link (YouTube) ou nome da música para que eu possa toca-la!");
            
            if(message.guild.me.voiceChannel && message.guild.me.voiceChannelID!=message.member.voiceChannelID)
                return message.reply(" o DJ "+client.user+" está ocupado no momento tocando em outro canal!");
            
            else{
                try {
                    
                     let data = opts.map.get(message.guild.id) || {};
                    
                    if(!data.queue)
                    data.queue = [];
                    
                    data.guildID = message.guild.id;
                    let check = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;
                    if(args[0].match(check)){
                        let playlist = await yt.getPlaylist(args[0]);
                        let videos = await playlist.getVideos();
                        for(let i=0;i<videos.length;i++){
                            data.queue.push({
                                nome:videos[i].title,
                                qr:message.author,
                                url:videos[i].url,
                                canal:videos[i].channel.title,
                                pub:videos[i].publishedAt,
                                anuncio:message.channel.id
                            });
                        }
                        
                        if(!data.connection)
                            data.connection = await message.member.voiceChannel.join();
                        
                        if(!data.dispatcher)
                            await play(client,opts,data);
                        else{
                            message.channel.send(playlist.title+" adicionada a fila!");
                        }
                    }
                    if(!args[0].match(check)){
                        
                        let song = await yt.searchVideos(args.join(" "),5);
                        let escolhida=null;
                        let embed= new Discord.RichEmbed().setTitle('Escolha de 1 a 5')
                        .addField('Resultados da busca:',song.map(r=>(song.indexOf(r)+1)+'-'+r.title).join('\n'))
                        .setColor('RANDOM')
                        message.channel.send(embed).then(async (msg)=>{
                            let emoji = ['1⃣',"2⃣","3⃣","4⃣","5⃣"];
                            for (let i=0;i<5;i++){
                                
                                
                                await msg.react(emoji[i]);
                            }
                            const filter = (r, u) => r.me && u.id === message.author.id;
                            const collector = msg.createReactionCollector(filter, {max: 1, time: 60 * 1000 });
    
                            collector.on('collect', async (e)=>{
                                msg.delete();
                                
                                switch (e.emoji.name) {
                                    case emoji[0]:
                                        escolhida=song[0];
                                        break;
                                    case emoji[1]:
                                        escolhida=song[1];
                                        break;
                                    case emoji[2]:
                                        escolhida=song[2];
                                        break;
                                    case emoji[3]:
                                        escolhida=song[3];
                                        break;
                                    case emoji[4]:
                                        escolhida=song[4];
                                        break;
                                    default:message.channel.send('deu ruim')
                                        break;
                                }
                                
                                data.queue.push({
                                    nome:escolhida.title,
                                    qr:message.author,
                                    url:escolhida.url,
                                    canal:escolhida.channel.title,
                                    pub:escolhida.publishedAt,
                                    anuncio:message.channel.id
                                });
                                
                                if(!data.connection)
                                    data.connection = await message.member.voiceChannel.join();
                                
                                if(!data.dispatcher)
                                    await play(client,opts,data);
                                else{
                                    message.channel.send(data.queue.slice(-1)[0].nome+" adicionada a fila!");
                                }
                            })
                        })
                        
                    }
                    
                    
                    opts.map.set(message.guild.id,data);
    
                } catch(e) {
                    console.log(e);
                    if(e.code && e.code==403)
                    message.channel.send('atualmente uso a API do YouTube de forma gratuita, e no momento atingi o limite da cota diária de requisições. Tente novamente mais tarde!');
                }
                
            }
            
        } catch(e) {
            message.channel.send(e.toString());
        }
    
    } else {
        message.reply("Você deve ter uma key premium ativada neste servidor!")
    }
    })
}
async function play(client,opts,data){
    function emoji(id) {
        return client.emojis.get(id).toString();
    };
    data.dispatcher = await data.connection.playOpusStream(await ytdl(data.queue[0].url));
    data.dispatcher.on('start', () => {
        data.dispatcher.player.streamingData.pausedTime = 0;
    });
    
    data.dispatcher.guildID = data.guildID;
    
    data.dispatcher.on('end',function(reason){
        
        console.log('Musica finalizada! razão = '+reason);
        finish(client, opts, this);
        
    }).on('error', console.error);
    
    if(data.dispatcher){
        let embed = new Discord.RichEmbed().addField(`${emoji("607440046659862528")} Música:`,'['+data.queue[0].nome+']('+data.queue[0].url+')').addField(`${emoji("608780708135305217")} Canal:`,data.queue[0].canal)
        .addField(`${emoji("605182296966037505")} Publicado em:`, moment(data.queue[0].pub).format("DD/MM/YYYY")).setFooter("Adicionada por: "+data.queue[0].qr.tag,data.queue[0].qr.avatarURL)
        .setColor('RANDOM');
        client.channels.get(data.queue[0].anuncio).send(embed);
    }
}

function finish(client, opts, dispatcher){
    try {
        
        let fetched = opts.map.get(dispatcher.guildID);
        
        fetched.queue.shift();

        
        if(fetched.queue.length>0){
            opts.map.set(dispatcher.guildID,fetched);
            console.log("Musica passada =>"+fetched.queue[0].nome);
            play(client,opts,fetched);
        }else{
            
            opts.map.delete(dispatcher.guildID);
            let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
            if(vc)
                vc.leave();
            
            console.log("Queue finalizada");
        }
        } catch (error) {
            console.log(error);
        }
}
exports.config = {
    name: "play",
    aliases: ["play","tocar"]
}