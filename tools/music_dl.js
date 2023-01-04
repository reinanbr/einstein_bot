const fs = require('fs')
//const youtubedl = require('youtube-dl')
const fetch = require('node-fetch')
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg')


const http = require('https'); // or 'https' for https:// URLs
//const fs = require('fs');

//const file = fs.createWriteStream("file.jpg");
//const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
//  response.pipe(file);
//});


const get_music_yt = (name_music,callbacki,await_client_call)=>{
  fetch(`http://0.0.0.0:8000/yt/${name_music}`,{
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'}})
  .then(res => res.json())
  .then((json)=>{
    url_video = json.link

    
    //const video = ytdl(url_video)
    // Will be called when the download starts.
    // video.on('info', function(info) {
    //   console.log('Download started')
    //   console.log('filename: ' + info._filename)
    //   console.log('size: ' + info.size)
    // })
    //name_music_path = name_music.split(' ')
    //name_music_path = './'+name_music_path.join('_')+'.mp3'

    //content64 = fs.readFileSync(name_music_path,{encoding:'base64'})
    //makeFile = fs.writeFileSync('./'+name_music_path,content64,'base64')
    name_music_path = name_music.split(' ')
    name_music_path = 'mp3/'+name_music_path.join('_')

    name_music_path_mp3 = name_music_path+'.mp3'
    name_music_path_mp4 = name_music_path+'.mp4'

    duration = json.duration

    min = Math.floor(duration/60)
    seg = duration%60
    dur_str = `${min}:${seg}`

    if(duration>60 & duration<600){
      file_music = fs.createWriteStream(name_music_path_mp3)
      var request = http.get(url_video, function(response) {
        response.pipe(file_music);
        file_music.on('finish', function() {

          console.log(`salvando o ${name_music_path_mp3}`)
          callbacki(name_music_path_mp3,true)
          //file_music.close(cb);  // close() is async, call cb after close completes.
        });
      }).on('error', function(err) {
          callbacki('error',false)
        console.log('error')
      
      })
      
      console.log('fazendo as vontades do callback')
      await_client_call(`aguarde, sua musica *[${json.title} - ${dur_str}]* está a caminho..`)
    
    }
    else{
      callbacki('error',false)
      await_client_call(`nos perdoe, mas a sua musica *[${json.title} - ${dur_str}]* não está dentro dos nossos conformes!`)
    }
  })
    
    
    

    
    
   
}

call = (name) =>{
  console.log(name)
}

//get_music_yt('telephone lady gaga',call)
module.exports = {get_music_yt}