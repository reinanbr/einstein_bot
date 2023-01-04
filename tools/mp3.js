const youtubeMp3Converter = require('youtube-mp3-converter')

const convertLinkToMp3 = youtubeMp3Converter(pathToSaveFiles)

const pathToMp3 = convertLinkToMp3('https://www.youtube.com/watch?v=_cyND_1y1k0', {
    startTime: "00:00:10", // from where in the video the mp3 should start
    duration: 20, // Length of mp3 in seconds (from start point)
    title: 'fooo' // The tile of the mp3 file, undefined it takes the youtube title
})