import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Products {
    sku: Int
    name: String
    image: String
    id: String
  }

  type Query {
    getAllProducts: [Products]
    getProduct(id: ID): Products
  }

  type Mutation {
    createProduct(
        sku: Int
        name: String
        image: String
        id: String
    ): Products
    deleteProduct(id: ID): String
    updateProduct(
        sku: Int
        name: String
        image: String
        id: String
    ): Products
  }
`;

export default typeDefs;
