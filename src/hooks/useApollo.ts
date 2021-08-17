import { useMemo } from 'react';
import { initializeApolloClient } from 'services/apollo';

export const useApollo = (initialState = null) =>
  useMemo(() => initializeApolloClient(initialState), [initialState]);
