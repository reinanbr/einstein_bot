const youtubedl = require('youtube-dl')


youtubedl.exec('https://youtu.be/1yu-83mWkIU', ['-x', '--audio-format', 'mp3','-o','test.%(ext)s'], {}, function(err, output) {
    if (err) throw err
  
    console.log(output.join('\n'))
  })