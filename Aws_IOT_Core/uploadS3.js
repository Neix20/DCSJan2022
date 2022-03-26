const AWS = require('aws-sdk');
const fs = require('fs');
const BUCKET_NAME = "fireimages3";
const IAM_USER_KEY = "";
const IAM_USER_SECRET = "";

const s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET
});

// function to encode file data to base64 encoded string
function base64_encode(file) {
    return fs.readFileSync(file, { encoding: "base64" });
}

function uploadObjectToS3Bucket(objectName, objectData) {
    const params = {
        Bucket: BUCKET_NAME,
        Key: objectName,
        Body: objectData
    };
    s3bucket.upload(params, function(err, data) {
        if (err) throw err;
        console.log(`File uploaded successfully at ${data.Location}`);
    });
}

let fire_img = base64_encode("img/fire.jpg");
uploadObjectToS3Bucket('fire_img_2.json', "This is Fire Image");