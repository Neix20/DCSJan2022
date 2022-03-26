const AWS = require('aws-sdk');
const express = require('express');
const path = require('path');
const sns_router = express.Router();

const sns = new AWS.SNS({
    accessKeyId: "AKIAWZTPQET3RVK7AJ4I",
    secretAccessKey: "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",
    region: 'us-west-2'
});

// Get Request
sns_router.get('/status', (req, res) => {
    return res.json({ status: "ok", sns: sns });
});

sns_router.post('/subscribe', (req, res) => {
    let params = {
        Protocol: 'EMAIL',
        TopicArn: 'arn:aws:sns:us-west-2:467311535351:testSNS',
        Endpoint: req.body.email
    };

    sns.subscribe(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

module.exports = sns_router;