//Version 0.0.3


const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix ="!";
const now = new Date();


Client.on('ready',()=>{
console.log("Yo, yo, yo! I'm online!");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) 
    return;
//Commands here

    //Greeting
    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("Hello, " + message.author + ", how are you doing?");   
    }   
    //getTime
    if(message.content.startsWith(prefix + "time")){
       message.channel.send("The local time is " + now + ", "+ message.author);
     } 

//Help command here

    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Check PM");
        message.author.send("Hello, this is my help command.");
        message.author.send("Here is a list of commands. \r !help for help. \r !hello for greeting. \r !time for Local time \r !prune to cut messages (mods only).");
    }

//Prune for mods only. Change Big Boss to your mod title
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
Client.login("SuperSecretKeyGoesHere");
