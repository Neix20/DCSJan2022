const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2",
    accessKeyId: "",
    secretAccessKey: ""
});

const rekognition = new AWS.Rekognition({ region: 'us-west-2' });

let bucket = "s3fireimage-2",
    photo = "non_fire.jpg",
    model_arn = '';

const processImage = async function() {
    let params = {
        Image: { /* required */
            S3Object: {
                Bucket: bucket,
                Name: photo
            }
        },
        ProjectVersionArn: model_arn,
    };

    const res = await rekognition.detectCustomLabels(params).promise();

    console.log(res);

}

let ans = await processImage();

console.log(ans);