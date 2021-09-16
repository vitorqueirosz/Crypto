import { gql } from '@apollo/client';

export const QUERY_COTATIONS = gql`
  query QueryCotations {
    cotations {
      id
      name
      currentValue
      percent
    }
  }
`;
