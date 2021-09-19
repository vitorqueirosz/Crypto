import { CotationProps, GroupKeys } from 'components';
import { QueryCoins, QueryCoinsVariables } from 'graphql/generated/QueryCoins';
import { QueryCotations } from 'graphql/generated/QueryCotations';
import { QUERY_COINS } from 'graphql/queries/coins';
import { QUERY_COTATIONS } from 'graphql/queries/cotations';
import { GetStaticProps } from 'next';
import { initializeApolloClient } from 'services/apollo';
import { Main, MainProps } from 'templates';
import { formatCurrency } from 'utils/formatCurrency';
import { coinMapper } from 'utils/mapper/coin';

const locale = {
  BRL: 'pt-Br',
  USDT: 'en-US',
};

const currency = {
  BRL: 'BRL',
  USDT: 'USD',
};

export default function Home(props: MainProps) {
  return <Main {...props} />;
}

const coinKeys = ['bitcoin', 'ethereum', 'cardano', 'others'];

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApolloClient();

  const { data } = await client.query<QueryCotations>({
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

  const mappedCotations: CotationProps[] = data.cotations.map((cotation) => {
    const currencyPrefix = cotation.name.slice(
      3,
      cotation.name.length,
    ) as GroupKeys;

    const cotationLocale = locale[currencyPrefix];
    const cotationCurrency = currency[currencyPrefix];

    return {
      name: cotation.name,
      currentValue: formatCurrency(
        cotationLocale,
        cotationCurrency,
        Number(cotation.currentValue),
      ),
      percent: Number(cotation.percent).toFixed(2),
    };
  });

  return {
    props: {
      ...reducedCoins,
      mostViewed: mostViewedNews,
      cotations: mappedCotations,
    },
  };
};
