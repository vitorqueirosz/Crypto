import { gql } from '@apollo/client';

export const QUERY_TRADES_BY_TYPE = gql`
  query QueryTradesByType($type: String!) {
    trades(where: { type: $type }) {
      id
      type
      price
      quantity
      time
    }
  }
`;
