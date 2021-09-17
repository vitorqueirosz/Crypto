import { gql } from '@apollo/client';
import { CoinFragment } from 'graphql/fragments/coin';

export const QUERY_COINS = gql`
  query QueryCoins($limit: Int!, $sort: String, $type: String) {
    coins(limit: $limit, sort: $sort, where: { type: $type }) {
      ...CoinFragment
    }
  }
  ${CoinFragment}
`;

export const QUERY_COIN_BY_ID = gql`
  query QueryCoinById($id: Int!) {
    coins(where: { id: $id }) {
      ...CoinFragment
      short_description
      large_description
    }
  }
  ${CoinFragment}
`;
