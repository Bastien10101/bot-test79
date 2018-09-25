const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("/")

client.on('ready', function() {
    client.user.setActivity("/help");
    console.log("Connecté !")
})

client.login('NDkzODU2MzQ0MDMwNTc2NjQw.Dovw8A.Jcp-F-fj4zAl68Bhx8sGXGeD0Vw')


client.on('message', message => {
    if (message.content === prefix + "help"){
    message.channel.sendMessage("Liste des commandes : \n - /help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour :)")
        console.log("Commande Salut effectué")   
    }
})
