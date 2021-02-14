const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.login({ clientId : "client ID of your application" }).catch(console.error); //Take the client id from the discord developer portal

client.on('ready', () => {
console.log('Your presence works now check your discord profile :D')
client.request('SET_ACTIVITY', {
pid: process.pid,
activity: {
    details: "", //pls fill this to mention your presence whatver you wan't your wish
    state: "", //pls fill this to mention your presence whatever you wan't your wish
assets: {
         large_image: "",//The name of your image that you have saved in the art asset of your application
         large_text: "", //If you wanna mention the large image when you hover your mouse then fill this whatever you want
         small_image: "",//Name of your image that you have saved in the art asset of your application
         small_text: "",//I you wanna mention the small image when hover the cursor then fill this up whatever you want
},
buttons : [
    {
        label : "",url : ""
    },
    { 
        label : "",url : ""
    },
  //labels are the buttons that you wanna provide to your rich presence and urls are the links that leads you when someone press that button
  //Note the button won't work for you but don't worry it work for others
    ]
    }
})
})
