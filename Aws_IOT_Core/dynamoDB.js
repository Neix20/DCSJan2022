const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    accessKeyId: "AKIAWZTPQET3YUDBQE4W",
    secretAccessKey: "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",
});

let db = new AWS.DynamoDB();

let params = {
    TableName: "User"
};

// Get All Email
db.scan(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        let arr = data["Items"];
        for (let val of arr) {
            console.log(val);
        }
    }
});