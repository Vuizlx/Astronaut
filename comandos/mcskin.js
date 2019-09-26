const Discord = require('discord.js');
const got = require("got")
const cheerio = require("cheerio")
const MojangAPI = require("mojang-api")
exports.run =  async (client, message) => {
    const args = message.content.split(" ");
   
         if (!args[1]) {
  message.channel.send("❌ | Please Include The **Minecraft Username** Too! ");
  return;
}
const username = args[1]
async function getShortUUID(username) {
    const res = await got(`https://mcuuid.net/?q=${username}`);
    const $ = cheerio.load(res.body);
    const input = $('input')[2];
 
    if (!input) {
        return;
    }
 
    return input.attribs['value'];
 
}
 
async function getLongUUID(username) {
    const res = await got(`https://mcuuid.net/?q=${username}`);
    const $ = cheerio.load(res.body);
    const input = $('input')[1];
 
    if (!input) {
        return;
    }
 
    return input.attribs['value'];
}
 
const shortuuid = await getShortUUID(username);
const longuuid = await getLongUUID(username);
 if (!shortuuid && !longuuid) {
  message.channel.send(`${message.author}, O Nick **${username}** não é um nickname valido!`);
  return;
 }
 
  MojangAPI.nameHistory(`${shortuuid}`, function(err, res) {
        if (err)
        console.log(err);
            var lastName = res[res.length - 2];
            var lastName2 = res[res.length - 3];
            var lastName4 = res[res.length - 5];
            var lastName5 = res[res.length - 6];
            var lastName6 = res[res.length - 7];
            var lastName7 = res[res.length - 8];
            var lastName8 = res[res.length - 9];
 
    let image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, `${args}.png`);
    let g = (`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03969d5e-2dc8-44dd-8ca7-04ee376f78cc/d9wif8p-6efc29c0-9250-46af-8546-69b036976bec.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzOTY5ZDVlLTJkYzgtNDRkZC04Y2E3LTA0ZWUzNzZmNzhjY1wvZDl3aWY4cC02ZWZjMjljMC05MjUwLTQ2YWYtODU0Ni02OWIwMzY5NzZiZWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r5j43cqvqrl32ZXpRPBz87_XDyIrh2rE1y6HiHdpDdQ`)
    let mcskin = (`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
    let mchead = (`https://crafatar.com/renders/head/${shortuuid}?size=4&default=MHF_Steve&overlay`)
   
     
     if (!lastName)
         {
        var embed = new Discord.RichEmbed()
      .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡ [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
      .addField("🏷 | Nick", username)
      .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
      .setColor(`BLUE`)
      .setFooter(`Requested by : ${message.author.tag} `)
      .setTimestamp()
      .setThumbnail(g)
return message.channel.send({ embed: embed })
         }
     if (!lastName2)
         {
             var at = new Date(lastName.changedToAt);
           var name1 = lastName.name;
             var embed = new Discord.RichEmbed()
          .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡  [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
          .addField("🏷 | Nick", username)
          .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
          .setColor(`BLACK`)
          .setTimestamp()
           .setThumbnail(g)
            .setFooter(`Requested by : ${message.author.tag} `)
          return message.channel.send({ embed: embed })
         }
         var lastName3 = res[res.length - 4];
         if (!lastName3)
         {
              var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var embed = new Discord.RichEmbed()
       .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡  [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
       .addField("🏷 | Nick", username)
       .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
       .setColor(`RED`)
       .setTimestamp()
          .setThumbnail(g)
           .setFooter(`Requested by: ${message.author.tag} `)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
         }
            if (!lastName4)
            {
            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var embed = new Discord.RichEmbed()
              .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡  [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
        .addField("🏷 | Nick", username)
        .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
        .setColor(`GREEN`)
           .setFooter(`Requested by: ${message.author.tag} `)
        .setTimestamp()
          .setThumbnail(g)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
           
            }
            if (!lastName5)
            {
            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var embed = new Discord.RichEmbed()
      .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡  [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
      .addField("🏷 | Nick", username)
      .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
      .setColor(`RED`)
      .setTimestamp()
          .setThumbnail(g)
           .setFooter(`Requested by: ${message.author.tag} `)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
            }
            if (!lastName6)
            {
                            var at = new Date(lastName.changedToAt);
             name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var embed = new Discord.RichEmbed()
        .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡  [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
      .addField("🏷 | Nick", username)
      .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
      .setColor(`RED`)
      .setTimestamp()
          .setThumbnail(g)
           .setFooter(`Requested by: ${message.author.tag} `)
          return message.channel.send({ embed: embed })
            }
            if (!lastName7)
            {
                            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name;
            var embed = new Discord.RichEmbed()
      .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡  [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
      .addField("🏷 | Nick", username)
      .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
      .setColor(`BLACK`)
      .setTimestamp()
          .setThumbnail(g)
           .setFooter(`Requested by: ${message.author.tag} `)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
            }
            if (!lastName8)
            {
                            var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name;
            var name7 = lastName7.name;
            var embed = new Discord.RichEmbed()
       .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡  [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
       .addField("🏷 | Nick", username)
       .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
       .setColor(`GREEN`)
       .setTimestamp()
          .setThumbnail(g)
           .setFooter(`Requested by: ${message.author.tag} `)
          return message.channel.send({ embed: embed })
if (embed.length > 2000) return message.channel.send("❌ | Oops, I Cant Send More Than `2000 Character`!")
            }
         else {
                       var at = new Date(lastName.changedToAt);
            var name1 = lastName.name;
            var name2 = lastName2.name;
            var name3 = lastName3.name;
            var name4 = lastName4.name;
            var name5 = lastName5.name;
            var name6 = lastName6.name;
            var name7 = lastName7.name;
            var name8 = lastName8.name;
            var embed = new Discord.RichEmbed()
        .addField(`<a:menescraft:617429801657040917> Se você não conseguir ver a skin aperte em "Ver Skin"`, `➡  [Ver Skin](https://crafatar.com/renders/body/${longuuid}?size=4&default=MHF_Steve&overlay) ➡  [Baixar Skin](https://minotar.net/download/${longuuid})`)
        .addField("🏷 | Nick", username)
        .setImage(`https://crafatar.com/renders/body/${shortuuid}?size=4&default=MHF_Steve&overlay`)
        .setColor(`RED`)
        .setTimestamp()
          .setThumbnail(g)
           .setFooter(`Requested by: ${message.author.tag} `)
          return message.channel.send({ embed: embed })
 
 
 
  }
  })
}
 

exports.config = {
  name: "mcskin",
  aliases: ["mcskin"]
}
 