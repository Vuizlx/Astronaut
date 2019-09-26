const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    message.delete()
    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = client.users.get(args[0]);

}
let botmessage = args.slice(1).join(' ')

if (args[0] == null) {return message.channel.send(`${message.author}, **Mencione um usuário !**`)}


if (args[1] == null) {return message.channel.send(`${message.author}, **Diga algo !**`)}
message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(botmessage);
    w.delete();
})
message.author.send(`Fake enviado com sucesso!!`).then(msg => {
    msg.delete(4000)
})
} catch (err) {
message.reply("Desculpe não consegui enviar o fake pois não tenho as permições suficiente (WebHooks)")
}
}
exports.config = {
    name: "fake",
    aliases: ["fake"]
}