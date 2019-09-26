const firebase = require("firebase");
const database = firebase.database()
module.exports.run = async (client, message, args) => {
  return firebase.database().ref(`Servidores/${message.guild.id}/Premium/key`).once('value').then(async function (snapshot) {
    const key = (snapshot.val());
    return firebase.database().ref(`Servidores/${message.guild.id}/Premium/Premium`).once('value').then(async function (snapshot) {
    const kkk = (snapshot.val());
    const ativa = args[0]
    if(kkk === "Ativado") {
      message.channel.send(`🗝 ${message.author}, Ja tem uma key ativada neste servidor!`)
    } else {
    if(ativa === key) {
      database.ref(`Servidores/${message.guild.id}/Premium`)
      .update({
        Premium: `Ativado`
      })
      message.channel.send(`<:certo:604380475158429707> ${message.author}, Você acabou de ativar uma key premium no servidor '${message.guild.name}'!`)
    } else {
      message.channel.send(`<:Cancel:604380680352301078> ${message.author}, Essa não é uma key valida!`)
    }
    }
  })
  })
}
module.exports.config = {
  name: "ativar",
  aliases: ["ativar"]
}