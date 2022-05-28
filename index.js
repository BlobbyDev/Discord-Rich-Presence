const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });
const config = require('./config.json');

client.login({ clientId: config.ClientID }).catch('[ERR]' + console.error);

client.on('ready', () => {
    console.log('[DEBUG] Presence now active!')
    console.log('[WARN] Do not close this Console as it will terminate the rpc')
    console.log('=================== Error Output ===================')
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: config.Details,
            state: config.State,
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