import { gql } from '@apollo/client';

export const CoinFragment = gql`
  fragment CoinFragment on Coin {
    id
    title
    image {
      url
    }
    publisher
    publishedAt
    viewed
    type
  }
`;
