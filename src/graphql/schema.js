const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Product {
    id: String
    name: String
    description: String
    price: Float
    quantity: Int
  }

  type Query {
    products: [Product]
    product(id: String!): Product
  }

  type Mutation {
    addProduct(id: String!, name: String!, description: String!, price: Float!, quantity: Int!): Product
    updateProduct(id: String!, name: String, description: String, price: Float, quantity: Int): Product
    deleteProduct(id: String!): Product
  }
`);

module.exports = schema;
