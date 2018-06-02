//Version 0.1.4

//Work on idiots guide enmap points system next stream
const Discord = require("discord.js");
const Client = new Discord.Client();
const config = require("./config.json");
const prefix ="!";
const now = new Date();
const talkedRecently = new Set();
const random = require



Client.on('ready',()=>{
console.log("Yo, yo, yo! I'm online!")
Client.user.setActivity("w0rking on th3 proce$$")
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) 
    return;


   
    
    
//Commands here

if(message.channel.type === "dm") 
        return;

    //Ping because it's required to apease the JS gods
    if(message.content.startsWith(config.prefix + "ping")){
        message.channel.send("Pong!");
    }

    
    //Greeting
    if(message.content.startsWith(config.prefix + "hello")){
        message.channel.send("Hello, " + message.author + ", how are you doing?");
    }   



    //Time
    if(message.content.startsWith(config.prefix + "time")){
       message.channel.send("The local time is " + now + ", "+ message.author);
     } 
     
    
         
//Help command here

    if(message.content.startsWith(config.prefix + "help")){
        message.channel.send("Check PM");
        message.author.send("Hello, this is my help command.");
        message.author.send("Here is a list of commands. \r !help for help. \r !hello for greeting. \r !time for Local time \r !prune to cut messages (mods only).");
    }

//Mods only. Change Big Boss to your mod title
    if(message.content.startsWith(config.prefix.prefixfix + "prune")){
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
            
    
            if(message.content.startsWith(prefix + "status")){
                Client.user.setActivity("Testing Rando's coding for me.");
                 
        
            }


    //Sets a time limit on messages to the bot to stop spam
if(talkedRecently.has(message.author.id))
return;
talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 2500


)
        })    
    


































































































    //Put Key here
    Client.login(config.token);

