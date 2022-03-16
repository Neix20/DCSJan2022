const fs = require('fs');
const path = require("path");
const ffmpeg = require('ffmpeg');

let fileDir = "video",
    fileName = "input1.mp4";

let filePath = path.join(__dirname, fileDir, fileName);

console.log(filePath)

new ffmpeg(filePath, function(err, video) {
    if (!err) {
        console.log('The video is ready to be processed');
        console.log(video.metadata);
        console.log(video.info_configuration);
    } else {
        console.log('Error: ' + err);
    }
});

// try {
//     var process = new ffmpeg(filePath);
//     process.then(function(video) {
//         // Video metadata
//         console.log(video.metadata);
//         // FFmpeg configuration
//         console.log(video.info_configuration);
//         // Callback mode
//         video.fnExtractFrameToJPG('img', {
//             frame_rate: 1,
//             number: 5,
//             file_name: `${fileName.split(-4)}_%t_%s`
//         }, function(error, files) {
//             console.log(files);
//             if (!error)
//                 console.log('Frames: ' + files);
//         })
//     }, function(err) {
//         console.log('Error: ' + err);
//     });
// } catch (e) {
//     console.log(e.code);
//     console.log(e.msg);
// }