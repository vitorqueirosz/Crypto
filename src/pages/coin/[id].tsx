import { GroupKeys, Groups, TradesChartData } from 'components';
import {
  QueryCoinById,
  QueryCoinByIdVariables,
} from 'graphql/generated/QueryCoinById';
import { QueryCoins, QueryCoinsVariables } from 'graphql/generated/QueryCoins';
import { QueryCotations } from 'graphql/generated/QueryCotations';
import {
  QueryTradesByType,
  QueryTradesByTypeVariables,
} from 'graphql/generated/QueryTradesByType';
import { QUERY_COINS, QUERY_COIN_BY_ID } from 'graphql/queries/coins';
import { QUERY_COTATIONS } from 'graphql/queries/cotations';
import { QUERY_TRADES_BY_TYPE } from 'graphql/queries/trades';
import { GetStaticPaths, GetStaticProps } from 'next';
import { initializeApolloClient } from 'services/apollo';
import { Coin, CoinTemplateProps } from 'templates';
import { coinMapper } from 'utils/mapper/coin';
import { tradeMapper } from 'utils/mapper/trades';

export default function CoinById(props: CoinTemplateProps) {
  return <Coin {...props} />;
}

const client = initializeApolloClient();

const criptoKeys = {
  bitcoin: ['BTCUSDT', 'BTCBRL'],
  ethereum: ['ETHUSDT'],
  cardano: ['ADAUSDT'],
  others: ['BTCUSDT', 'BTCBRL', 'ADAUSDT', 'ETHUSDT'],
};

const fetchCoins = async (sort?: string) => {
  const { data } = await client.query<QueryCoins, QueryCoinsVariables>({
    query: QUERY_COINS,
    variables: {
      limit: 10,
      sort,
    },
  });

  return data.coins;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const coins = await fetchCoins();

  const paths = coins.map((coin) => ({
    params: {
      id: coin.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query<QueryCoinById, QueryCoinByIdVariables>({
    query: QUERY_COIN_BY_ID,
    variables: {
      id: Number(params?.id),
    },
  });

  const [coin] = coinMapper(data.coins);

  const trades = await Promise.all(
    criptoKeys[coin.type].map(async (key) => {
      const { data } = await client.query<
        QueryTradesByType,
        QueryTradesByTypeVariables
      >({
        query: QUERY_TRADES_BY_TYPE,
        variables: {
          type: key,
        },
      });

      return data.trades;
    }),
  );

  const reducedTrades = trades.reduce((acc: TradesChartData[], trade) => {
    const tradeItem = {
      label: trade[0].type,
      data: tradeMapper(trade),
    };

    return [...acc, tradeItem];
  }, []);

  const tradeGroups = reducedTrades.reduce((acc: Groups, trade) => {
    const currencyPrefix = trade.label.slice(
      3,
      trade.label.length,
    ) as GroupKeys;

    acc = {
      ...acc,
      [currencyPrefix]: [...(acc[currencyPrefix] ?? []), trade],
    };

    return acc;
  }, {} as Groups);

  const fetchedCoinsByViewed = await fetchCoins('viewed');
  const mostViewedNews = coinMapper(fetchedCoinsByViewed).sort(
    (prevCoin, nextCoin) => Number(nextCoin?.viewed) - Number(prevCoin?.viewed),
  );

  const { data: cotations } = await client.query<QueryCotations>({
    query: QUERY_COTATIONS,
  });

  return {
    props: {
      ...coin,
      mostViewed: mostViewedNews,
      cotations: cotations.cotations,
      trades: tradeGroups,
    },
  };
};
