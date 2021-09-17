import { gql } from '@apollo/client';
import { COIN_FRAGMENT } from 'graphql/fragments/coin';

export const QUERY_COINS = gql`
  query QueryCoins($limit: Int!, $sort: String, $type: String) {
    coins(limit: $limit, sort: $sort, where: { type: $type }) {
      ...COIN_FRAGMENT
    }
  }
  ${COIN_FRAGMENT}
`;
