import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client';
import { isSSR } from 'constants/common';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

const createApolloClient = () => {
  const client = new ApolloClient({
    ssrMode: isSSR,
    link: new HttpLink({ uri: process.env.URL }),
    cache: new InMemoryCache(),
  });

  return client;
};

export const initializeApolloClient = (initialState = null) => {
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  if (isSSR) return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
};
