// import the gql tagged template function
const { gql } = require('./node_modules/apollo-server-express');

const typeDefs = gql`

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: ID!): User
}

type Author {
    _id: ID
    description: String
    bookId: String
    image: Image
    links: String
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book { 
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

input bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: string

}

type Auth {
    token: ID!
    user: User
  }

`;

// export the typeDefs
module.exports = typeDefs;