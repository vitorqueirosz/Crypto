import { QueryCoins, QueryCoinsVariables } from 'graphql/generated/QueryCoins';
import { QUERY_COINS } from 'graphql/queries/coins';
import { QUERY_COTATIONS } from 'graphql/queries/cotations';
import { GetStaticProps } from 'next';
import { initializeApolloClient } from 'services/apollo';
import { Main, MainProps } from 'templates';
import { coinMapper } from 'utils/mapper/coin';

export default function Home(props: MainProps) {
  return <Main {...props} />;
}

const coinKeys = ['bitcoin', 'ethereum', 'cardano', 'others'];

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApolloClient();

  const { data } = await client.query({
    query: QUERY_COTATIONS,
  });

  const coins = await Promise.all(
    coinKeys.map(async (coin) => {
      const { data } = await client.query<QueryCoins, QueryCoinsVariables>({
        query: QUERY_COINS,
        variables: {
          limit: 10,
          sort: 'created_at',
          type: coin,
        },
      });

      return {
        [coin]: coinMapper(data.coins),
      };
    }),
  );

  const reducedCoins = coins.reduce((acc, coin) => {
    return {
      ...acc,
      ...coin,
    };
  }, {});

  const fetchCoins = async (sort: string) => {
    const { data } = await client.query<QueryCoins, QueryCoinsVariables>({
      query: QUERY_COINS,
      variables: {
        limit: 10,
        sort,
      },
    });

    return data.coins;
  };

  const fetchedCoinsByViewed = await fetchCoins('viewed');
  const mostViewedNews = coinMapper(fetchedCoinsByViewed).sort(
    (prevCoin, nextCoin) => Number(nextCoin?.viewed) - Number(prevCoin?.viewed),
  );

  return {
    props: {
      ...reducedCoins,
      mostViewed: mostViewedNews,
      cotations: data.cotations,
    },
  };
};
