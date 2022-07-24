import { gql } from 'apollo-angular';

const GET_PRODUCTS = gql`
  query {
    getAllProducts {
      sku
      name
      image
    }
  }
`;

const GET_PRICES = gql`
  query {
    getAllPrices {
      sku
      price
      discount
    }
  }
`;

export { GET_PRODUCTS, GET_PRICES };
