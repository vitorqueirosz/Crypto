import { gql } from '@apollo/client';

export const QUERY_COTATIONS = gql`
  query QUERY_COTATIONS {
    cotations {
      id
      name
      currentValue
      percent
    }
  }
`;
