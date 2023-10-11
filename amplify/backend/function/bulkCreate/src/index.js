const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB();

exports.handler = async (payload) => {
  const recordsToCreate = payload.arguments.input; // Array of book objects to create
  if (!recordsToCreate || !Array.isArray(recordsToCreate)) {
    return "ERROR";
  }

  const putRequests = recordsToCreate.map((book) => ({
    PutRequest: {
      Item: {
        id: { S: book.id },
        title: { S: book.title },
        description: { S: book.description || "" },
        author: { S: book.author || "" },
        featured: { BOOL: book.featured || false },
        price: { N: book.price.toString() || "0" },
      },
    },
  }));

  const params = {
    RequestItems: {
      "Book-ocsznjt6rzaiffbkaf3r4ddi4e-dev": putRequests,
    },
  };

  try {
    const result = await dynamodb.batchWriteItem(params).promise();
    console.log(result, "this is result");
    return "SUCCESS";
  } catch (error) {
    throw new Error(error);
  }
};
