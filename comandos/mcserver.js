var Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {

var request = require('request');
var mcCommand = '/minecraft'; 
var mcIP = `${args.join(" ")}`; 
var mcPort = 25565; 

        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Erro ao conseguir o ip do servidor');
            }
            body = JSON.parse(body);
            var status = `\`${args.join(" ")}\``;
            if(body.online) {
                status = `\`${args.join(" ")}\``;
                if(body.players.now) {
                    status - '**' + body.players.now + '** people are playing!';
                } else {
                    status - '*Nobody is playing!*';
                }
            }

           let embed = new Discord.RichEmbed()
           .setTitle(`**McServer Comando**`)
           .setColor("RANDOM")
           .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.displayAvatarURL)
           .addField("**IP:**", `\`${mcIP}\``)
           .addField("**Porta:**", `\`${mcPort}\``)
           .addField("**Players:**", `\`${body.players.now}/${body.players.max}\``, true)
           .addField("**Versão:**", `\`${body.server.name}\``, true)
           .setImage(`http://status.mclive.eu/MCServer/${mcIP}/25565/banner.png`);
            message.channel.send(embed);
        });
}

exports.config = {
    aliases: ['mcserver'],
  name: "mcserver"
}