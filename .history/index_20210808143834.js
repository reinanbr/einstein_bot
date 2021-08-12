

const venom = require('venom-bot');
const fetch = require('fetch');
const music_dl = require('./music_dl')


const gm = music_dl.get_music_yt

//vhgkltgvloyrtfgvbb v m,bhbm m.bmn                              
venom.create().then((client) => start(client));

function start(client){
    client.onMessage((message) => {
      //  if(message.body === 'oi'){
			console.log('mensagem ');
			args = message.body
			console.log(args)
			args.toLowerCase()
			args = args.split(' ') 
			console.log(args)
			command = args[0]

        	
        	//console.log(message);
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
				
				calli = async (name_music_path)=>{
					console.log(`oh, eu toh funcionando... ${name_music_path}`)
					await client.sendVoice(message.from,`${name_music_path}`)
					.then((result) => {
						console.log('enviando una musica')
						console.log('Result: ', result); //return object success
					  })
					  .catch((erro) => {
						console.error('Error when sending: ', erro); //return object error
					  });
					}

				gm(music,calli)
				
			}
			
		})
	}