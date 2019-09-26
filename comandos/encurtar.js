const shorten = require('isgd');
module.exports.run = async (client, message, args, emoji) => {
message.delete();
               
                if (!args[0]) return message.channel.send('**Como usar: a!encurtar <URL>**')
               
                
                if (!args[1]) { 
                 
                  shorten.shorten(args[0], function(res) { 
                    if (res.startsWith('Error:')) return message.channel.send('**Por favor, coloque uma URL válida**'); 
                   
                    message.reply(`**seu link encurtado: <${res}>**`); 
                 
                  })
                 
                } else { 
                 
                  shorten.custom(args[0], args[1], function(res) { 
                    if (res.startsWith('Error:')) return message.channel.send(`**${res}**`);
                    
                   
                    message.channel.send(`**<${res}>**`);
                   
                   
                  }) 
                 
                }
            }
            module.exports.config = {
                name: "encurtar",
                aliases: ["encurtar","shorten"]
                }        