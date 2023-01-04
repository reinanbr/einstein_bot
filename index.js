const venom = require('venom-bot');
const fetch = require('fetch');
const music_dl = require('./tools/music_dl')
const Commands = require('./commands')


const gm = music_dl.get_music_yt

venom.create({session:'Lilith',multidevice:true}).then((client) => start(client));

function start(client){
    client.onMessage((message) => {

			console.log('mensagem ');

			console.log(message)
			args = message.body

			console.log(args)
			args.toLowerCase()
			args = args.split(' ') 

			console.log(args)
			command = args[0]
			console.log(command)

        	console.log('cliente ');
        	let group = message.isGroupMsg ? 'hmm, estuo em um grupo' : '';

			console.log(`mensagem: ${message.content} de ${message.from} [${message.sender.pushname}] para ${message.to}`)


			// COMMANDS //

			//send music
			if(command === '/music')
			{
				Commands.send_music(args,client)
			}
			

			//send hour's
			if(command=='/horario'){
				console.log('comando horário')
				Commands.sendHorary(client,message).then((res) =>{
					console.log('funfei')
				}).catch((res)=>{
					console.log('num funfei')
					console.log(res)
				})
			}

			if(command=='/ppc'){
				Commands.sendPPC(client,message).then((res) =>{
					console.log('funfei')
				}).catch((res)=>{
					console.log('num funfei')
					console.log(res)
				})
			}

			if(command=='/options'){
				Commands.sendOptions(client,message).then((res)=>{
						console.log('funfei')
					}).catch((res)=>{
						console.log('num funfei')
						console.log(res)
					})
			}




			//send PPC




	})
}