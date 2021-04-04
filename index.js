"use strict"

const venom = require('venom-bot');
const fetch = require('fetch');

//vhgkltgvloyrtfgvbb v m,bhbm m.bmn                              
venom.create().then((client) => start(client));

function start(client){
    client.onMessage((message) => {
        if(message.body === 'oi'){

        	console.log('mensagem ');
        	console.log(message);
        	console.log('cliente ');
        	console.log(client);
            client.sendText(message.from,'oi seu corno, kkk')
        }
    })
}