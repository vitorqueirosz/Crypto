import { gql } from '@apollo/client';

export const QUERY_COINS = gql`
  query QueryCoins($limit: Int, $sort: String) {
    bitcoins(limit: $limit, sort: $sort) {
      id
      title
      short_description
      large_description
      publisher
      publishedAt
      viewed
      image {
        url
      }
    }
    ethereums(limit: $limit, sort: $sort) {
      id
      title
      short_description
      large_description
      publisher
      publishedAt
      viewed
      image {
        url
      }
    }
    cardanos(limit: $limit, sort: $sort) {
      id
      title
      short_description
      large_description
      publisher
      publishedAt
      viewed
      image {
        url
      }
    }
    others(limit: $limit, sort: $sort) {
      id
      title
      short_description
      large_description
      publisher
      publishedAt
      viewed
      image {
        url
      }
    }
  }
`;
