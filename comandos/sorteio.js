const discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`Desculpe ${message.author}, você não tem permições para isso!`)

    winnerCount = args[0];
    
    time = args[1];
    
    item = args.splice(2, args.length).join(' ');
 
    
    message.delete();
 
    
    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));
 
    
    var giveawayEmbed = new discord.RichEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setFooter(`Tempo: ${dateTime}`)
        .setDescription(item);
 
    
    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");
 
    
    setTimeout(function () {
 
        
        var random = 0;
        var winners = [];
        var inList = false;
 
        
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
 
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
 
        
        if (peopleReacted.length == 0) {
            return message.channel.send("Não teve nenhum vencedor pois não teve nenhuma reação !!");
        }
 
        
        if (peopleReacted.length < winnerCount) {
            return message.channel.send("Há muitas poucas pessoas no sorteio por isso ninguem ganhou !!");
        }
 
        
        for (var i = 0; i < winnerCount; i++) {
 
            inList = false;
 
            
            random = Math.floor(Math.random() * peopleReacted.length);
 
            
            for (var y = 0; y < winners.length; y++) {
                
                if (winners[y] == peopleReacted[random]) {
                    
                    i--;
                    
                    inList = true;
                    break;
                }
            }
 
            
            if (!inList) {
                winners.push(peopleReacted[random]);
            }
 
        }
 
        
        for (var i = 0; i < winners.length; i++) {
            message.channel.send("Parabens " + winners[i] + ` ! Você ganhou **${item}** na giveaway!`);
        }
 
    }, 1000 * time);
 
 
}


exports.config = {
    name: 'sorteio',
    aliases: ['sorteio','giveaway']
}