const fs = require('fs')
//const youtubedl = require('youtube-dl')
const fetch = require('node-fetch')
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg')


const get_music_yt = (name_music,callbacki)=>{
  fetch(`http://0.0.0.0:8000/yt/${name_music}`,{
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'}})
  .then(res => res.json())
  .then((json)=>{
    url_video = json.link

    
    const video = ytdl(url_video)
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
    name_music_path_ = name_music.split(' ')
    name_music_path = 'mp3/'+name_music_path.join('_')

    name_music_path_mp3 = name_music_path+'.mp3'
    name_music_path_mp4 = name_music_path+'.mp4'

    video.pipe(fs.createWriteStream(`${name_music_path_mp4}`))

    proc = new ffmpeg({source:mp4})
    proc.setFfmpegPath('/Applications/ffmpeg')
    proc.saveToFile(mp3, (stdout, stderr)=>{
      if(stderr){
          return console.log(stderr)
      }
      else{
          return console.log('done')
      }
    })


    callbacki(name_music_path)
    // .then((res)=>{
    //   console.log('foi enviado: '+res)
    // })
    // .catch((err)=>{
    //   console.log('aconteceu um erro: '+err)
    // })
  
  })
  
    
    

    
    
   
}

call = (name) =>{
  console.log(name)
}

get_music_yt('telephone lady gaga',call)
module.exports = {get_music_yt}