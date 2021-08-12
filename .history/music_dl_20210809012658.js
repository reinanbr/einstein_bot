const fs = require('fs')
const youtubedl = require('youtube-dl')
const fetch = require('node-fetch')
const { METHODS } = require('http')
const {Base64Encode} = require('base64-stream')

const get_music_yt = (name_music,callbacki)=>{
  fetch(`http://0.0.0.0:8000/yt/${name_music}`,{
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'}})
  .then(res => res.json())
  .then((json)=>{
    url_video = json.link

    name_music_path = name_music.split(' ')
    name_music_path = './mp3/'+name_music_path.join('_')
    const video = youtubedl(url_video,
      ['-x','--extract-audio', '--audio-format','mp3','--output',
      name_music_path,'-f ', "bestaudio/best",'-ciw',
      '-v','--audio-quality', '0' ],
      { cwd: __dirname })

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
    video.pipe(fs.createWriteStream(`${name_music_path}`))
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