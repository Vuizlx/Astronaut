const Canvas = require("canvas")
const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let user =  message.mentions.users.first() || message.author;
    
    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {

            let trackIMG = user.presence.game.assets.largeImageURL;
            let trackName = user.presence.game.details;
            let trackAuthor = user.presence.game.state;
            let trackAlbum = user.presence.game.assets.largeText;

            const canvas = Canvas.createCanvas(1000, 500);
            const ctx = canvas.getContext('2d');
            const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/617415998290788362/625221932819808276/spot.jpg');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            ctx.font = '55px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${trackName}`, canvas.width / 2.1, canvas.height / 2.5);

            ctx.font = '38px sans-serif';
            ctx.fillStyle = '#928f8f';
            ctx.fillText(`De ${trackAuthor}`, canvas.width / 2.1, canvas.height / 1.8);

            ctx.font = '38px sans-serif';
            ctx.fillStyle = '#928f8f';
            ctx.fillText(`do álbum ${trackAlbum}`, canvas.width / 2.1, canvas.height / 1.5);

            const avatar = await Canvas.loadImage(trackIMG);
            ctx.drawImage(avatar, 50, 50, 400, 400);

            const attachment = new Discord.Attachment(canvas.toBuffer(), 'spotify.png');
          
            message.channel.send(attachment);
    } else {
        message.channel.send(`O usuario não esta ouvindo Spotify!`)
    }
}
module.exports.config = {
    name: "spotify",
    aliases: ["spotify","sptf"]
}