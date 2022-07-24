import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Products {
    sku: Int
    name: String
    image: String
    id: String
  }

  type Prices {
    sku: Int
    price: Int
    discount: Int
    id: String
  }

  type Query {
    getAllProducts: [Products]
    getProduct(id: ID): Products

    getAllPrices: [Prices]
    getPrice(id: ID): Prices
  }

  type Mutation {
    createProduct(
        sku: Int
        name: String
        image: String
        id: String
    ): Products
    createPrice(
      sku: Int
    price: Int
    discount: Int
    id: String
  ): Prices
    deleteProduct(id: ID): String
    deletePrice(id: ID): String
    updateProduct(
        sku: Int
        name: String
        image: String
        id: String
    ): Products
    updatePrice(
      sku: Int
    price: Int
    discount: Int
    id: String
  ): Prices
  }
`;

export default typeDefs;
