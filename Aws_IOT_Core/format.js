exports.handler = function(event, context, callback) {
    console.log("Incoming Event: ", event);

    // Declare S3 Bucket Object
    const bucket = event.Records[0].s3.bucket.name;
    const filename = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const message = `File is uploaded in - ${bucket} -> ${filename}`;
    console.log(message);
    callback(null, message);
};

// Handler lamda function
exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const params = {
        TableName: collection,
        Item: {
            "serialNumber": event.serialNumber,
            "timestamp": event.dateTime,
            "activated": event.activated,
            "clientId": event.clientId,
            "device": event.device,
            "type": event.type,
            "payload": event.payload
        }
    };

    console.log("Saving Telemetry Data");

    dynamo.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add device. Error JSON:", JSON.stringify(err, null, 2));
            context.fail();
        } else {
            console.log(data)
            console.log("Data saved:", JSON.stringify(params, null, 2));
            context.succeed();
            return { "message": "Item created in DB" }
        }
    });
}