const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });
const config = require('./config.json');

client.login({ clientId : config.ClientID }).catch(console.error); //Take the client id from the discord developer portal

client.on('ready', () => {
console.log('Your presence works now check your discord profile :D')
client.request('SET_ACTIVITY', {
pid: process.pid,
activity: {
    details: config.Details,
    state: config.State,
assets: {
         large_image: config.LargeImage,//The name of your image that you have saved in the art asset of your application
         large_text: config.LargeImageText, //If you wanna mention the large image when you hover your mouse then fill this whatever you want
         small_image: config.SmallImage,//Name of your image that you have saved in the art asset of your application
         small_text: config.SmallImageText,//I you wanna mention the small image when hover the cursor then fill this up whatever you want
},
buttons : [
    {
        label : config.Button1,url : config.Url1
    },
    { 
        label : config.Button2,url : config.Url2
    },
  //labels are the buttons that you wanna provide to your rich presence and urls are the links that leads you when someone press that button
  //Note the button won't work for you but don't worry it work for others
    ]
    }
})
})
