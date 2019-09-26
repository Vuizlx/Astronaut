const Canvas = require("canvas")
const Discord = require("discord.js")
const firebase = require("firebase")


module.exports.run = async(client, message, args) => {
    let user = message.mentions.users.first() || message.author
    let id = user.id
    return firebase.database().ref(`Servidores/${message.guild.id}/Coins/${id}/coins`).once('value').then(async function (snapshot) {
        const coins = (snapshot.val());
        return firebase.database().ref(`Servidores/${message.guild.id}/Ranks/${id}/rank`).once('value').then(async function (snapshot) {
          const ranks = (snapshot.val());
          return firebase.database().ref(`Servidores/${message.guild.id}/Ranks/${id}/xp`).once('value').then(async function (snapshot) {
            const xp = (snapshot.val());
            const canvas = Canvas.createCanvas(1000, 500);
            const ctx = canvas.getContext('2d');
            
            const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597185218197192772/620276411386560514/style.png');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
          
            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
          
            
            ctx.font = '50px sans-serif';
            ctx.fillStyle = '#000000';
            ctx.fillText(`${user.tag}`, canvas.width / 4.0, canvas.height / 3.5);
          
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#dbd303';
            ctx.fillText(`Coins: ${coins}`, canvas.width / 1.3, canvas.height / 1.62);

            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#000000';
            ctx.fillText(`Rank: ${ranks}`, canvas.width / 1.29, canvas.height / 1.29);

            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#04d38d';
            ctx.fillText(`Xp: ${xp}`, canvas.width / 1.29, canvas.height / 1.08);

            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#000000';
            ctx.fillText(``, canvas.width / 13.0, canvas.height / 1.4);
          
            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();

            const avatar = await Canvas.loadImage(user.avatarURL);
            ctx.drawImage(avatar, 25, 25, 200, 200);
            
            const attachment = new Discord.Attachment(canvas.toBuffer(), 'perfil.png');
          
            message.channel.send(`${message.author}`, attachment);
    });
  });
});
}
    
exports.config = {
    name: 'profile',
    aliases: ['profile','perfil']
}