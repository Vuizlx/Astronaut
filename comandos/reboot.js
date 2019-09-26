module.exports.run = async (client, message, args) => { 
  let TOKEN = "NjE3NDA4NDE4NjAwNDUyMTA5.XXPqkQ.Y-xaev35ERBk-BM0QVzIAK70G5g"
  const bot = client
    if(message.author.id !== "343778106340802580") return message.channel.send("Somente o meu criador pode fazer isso!")

    
  rebootBot(message.channel);
       function rebootBot(channel){
         message.channel.send(`Reiniciando...`)
                .then(message => bot.destroy())
               .then(message => bot.destroy())
        .then(() => bot.login(TOKEN))
       }
    }

module.exports.config = {
  name: "reboot",
  aliases: ["reboot"]
} 