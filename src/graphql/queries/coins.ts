import { gql } from '@apollo/client';

export const QUERY_COINS = gql`
  query QueryCoins($limit: Int!, $sort: String, $type: String) {
    coins(limit: $limit, sort: $sort, where: { type: $type }) {
      id
      title
      image {
        url
      }
      publisher
      publishedAt
      type
      viewed
    }
  }
`;
