const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB();

exports.handler = async (event) => {
  const id = event.arguments.id;
  console.log(id, "this is id");
  const params = {
    TableName: "Book-ocsznjt6rzaiffbkaf3r4ddi4e-dev", // Replace with your actual table name
    Key: {
      id: { S: id },
    },
  };

  try {
    await dynamodb.deleteItem(params).promise();
    return "SUCCESS"; // Return the deleted candidate's ID
  } catch (error) {
    throw new Error(error);
  }
};
