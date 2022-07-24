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

export { GET_PRODUCTS };
