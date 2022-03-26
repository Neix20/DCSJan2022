const AWS = require('aws-sdk');

const sns = new AWS.SNS({
    accessKeyId: "AKIAWZTPQET3RVK7AJ4I",
    secretAccessKey: "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",
    region: 'us-west-2'
});

// Subscribe Email
let subscribe_params = {
    Protocol: 'EMAIL',
    TopicArn: 'arn:aws:sns:us-west-2:467311535351:testSNS',
    Endpoint: "txen2000@gmail.com"
};

let subscribe_arr = [{
        Protocol: 'EMAIL',
        TopicArn: 'arn:aws:sns:us-west-2:467311535351:testSNS',
        Endpoint: "jyee0719@gmail.com"
    },
    {
        Protocol: 'EMAIL',
        TopicArn: 'arn:aws:sns:us-west-2:467311535351:testSNS',
        Endpoint: "ysiowpoo@gmail.com"
    },
    {
        Protocol: 'EMAIL',
        TopicArn: 'arn:aws:sns:us-west-2:467311535351:testSNS',
        Endpoint: "leemanjing525@gmail.com"
    }
];

// sns.subscribe(subscribe_arr[2], (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Subscribe Successfully!");
//         console.log(data);
//     }
// });

let fire_alert_param = {
    Message: "GGWP bro.",
    Subject: "I GOT YOUR NUDES. CHECK YOUR NUDES LEAKS AT XXX.COM. LINK IS IN DESCRIPTION BELOW. PAYPAL ME AT XXX-XXX XXXX BEFORE 12AM TONIGHT. YOU HAVE BEEN WARNED",
    TopicArn: 'arn:aws:sns:us-west-2:467311535351:testSNS'
}

sns.publish(fire_alert_param, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log("Successfully Created Fire Alert Email!");
        console.log(data);
    }
});


// const express = require("express");
// const app = express();

// // Form Submission
// // Handle Form Data
// app.use(express.urlencoded({ extended: true }));

// // Get Request
// const api_route = require('./router/sns-route');

// app.use('/', api_route);

// const PORT = process.env.PORT || 6660;

// app.listen(PORT, () => {
//     console.log(`SNS Application listening on port ${PORT}!`);
// });