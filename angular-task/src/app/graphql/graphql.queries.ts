import { gql } from 'apollo-angular';

const GET_PRICE_LISTS = gql`
  query {
    getAllData {
      sku
      name
      image
      price
      discount
    }
  }
`;

export { GET_PRICE_LISTS };
