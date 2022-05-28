const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });
const config = require('./config.json');
//Added [Debug] on console.error
client.login({ clientId: config.ClientID }).catch('[DEBUG]' + console.error);

client.on('ready', () => {
    //Ignore this Double console.log I just made it for fun!
    console.log('[Debug] Presence now active!')
    console.log('[Debug] Services are Running Check Profile now!')
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: config.Details,
            state: config.State,
            // Added Time [Elapsed]
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: config.LargeImage,
                large_text: config.LargeImageText,
                small_image: config.SmallImage,
                small_text: config.SmallImageText,
            },
            buttons: [{
                    label: config.Button1,
                    url: config.Url1
                },
                {
                    label: config.Button2,
                    url: config.Url2
                },
                //labels are the buttons that you wanna provide to your rich presence and urls are the links that leads you when someone press that button
                //Note the button won't work for you but don't worry it work for others
            ]
        }
    })
})
