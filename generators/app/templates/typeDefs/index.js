const { gql } = require("apollo-server");

const typeDefs = gql`
# Generic mutation and form error handling type
type Error {
  field: String!
  messages: [String!]!
}

interface Node {
  id: ID!
}

# Generic form mutation payload
type MutationPayload  {
  node: Node
  errors: [Error]!
}

# This "Book" type defines the queryable fields for every book in our data source.
type Book {
  title: String
  author: String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books: [Book]
}
`;

module.exports = typeDefs;