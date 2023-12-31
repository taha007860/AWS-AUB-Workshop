var AWS = require("aws-sdk");
var region = "us-east-1";
var endpoint = "http://localhost:8000";

AWS.config.update({
  accessKeyId:"randomValue",
  secretAccessKey: "randomValue",
  region: region,
  endpoint: endpoint
});

var dynamodb = new AWS.DynamoDB(); // low-level client

var tableName = "Images";

var params = {
  TableName: tableName,
  KeySchema: [
    { AttributeName: "id", KeyType: "HASH" } // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "S" }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
  }
});