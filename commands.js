
const music_dl = require('./tools/music_dl')
const gm = music_dl.get_music_yt



const send_music = (args,client) => {

    music = args.slice(1,args.length)
				music = music.join(' ')
            	//client.sendText(message.from,`@${message.sender.pushname} requiriu a musica *${music}*`);

				await_client = (text)=>{
					client.sendMentioned(message.from,`@${message.sender.id.toString().split('@')[0]} ${text} `,[message.sender.id.toString().split('@')[0]]);

				}

				calli = async (name_music_path,param)=>{
					console.log(`oh, eu toh funcionando... ${name_music_path}`)
					if(param){
						//client.sendText(message.from,`Mr.@${message.sender.pushname}, a sua musica está pronta!`);
						await client.sendVoice(message.from,name_music_path,name_music_path)
						.then((result) => {
							console.log('enviando una musica')


							console.log('Result: ', result); //return object success
						})
						.catch((erro) => {
							client.sendMentioned(message.from,`nos desculpe Mr. @${message.sender.id.toString().split('@')[0]}, mas tivemos um erro com o envio de sua musica.\nPor favor, tente novamente , e se o erro persistir entre em contato com ADM `,[message.sender.id.toString().split('@')[0]]);

							console.error('Error when sending: ', erro); //return object error
						});
					}
					else{
						client.sendMentioned(message.from,`nos desculpe Mr. @${message.sender.id.toString().split('@')[0]}, mas tivemos um erro com o seu requerimento. `,[message.sender.id.toString().split('@')[0]]);

					}
					}

				gm(music,calli,await_client)
}





const sendHorary = async (client,message) => {
	console.log('seguinte, eu to fufando... - sendHorary')
	var urlHorary = 'https://ifsertao-pe.edupage.org/timetable/view.php?fullscreen=1'
	await client.reply(message.from,
		`${message.sender.pushname}, *O Horário do IFsertão Campus Petrolina* se encontra no link abaixo:\n ${urlHorary}`,
		message.id);

}

const sendPPC = async (client,message) => {
	var urlPPC = 'https://www.ifsertao-pe.edu.br/images/Campus_Petrolina/2019/Editais/Junho/PPC%20Licenciatura%20em%20Fsica%20com%20Resoluo.pdf'
	await client.reply(message.from,
		`${message.sender.pushname}, *O Projeto Pedagógico do Curso Superior de Licenciatura em Física do IFsertão Campus Petrolina de Março de 2019* *(PPC-2019)*, se encontra no link abaixo:\n ${urlPPC}`,
		message.id)
}


const sendOptions = async (client,message) => {
	let buttons = [
		{
		  "buttonId": "1",
		  "buttonText": {
			"displayText": "Button 1"
			}
		  },
		{
		  "buttonId": "2",
		  "buttonText": {
			"displayText": "Button 2"
			}
		  }
		]
	await client.sendButtons(message.from, "Title", buttons, "Description")
}

module.exports = {send_music,sendHorary,sendPPC,sendOptions}