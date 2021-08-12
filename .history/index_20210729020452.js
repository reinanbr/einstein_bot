"use strict"

const venom = require('venom-bot');
const fetch = require('fetch');

//vhgkltgvloyrtfgvbb v m,bhbm m.bmn                              
venom.create().then((client) => start(client));

function start(client){
    client.onMessage((message) => {
      //  if(message.body === 'oi'){
			console.log('mensagem ');
			args = message.body.toLowerCase()
			args = args.split(' ') 
			console.log(args)
			command = args[0]

        	
        	console.log(message);
        	console.log('cliente ');
        	//console.log(client);
        	let group = message.isGroupMsg ? 'hmm, estuo em um grupo' : '';
        	console.log(`mensagem: ${message.content} 
        	de ${message.from} [${message.sender.pushname}] para ${message.to}`)

			if(command === '/music')
			{
				music = args.slice(1,args.length)
				music = music.join(' ')
            	client.sendText(message.from,`@${message.sender.pushname} requiriu a musica ${music}`);
			}
//	}
    })
}