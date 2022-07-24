import { gql } from 'apollo-angular';

const GET_PRODUCTS = gql`
  query {
    products {
      sku
      name
      image
    }
  }
`;

export { GET_PRODUCTS };
