import { gql } from '@apollo/client';

export const COIN_FRAGMENT = gql`
  fragment CoinFragment on Coin {
    id
    title
    image {
      url
    }
    publisher
    publishedAt
    type
  }
`;
