import { QueryCoins, QueryCoinsVariables } from 'graphql/generated/QueryCoins';
import { QUERY_COINS } from 'graphql/queries/coins';
import { GetStaticProps } from 'next';
import { initializeApolloClient } from 'services/apollo';
import { Main, MainProps } from 'templates';
import { coinMapper, StoredCoin } from 'utils/mapper/coin';

export default function Home(props: MainProps) {
  return <Main {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApolloClient();

  const fetchCoins = async (sort: 'created_at' | 'viewed') => {
    const { data } = await client.query<QueryCoins, QueryCoinsVariables>({
      query: QUERY_COINS,
      variables: {
        limit: 10,
        sort,
      },
    });

    return data;
  };

  const fetchedCoins = await fetchCoins('created_at');

  const fetchedCoinsByViewed = await fetchCoins('viewed');
  const mostViewedNews = Object.values(fetchedCoinsByViewed).reduce(
    (coins: StoredCoin[], coin: StoredCoin[]) => {
      coins.push(...coin);

      return coins.sort(
        (prevCoin, nextCoin) => nextCoin.viewed - prevCoin.viewed,
      );
    },
    [],
  );

  return {
    props: {
      bitcoin: coinMapper(fetchedCoins.bitcoins),
      ethereum: coinMapper(fetchedCoins.ethereums),
      cardano: coinMapper(fetchedCoins.cardanos),
      others: coinMapper(fetchedCoins.others ?? []),
      mostViewed: coinMapper(mostViewedNews),
    },
  };
};
