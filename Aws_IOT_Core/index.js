// Dependencies
const awsIot = require('aws-iot-device-sdk');

const fs = require('fs')

const useDummyData = true
const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date + ' ' + time;

const device = awsIot.device({
    host: 'amiil57jhr55l-ats.iot.us-west-2.amazonaws.com',
    port: 8883,
    keyPath: './certificate/private.pem.key',
    certPath: './certificate/certificate.pem.crt.txt',
    caPath: './certificate/AmazonRootCA1.pem',
});

// function to encode file data to base64 encoded string
function base64_encode(file) {
    return fs.readFileSync(file, { encoding: "base64" });
}

let fileDir = "img";
let fileName = "non_red.jpg";

// We connect our client to AWS  IoT core. 
device.on('connect', function() {
    let fire_img = base64_encode(`${fileDir}\\${fileName}`);


    // console.log(fire_img)
    console.log('STEP - Connecting to AWS  IoT Core');
    console.log(`---------------------------------------------------------------------------------`)
    device.subscribe('smartCity/fire-detector-camera-01');
    device.publish('smartCity/fire-detector-camera-01', JSON.stringify({ data: fire_img, imgName: `frame_${fileName}` }));
});


// Set handler for the device, it will get the messages from subscribers topics.
device.on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
});

device.on('error', function(topic, payload) {
    console.log('Error:', topic, payload.toString());
});