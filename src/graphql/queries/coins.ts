import { gql } from '@apollo/client';

export const QUERY_COINS = gql`
  query QueryCoins($limit: Int, $sort: String) {
    bitcoins(limit: $limit, sort: $sort) {
      id
      title
      details
      description
      image {
        url
      }
    }
    ethereums(limit: $limit, sort: $sort) {
      id
      title
      details
      description
      image {
        url
      }
    }
    cardanos(limit: $limit, sort: $sort) {
      id
      title
      details
      description
      image {
        url
      }
    }
    others(limit: $limit, sort: $sort) {
      id
      title
      details
      description
      image {
        url
      }
    }
  }
`;
