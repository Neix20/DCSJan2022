const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2",
    accessKeyId: "AKIAWZTPQET35ESG3FZG",
    secretAccessKey: "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"
});

const rekognition = new AWS.Rekognition({ region: 'us-west-2' });

let bucket = "s3fireimage-2",
    photo = "non_fire.jpg",
    model_arn = 'arn:aws:rekognition:us-west-2:467311535351:project/fire-detection-2/version/fire-detection-2.2022-03-22T00.11.06/1647879068536';

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