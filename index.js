//Version 0.0.2


const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix ="!";

Client.on('ready',()=>{
console.log("Yo, yo, yo! I'm online!");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) 
    return;
//Greeting here

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("Hello, " + message.author + ", how are you doing?")   }
//Help command here

    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Check PM");
        message.author.send("Hello, this is my help command.");    
    }

//Prune for mods only
    if(message.content.startsWith(prefix + "prune")){
        let args = message.content.split(" ").splice(1);
        let author =message.member;
        let role = message.guild.roles.find('name', "Big Boss");
        if(author.roles.has(role.id))
            if(!args[0]){
                message.delete();
                message.author.send("No argumesnt given");
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.author.send("Maxiumum is 100 messages at once.");
                return;
            }

        
            message.delete();
            message.channel.bulkDelete(args[0]);
            message.author.send("Done! I deleted "+ args[0] + " messages.");
            return;    
            }
            
        


    })

//Put Key here
Client.login("NDQ4MzAzMjE2NTI3MTQ3MDA5.DeUKcA.mdI0u7b6McAXzLjd_aXkUdRxQLY");
