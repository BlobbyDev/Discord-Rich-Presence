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

### Configuration:-

Go to `config.json`

```js
{
    "ClientID": "", //Take the client id from the discord developer portal
    "LargeImage": "", //The name of your image that you have saved in the art asset of your application 
    "LargeImageText": "", //If you wanna mention the large image when you hover your mouse then fill this whatever you want
    "SmallImage": "", //Name of your image that you have saved in the art asset of your application
    "SmallImageText": "", //If you wanna mention the small image when hover the cursor then fill this up whatever you want
    "Button1": "", // Name of the first button you wanna provide
    "Url1": "", // Link that you wanna get redirected to 
    "Button2": "", // Name of the second button you wanna provide 
    "Url2": "", // Link that you wanna get redirected to after clicking the button
    "State": "", // State that you wanna mention
    "Details": "" // Details that you wanna mention
}
```
**Note the button won't work for you but don't worry it work for others**

### Example Usage:-

Go to `config.json`

```js
{
    "ClientID": "790838692280926238",
    "LargeImage": "sunglasses_", 
    "LargeImageText": "If you mess with me",
    "SmallImage": "5845cd430b2a3b54fdbaecf8",
    "SmallImageText": "You die !!!",
    "Button1": "Click Me",
    "Url1": "https://www.youtube.com/watch?v=qTksCYUgI7s",
    "Button2": "Click Me",
    "Url2": "https://dis.gd/threads",
    "State": "Hey normies !!!",
    "Details": "Dont mess with me"
}
```

Looks like this (this is just an example you can change to whatever you want):-

[![Image](https://cdn.discordapp.com/attachments/809031839032672327/812945587757776956/example.png)](https://discord.gg/RWSEj6JrjJ)

##### You can customize to anything you want all your wish but make sure you configure things in the currect manner !!

## Our Server
Join our [discord server](https://discord.gg/RWSEj6JrjJ) to get additional support & also to hang out !!

[![DiscordBanner](https://invidget.switchblade.xyz/RWSEj6JrjJ)](https://discord.gg/RWSEj6JrjJ)
