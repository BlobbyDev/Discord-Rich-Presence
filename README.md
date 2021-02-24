# Discord Rich Presence
This project is made by using a package named ```discord-rpc``` you can view it's details by [clicking here](https://www.npmjs.com/package/discord-rpc) if you wanna get the easier version of this presence but note it doesn't have buttons feature just shows large image and small image if you want that then [click here](https://github.com/Dinav69/Discord-Presence)

#### Make sure you have these 4 things installed in your system:
[Node.js](https://nodejs.org/en/download/)

[Visual Studio Code](https://code.visualstudio.com/)

[Git](https://git-scm.com/downloads)

[Discord](https://discord.com/)
## How to setup 
◙ Go to discord developer portal by [clicking here](https://discord.com/developers/applications) and then go to the top left corner of your screen see create application and then name it.
#### And hey the name of the application shold be the name of the presence that u wanna give for example if you wanna keep your status playing Myself then you have to name your application Myself

◙ Then click onto the application under ```Rich Presence``` category you'll see ```Art Assets``` click onto that.
 
◙ Set the cover image as the lage image of your presence.

◙ Scroll down click "Add Asset" then choose a image that you wanna provide as large image and small image also make sure they are atleast the size of 512 X 512.

◙ Go to the terminal of your editor type ```npm init -y``` after you get package.json file type ```npm install discord-rpc``` then the rest of the filling details are there in the file ```index.js``` which is your main file.

◙ After filling out the details and stuff go to the terminal and type ```node index.js``` to run the folder.

**Note:** Run the folder on ```Command Prompt``` or ```Powershell``` if you are using discord presence in Visual Studio Code.

### Example Usage:-


Index.js

```js
const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.login({ clientId : "Client ID" }).catch(console.error);

client.on('ready', () => {
console.log('Your presence works now check your discord profile :D')
client.request('SET_ACTIVITY', {
pid: process.pid,
activity: {
    details: "Hey normies !!!", //The details, you can change to whatever you want
    state: "Dont mess with me", //The state, you can change to whatver you want
assets: {
         large_image: "sunglasses_", //Large image name
         large_text: "If you mess with me", //Large image text that you wanna show whenver someone hover the cursor towards it
         small_image: "5845cd430b2a3b54fdbaecf8", //Small image name
         small_text: "You die !!!", //Small image text that you wanna show whenver someone hover the cursor towards it
},
buttons : [
    {
        label : "Click Me",url : "https://www.youtube.com/watch?v=qTksCYUgI7s" //Link to be redirected when someone click on the buttons and label is the name of the button
    },
    { 
        label : "Click Me",url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ" //Link to be redirected to when someone click on the buttons and label is the name of the button
    },
  
    ]
    }
})
})
```

Looks like this (this is just an example you can change to whatever you want):-

[![Image](https://cdn.discordapp.com/attachments/809031839032672327/812945587757776956/example.png)](https://discord.gg/RWSEj6JrjJ)

##### You can customize to anything you want !!

## Have any other doubts ?
Join my [discord server](https://discord.gg/RWSEj6JrjJ) to get additional support.

[![DiscordBanner](https://invidget.switchblade.xyz/RWSEj6JrjJ)](https://discord.gg/RWSEj6JrjJ)

## Check Out my Music Bot:
Add it to your discord server by [clicking here](https://discord.com/oauth2/authorize?client_id=786209866946838528&permissions=53833024&scope=bot)

Join the support server by [clicking here](https://discord.gg/RWSEj6JrjJ)

Vote for it by [clicking here](https://top.gg/bot/786209866946838528)

[![Discord Bots](https://top.gg/api/widget/status/786209866946838528.svg)](https://top.gg/bot/786209866946838528) [![Discord Bots](https://top.gg/api/widget/servers/786209866946838528.svg?noavatar=true)](https://discord.com/oauth2/authorize?client_id=786209866946838528&permissions=53833024&scope=bot) [![Discord Bots](https://top.gg/api/widget/upvotes/786209866946838528.svg?noavatar=true)](https://top.gg/bot/786209866946838528)

[![Discord Bots](https://top.gg/api/widget/786209866946838528.svg)](https://top.gg/bot/786209866946838528)













