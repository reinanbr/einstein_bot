const fs = require('fs')
const youtubedl = require('youtube-dl')
const fetch = require('node-fetch')


const get_music_yt = (name_music)=>{
  const video = youtubedl('clubbed of death',
    // Optional arguments passed to youtube-dl.
    ['-x', '--audio-format', 'mp3'],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname })

  // Will be called when the download starts.
  video.on('info', function(info) {
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log('size: ' + info.size)
  })
  name_music_path = name_music.split(' ')
  name_music_path = name_music_path.join('_')+'.mp3'
  video.pipe(fs.createWriteStream(`${name_music_path}`))
}