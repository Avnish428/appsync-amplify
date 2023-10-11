const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB();

exports.handler = async (payload) => {
  console.log(payload, "payload");
  const recordsToUpdate = payload.arguments.input; // Array of book objects to create
  console.log(recordsToUpdate, "recordsToUpdate");
  if (!recordsToUpdate || !Array.isArray(recordsToUpdate)) {
    return "ERROR";
  }

  const updatePromises = recordsToUpdate.map(async (book) => {
    const params = {
      TableName: "Book-ocsznjt6rzaiffbkaf3r4ddi4e-dev", // Replace with your table name
      Key: {
        id: {
          S: book.id, // Assuming book.id is a string
        },
      },
      UpdateExpression:
        "SET title = :title, description = :description, author = :author, featured = :featured, price = :price",
      ExpressionAttributeValues: {
        ":title": { S: book.title },
        ":description": { S: book.description || "" },
        ":author": { S: book.author || "" },
        ":featured": { BOOL: book.featured || false },
        ":price": { N: book.price.toString() || "0" }, // Assuming book.price is a number
      },
    };

    try {
      const res = await dynamodb.updateItem(params).promise();
      console.log(res, "res");
    } catch (error) {
      console.error(`Error updating book with ID ${book.id}:`, error);
      throw new Error(error);
    }
  });
  console.log(updatePromises, "updatePromises");
  try {
    const result = await Promise.all(updatePromises);
    console.log(result, "result");
    return "SUCCESS";
  } catch (error) {
    console.error("Error updating books:", error);
    throw new Error(error);
  }

  //   const params = {
  //     RequestItems: {
  //       "Book-ocsznjt6rzaiffbkaf3r4ddi4e-dev": putRequests,
  //     },
  //   };

  //   try {
  //     const result = await dynamodb.batchWriteItem(params).promise();
  //     console.log(result, "this is result");
  //     return "SUCCESS";
  //   } catch (error) {
  //     throw new Error(error);
  //   }
};
