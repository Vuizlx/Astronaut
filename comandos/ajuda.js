const { RichEmbed } = require('discord.js')
const firebase = require("firebase")
exports.run = async (client, message, args) => {
    firebase.database().ref(`Servidores/${message.guild.id}/Prefixo/Prefix`).once('value').then(async function (snapshot) {
    const a = (snapshot.val());
    message.react("620381774572158979").then(() => {
    message.delete(6000)
    })
    let bot = client
    let bicon = bot.user.displayAvatarURL;
    
const msg = await message.author.send(new RichEmbed()
.setColor('RED') 
.setTitle( `Ajuda | Astronaut`)  
.setThumbnail(bicon) 
.setDescription(`
    • Reaja com 🔦 para comandos de utilidade
    • Reaja com 🔧 para comandos de staff
    • Reaja com 💰 para comando de enconomia
    • Reaja com 😜 para comandos de diverção
    • Reaja com 🎵 para comandos de musica
    • Reaja com <:chrome:617770552475516948> para comandos relacionadosa web
    • Reaja com <a:minecraft:617750499890036736> para comandos do Minecraft
    `)    
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)    
);

const emojis = ['🔦', '🔧','💰','😜','🎵','617770552475516948','617750499890036736'];
for (const i in emojis) {
await msg.react(emojis[i])
}

const filter = (r, u) => r.me && u.id === message.author.id;
const collector = msg.createReactionCollector(filter, { max: 10, time: 60 * 1000 });

collector.on('collect', async (r) => {
    switch(r.emoji.name) {
        case '🔦':
            msg.edit(new RichEmbed()
            .setColor('BLUE')
            .setTitle(`Utilitarios | Astronaut`)
            .setDescription(`
            ⏱| **${a}ping - Para ver o seu ping e o meu**

            📈| **${a}serverinfo - Mostrara os ServerStatus**

            📉| **${a}botstatus - Mostra o meu status**

            🔗| **${a}site - Mostra o meu site para me adicionar em outros servidores**

            🎶| **${a}spotify - Mostra qual musica do spotify você esta ouvindo**

            ⛈| **${a}clima - Mostra o clima de uma cidade**

            🗂| **${a}perfil - Mostra o seu perfil**
            `)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
            )
            break;
        case '🔧':
            msg.edit(new RichEmbed()
            .setColor('BLACK')
            .setTitle(`Staff | Astronaut`)
            .setDescription(`
            📢| **${a}anunciar - Envia um anuncio em um canal que você determina**

            🚫| **${a}limparchat - Para limpar o chat de 2 a 500**

            🙅| **${a}kick - Para kikar uma pessoa do seu servidor**

            🏹| **${a}setartag - Da um cargo a um player ou jogador**

            💴| **${a}sell - Coloca algum cargo para venda usando coins**

             📝| **${a}painel - Abre o painel de configurações**
`)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)            
            )
            break;
        case '😜':
            msg.edit(new RichEmbed()
                .setColor('#ebff00')
                .setTitle(`Diverção | Astronaut`)
                     .setDescription(`
        😂| **${a}meme - Envia um meme aleatorio grigo**

        👐| **${a}abraçar - Da um abraço virtual em alguem**

        😗| **${a}beijar - Da um beijo virtual em alguem**

        🐶| **${a}dog - Mostra uma imagem de um cachorro**

        🐱| **${a}cat - Mostra uma imagem de um gato**
        `)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
            )
            break;
            case 'chrome':
                msg.edit(new RichEmbed()
                .setColor("GREEN")
                .setTitle(`Web | Astronaut`)
                .setDescription(`
                <:google:617769725551968266>| **${a}google - Mostra o resultado da sua pesquisa no Google**
                
                <:youtube:617769385284599957>| **${a}youtube - Mostra o resultado de um vídeos do Youtube**

                <:twitter:617769424648405012>| **${a}twitter - Mostra o resultado da sua pesquisa de um perfil do Twitter**

                <:facebook:617769271015112715>| **${a}facebook - Mostra o resultado da sua pesquisa de um perfil do Facebook**

                <:instagram:617769313822179451>| **${a}instagram - Mostra o resultado da sua pesquisa de um perfil do Instagram**

                🔗| **${a}encurtar - Encurta um link da web para você**
                `)
                )
            break;
        case '🎵':
            msg.edit(new RichEmbed()
            .setColor('PURPLE')
            .setTitle(`Musica | Astronaut`)
            .setDescription(`
            🎶| **${a}play - Começa a tocar uma musica**

            ⏹| **${a}stop - Para uma musica**

            ⏸| **${a}pause - Pausa uma musica**

            ▶| **${a}resume - Despausa a musica pausada**

            🎵| **${a}np - Mostra a musica que esta tocando**
            `)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
            )
            break;
            case 'minecraft':
                msg.edit(new RichEmbed()
                .setColor('RED')
                .setTitle(`Minecraft | Astronaut`)  
                .setDescription(`
                📡 | **${a}mcserver - Mostra o status de um servidor de Minecraft)**

                💎 | **${a}mcskin - Mostra a skin completa de um jogador premium**
                `)
                .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
                )
            break;
            case '💰':
                msg.edit(new RichEmbed()
                .setColor("#d49708")
                .setTitle(`Economia | Astronaut`)
                .setDescription(`
                <:DiscordCoin:609555394435612730> | **${a}coins - Mostra a quantidade de coins que você tem

                💳| **${a}coletar - Coleta seus coins diarios**

                 💸| **${a}pay - Paga uma quantidade de coins para alguem**

                 💵| **${a}buy - Compra algum item que estiver a venda**
                `)
                )
    }
})
    })
}
exports.config = { 
    name: 'ajuda',
    aliases: ['ajuda','help']
}