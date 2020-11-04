/* Misc - 
-- To be posted on the hour for the next hourly reward --
239 Arena
Closest GMT for arena reward is GMT +00
Time until reset time for GMT +00 is 60 minutes.

Please DO NOT ATTACK
<=================================================>
outordinary
waterspike
deznugs
player

You can ask for help
<=================================================>
player
player
player
player

*Random Image from Background folder*
Type "-arena set help" to see how to add your name to the list.
*/

const Discord = require('discord.js') //Adds discord.js module to JS application

const client = new Discord.Client() //Assigning client to client constructor function

const prefix = '-'


client.once('ready', () => {
    console.log('Arenabot is online!')
}) //Visual console feedback for completion of constructor function

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    // Entering commands for bot and programming those commands.

    if (command === 'ping') {
        // message.channel.send('Me thats who! <@687050288439492623>')
    } else if (command == 'youtube') {
        message.channel.send('https://youtube.com')
    }
})


// Keep client.login on bottom

client.login(') //Bot Token
