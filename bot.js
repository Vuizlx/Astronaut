const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const firebase = require('firebase');
const map = new Map();


var firebaseConfig = {
    apiKey: "AIzaSyCbKQ8BNeQkG9HpdpTOf2IfjxHyoQOI6PA",
    authDomain: "fir-bot-discord.firebaseapp.com",
    databaseURL: "https://fir-bot-discord.firebaseio.com",
    projectId: "fir-bot-discord",
    storageBucket: "",
    messagingSenderId: "495942441617",
    appId: "1:495942441617:web:49bf829e9f0c5f38"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let TOKEN = "Nzc4NzUzODU2MzIyMDExMjE3.X7WlCw.LTZwkzNeaJvLlWA8hWJBvmmLaW8";
client.on("ready", () => {
    console.log('Decolando !!')
const activity = [
    { name: `Sou um bot para quase tudo`, type: 0, url: "https://www.roblox.com" },
    { name: `Caramba nunca acharia que conseguiria me tornar isso !!`, type: 1, url: "https://www.twitch.tv/weafiful" },
    { name: `Ainda não estou pronto se acalme`, type: 2, url: "https://www.spotify.com/br/" },
    { name: `Sou muito util se quiser saber so dar uma vasculhada nos meus comandos`, type: 3, url: "https://www.spotify.com/br/" },
    { name: `Sou configurado inteiramente em pt-BR`, type: 0, url: "https://www.roblox.com" },
    { name: `Site em Desenvolvimento`, type: 1, url: "https://www.twitch.tv/weafiful" },
    { name: `😢 + 💵 = 😁 🤑`, type: 2, url: "https://www.twitch.tv/weafiful" },
    { name: `Quer me ajudar?? Faça uma donate para mim! https://is.gd/PgsPVa`, type: 3, url: "https://www.twitch.tv/wafiful" }]


setInterval(function () {
    let random = Math.floor(Math.random() * activity.length)
    client.user.setPresence({ game: activity[random] })
}, 15000)
})
const key =  Math.floor(Math.random() * 5468479574580) + 157657474870;
client.on('voiceStateUpdate', (oldMember, newMember) => {

    if (client.guilds.get(oldMember.guild.id).me.voiceChannel && client.guilds.get(oldMember.guild.id).me.voiceChannel.members.size < 2) {
        client.guilds.get(oldMember.guild.id).me.voiceChannel.leave();
        map.delete(oldMember.guild.id);
    }

    else if (!client.guilds.get(oldMember.guild.id).me.voiceChannel && map.get(oldMember.guild.id)) {
        map.delete(oldMember.guild.id);
        console.log('map da guild ' + oldMember.guild.name + ' deletado');
    }
})
client.on("guildCreate", async guild => {
    database.ref(`Servidores/${guild.id}/Prefixo`)
    .once('value').then(async function (snap) {
        if (snap.val() == null) {
            database.ref(`Servidores/${guild.id}/Prefixo`)
                .set({
                    Prefix: "a!"
                });
    }
})
    database.ref(`Servidores/${guild.id}/Autorole`)
    .once('value').then(async function (snap) {
        if (snap.val() == null) {
            database.ref(`Servidores/${guild.id}/Autorole`)
                .set({
                    Menção: `**</Não Definido>**`,
                    Cargo: `**</Não Definido>**`
                });
    }
})
database.ref(`Servidores/${guild.id}/Saida`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Saida`)
            .set({
                Menção: `**</Não Definido>**`,
                Canal: `**</Não Definido>**`,
                Mensagem: `**</Não Definida>**`
            });
}
})
database.ref(`Servidores/${guild.id}/Loja`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Loja/Produto1`)
        .set({
            Nome: `**</Não Definido>**`,
            Preço: `**</Não Definido>**`
        })
        database.ref(`Servidores/${guild.id}/Loja/Produto2`)
        .set({
            Nome: `**</Não Definido>**`,
            Preço: `**</Não Definido>**`
        })
        database.ref(`Servidores/${guild.id}/Loja/Produto3`)
        .set({
            Nome: `**</Não Definido>**`,
            Preço: `**</Não Definido>**`
        })
        database.ref(`Servidores/${guild.id}/Loja/Produto4`)
        .set({
            Nome: `**</Não Definido>**`,
            Preço: `**</Não Definido>**`
        })
        database.ref(`Servidores/${guild.id}/Loja/Produto5`)
        .set({
            Nome: `**</Não Definido>**`,
            Preço: `**</Não Definido>**`
        })
    }
})
database.ref(`Servidores/${guild.id}/Canais/Sugestão`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Canais/Sugestão`)
        .set({
            Canal: `**</Não Definido>**`,
            Menção: `</Não Definido>`
        })
    }
})
database.ref(`Servidores/${guild.id}/Ranks`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Ranks`)
        .set({
            Status: `Ativado`
        })
    }
})
database.ref(`Servidores/${guild.id}/Canais/Denuncia`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Canais/Denuncia`)
        .set({
            Canal: `**</Não Definido>**`,
            Menção: `</Não Definido>`
        })
    }
})
database.ref(`Servidores/${guild.id}/Canais/Punições`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Canais/Punições`)
        .set({
            Canal: `**</Não Definido>**`,
            Menção: `</Não Definido>`
        })
    }
})
database.ref(`Servidores/${guild.id}/Entrada`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Coins`)
            .set({
                Status: `Ativado`
            });
}
})
database.ref(`Servidores/${guild.id}/Entrada`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Entrada`)
            .set({
                Menção: `**</Não Definido>**`,
                Canal: `**</Não Definido>**`,
                Mensagem: `**</Não Definida>**`,
                Tipo: `</Não Definido>`
            });
}
})
database.ref(`Servidores/${guild.id}/Premium`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidores/${guild.id}/Premium`)
            .set({
                Premium: "Desativado",
                key: `${key}`
            });
}
})
})
client.on("guildDelete", async guild => {
    database.ref(`Servidores/${guild.id}`).remove()
})

client.on("message", async message => {
    
        if(message.channel.type == "dm") return;
        return firebase.database().ref(`Servidores/${message.guild.id}/Prefixo/Prefix`).once('value').then(function (snapshot) {
    const aaaaa = (snapshot.val());
    const prefixo = `${aaaaa}`
    const set = `${prefixo}set `
    return firebase.database().ref(`Servidores/${message.guild.id}/Ranks/Status`).once('value').then(function (snapshot) {
        const Ranks = (snapshot.val());
        if(Ranks === "Ativado") {
        global.xp = '';
        global.nextrank = '';
        let pointsADD = Math.floor(Math.random() * 7) + 8;
    
        database.ref(`Servidores/${message.guild.id}/Ranks/${message.author.id}`)
        .once('value').then(async function(snap) {
            if(snap.val() == null) {
                database.ref(`Servidores/${message.guild.id}/Ranks/${message.author.id}`)
                .set({
                    xp: 0,
                    rank: 1,
                    reward: 0,
                });
            } else {
                xp = snap.val().xp + pointsADD
                nextrank = snap.val().rank * 500;
                database.ref(`Servidores/${message.guild.id}/Ranks/${message.author.id}`)
                .update({
                    xp: xp
                })
                
                if(nextrank <= xp) {
                    nextrank = snap.val().rank + 1;
                    database.ref(`Servidores/${message.guild.id}/Ranks/${message.author.id}`)
                .update({
                    rank: nextrank
                })
    
                await message.channel.send(`🔼 ${message.author} Parabens!! Você passou de Rank!!`)
            }
        }
    
        });
    }


    

let member = message.mentions.members.first()
    if (member)
        if (member.id == `${client.user.id}`)
            message.channel.send(`Olá eu sou o Astronaut um bot focado em Comandos gerais!
Caso esteja perdido basta dar ${aaaaa}ajuda para ver minha lista de comandos!!
Criado por <@343778106340802580>`)
const args = message.content.slice(prefixo.length).trim().split(/ +/g);
const config = message.content.slice(set.length).trim().split(/ +/g);
const cinco = config.shift().toLowerCase();
const comando = args.shift().toLowerCase();

try {
        let opts = {
           dev:'234311548158476288',
           map:map
        }
    fs.readdir('./comandos', (err, files) => {
    
        if (err) console.log(err);
        
        let jsFile = files.filter(f => f.split('.').pop() === "js");
        console.log(jsFile);
        
        if (jsFile.length <= 0) {
         return   message.channel.send(`${message.author}, Desculpe mas não achei esse comando 😕`);
        }
        
        jsFile.forEach((f) => {
            let pull = require(`./comandos/${f}`);
            console.log(`${f} carregado com sucesso!!`);
            
            if (pull.config.aliases.includes(comando)) pull.run(client, message, args, opts);
            
            });
        })
    }catch (error) {
        console.log(error);
    }
    if (cinco === "autorole") {
        if(!message.member.hasPermission('MANAGE_ROLES'))
        return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author} Você Não Tem Permições Para Isso!`)
    const one = message.mentions.roles.first().name
    const two = message.mentions.roles.first()
    database.ref(`Servidores/${message.guild.id}/Autorole`)
    .update({
        Menção: `${two}`,
        Cargo: `${one}`
    })
    message.channel.send(`<:certo:604380475158429707> ${message.author}, Autorole definido para ${two}`)
} 
if(cinco === "puniçoes") {
    if(!message.member.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author} Você Não Tem Permições Para Isso!`)
    let canal = message.mentions.channels.first().id
    let canal2 = message.mentions.channels.first()
    database.ref(`Servidores/${message.guild.id}/Canais/Punições`)
    .update({
        Canal: `${canal}`,
        Menção: `${canal2}`
    })
    message.channel.send(`<:certo:604380475158429707> ${message.author}, Canal de Punições Setado Para ${canal2}`)
}
if(cinco === "prefix") {
    if(!message.member.hasPermission('MANAGE_GUILD'))
        return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author} Você Não Tem Permições Para Isso!`)
    const one = args.slice(1).join("")
    database.ref(`Servidores/${message.guild.id}/Prefixo`)
    .update({
        Prefix: `${one}`
    })
    message.channel.send(`<:certo:604380475158429707> ${message.author}, Prefixo Alterado para **${one}** !`)
}

if(cinco === "sugestao") {
    if(!message.member.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author} Você Não Tem Permições Para Isso!`)
    const one = message.mentions.channels.first().name
    const two = message.mentions.channels.first()
    database.ref(`Servidores/${message.guild.id}/Canais/Sugestão`)
    .update({
        Canal: `${one}`,
        Menção: `${two}`
    })
    message.channel.send(`<:certo:604380475158429707> ${message.author}, Canal de sugestão será agora **${two}** !`)
}
if(cinco === "coins") {
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, Você não tem permições para fazer isso!`)
    database.ref(`Servidores/${message.guild.id}/Coins/Status`)
    .once('value').then(async function(snap) {
        if(snap.val() == "Ativado") {
            database.ref(`Servidores/${message.guild.id}/Coins`)
            .update({
                Status: `Desativado`
            })
            message.channel.send(`<:certo:604380475158429707> ${message.author}, Os Coins Foram Desativados Com Sucesso!`)
        }
    })
    database.ref(`Servidores/${message.guild.id}/Coins/Status`)
    .once('value').then(async function(snap) {
        if(snap.val() == "Desativado") {
            database.ref(`Servidores/${message.guild.id}/Coins`)
            .update({
                Status: `Ativado`
            })
            message.channel.send(`<:certo:604380475158429707> ${message.author}, Os Coins Foram Ativados Com Sucesso!`)
        }
    })
}
if(cinco === "ranks") {
  if(!message.member.hasPermission('MANAGE_MESSAGES'))
  return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author}, Você não tem permições para fazer isso!`)
  database.ref(`Servidores/${message.guild.id}/Ranks/Status`)
  .once('value').then(async function(snap) {
      if(snap.val() == "Ativado") {
          database.ref(`Servidores/${message.guild.id}/Ranks`)
          .update({
              Status: `Desativado`
          })
          message.channel.send(`<:certo:604380475158429707> ${message.author}, Os Ranks Foram Desativados Com Sucesso!`)
      }
  })
  database.ref(`Servidores/${message.guild.id}/Ranks/Status`)
  .once('value').then(async function(snap) {
      if(snap.val() == "Desativado") {
          database.ref(`Servidores/${message.guild.id}/Ranks`)
          .update({
              Status: `Ativado`
          })
          message.channel.send(`<:certo:604380475158429707> ${message.author}, Os Ranks Foram Ativados Com Sucesso!`)
      }
  })
}
if(cinco === "entrada") {
    let canal = message.mentions.channels.first().name
    let menção = message.mentions.channels.first()
    if(canal === null) {
    message.reply(`Use **${prefixo}set entrada </Canal> </Mensagem> O Membro Será Mencionado Primeiro!**`)
    }

    let mensagem = args.slice(2).join(" ")
    if(mensagem === null) {
    message.reply(`Use **${prefixo}set entrada </Canal> </Mensagem> O Membro Será Mencionado Primeiro!**`)
    }

    database.ref(`Servidores/${message.guild.id}/Entrada`)
    .update({
        Canal: `${canal}`,
        Menção: `${menção}`,
        Mensagem: `${mensagem}`
    })
    message.channel.send(`${message.author}, Canal De Entrada Setado Para ${menção}, Com a Mensagem ${mensagem}`)
}
if(cinco === "denuncias") {
    if(!message.member.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(`<:Cancel:604380680352301078> Desculpe ${message.author} Você Não Tem Permições Para Isso!`)
    const one = message.mentions.channels.first().name
    const two = message.mentions.channels.first()
    database.ref(`Servidores/${message.guild.id}/Canais/Denuncia`)
    .update({
        Canal: `${one}`,
        Menção: `${two}`
    })
    message.channel.send(`<:certo:604380475158429707> ${message.author}, Canal de denuncias será agora **${two}** !`)
}

            return firebase.database().ref(`Servidores/${message.guild.id}/Autorole/Cargo`).once('value').then(function (snapshot) {
                const Cargo = (snapshot.val());
                if(Cargo === "**</Não Definido>**") {} else {
                client.on("guildMemberAdd", function (member) {
                    let role = member.guild.roles.find("name", `${Cargo}`);
                    member.addRole(role).catch(console.error);
                });
                return firebase.database().ref(`Servidores/${message.guild.id}/Entrada/Canal`).once('value').then(function (snapshot) {
                    const Canal = (snapshot.val());
                    return firebase.database().ref(`Servidores/${message.guild.id}/Entrada/Mensagem`).once('value').then(function (snapshot) {
                        const mensagem = (snapshot.val());
                client.on("guildMemberAdd", function (member) {
                    let canal = member.guild.channels.find("name",`${Canal}`)
                    canal.send(`${member}, ${mensagem}`)
                });
            });
        });
            }
        })
    })
        
        {boolean}
        this.deleted = false; 
        return database.ref(`Servidores/${guild.id}`).remove()
    })

})

client.login(TOKEN)
