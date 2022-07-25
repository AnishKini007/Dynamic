
const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.delete = async (event) => {
    
    const { name } = JSON.parse(event.body);
    console.log({name});
    const params= {
        TableName : process.env.DYNAMODB_CRUD_TABLE,
        Key : { primary_key : name },
    };

    try {
        await dynamoDb.delete(params).promise();
    }
    catch(error){
        console.error(error);
    }

    return{
        statusCode:200,
    };
}

