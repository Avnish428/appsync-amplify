/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input) {
      paymentLink
    }
  }
`;
export const bookBulkCreate = /* GraphQL */ `
  mutation BookBulkCreate($input: [bulkCreateBook]) {
    bookBulkCreate(input: $input)
  }
`;
export const bookBulkUpdate = /* GraphQL */ `
  mutation BookBulkUpdate($input: [bulkCreateBook]) {
    bookBulkUpdate(input: $input)
  }
`;
export const customBookDelete = /* GraphQL */ `
  mutation CustomBookDelete($id: String!) {
    customBookDelete(id: $id)
  }
`;
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBookOrder = /* GraphQL */ `
  mutation CreateBookOrder(
    $input: CreateBookOrderInput!
    $condition: ModelBookOrderConditionInput
  ) {
    createBookOrder(input: $input, condition: $condition) {
      id
      book_id
      order_id
      book {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
