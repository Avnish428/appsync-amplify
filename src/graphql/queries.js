/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
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
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBookOrder = /* GraphQL */ `
  query GetBookOrder($id: ID!) {
    getBookOrder(id: $id) {
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
export const listBookOrders = /* GraphQL */ `
  query ListBookOrders(
    $id: ID
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBookOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          createdAt
          updatedAt
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const bookOrdersByBook_idAndOrder_id = /* GraphQL */ `
  query BookOrdersByBook_idAndOrder_id(
    $book_id: ID!
    $order_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookOrdersByBook_idAndOrder_id(
      book_id: $book_id
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const bookOrdersByOrder_idAndBook_id = /* GraphQL */ `
  query BookOrdersByOrder_idAndBook_id(
    $order_id: ID!
    $book_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookOrdersByOrder_idAndBook_id(
      order_id: $order_id
      book_id: $book_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      books {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const ordersByUserAndId = /* GraphQL */ `
  query OrdersByUserAndId(
    $user: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserAndId(
      user: $user
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
