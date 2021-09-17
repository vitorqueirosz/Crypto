import {
  QueryCoinById,
  QueryCoinByIdVariables,
} from 'graphql/generated/QueryCoinById';
import { QueryCoins, QueryCoinsVariables } from 'graphql/generated/QueryCoins';
import { QUERY_COINS, QUERY_COIN_BY_ID } from 'graphql/queries/coins';
import { GetStaticPaths, GetStaticProps } from 'next';
import { initializeApolloClient } from 'services/apollo';
import { Coin, CoinTemplateProps } from 'templates';
import { coinMapper } from 'utils/mapper/coin';

export default function CoinById(props: CoinTemplateProps) {
  return <Coin {...props} />;
}

const client = initializeApolloClient();

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<QueryCoins, QueryCoinsVariables>({
    query: QUERY_COINS,
    variables: {
      limit: 10,
    },
  });

  const paths = data.coins.map((coin) => ({
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

  return {
    props: {
      ...coin,
      mostViewed: [],
      cotations: [],
    },
  };
};
