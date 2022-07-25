const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.update = async (event) => {
    const { name } = JSON.parse(event.body);
    console.log({name});
    const params = {
        TableName : process.env.DYNAMODB_CRUD_TABLE,
        Item : {primary_key : name},
    };

    try {
        await dynamoDb.put(params).promise();
    }
    catch(error){
        console.error(error);
    }

    return{
        statusCode:200,
    };
}    