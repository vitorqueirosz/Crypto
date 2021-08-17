import { QUERY_COINS } from 'graphql/queries/coins';
import { GetStaticProps } from 'next';
import { initializeApolloClient } from 'services/apollo';
import { Main, MainProps } from 'templates';

export default function Home(props: MainProps) {
  return <Main {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApolloClient();

  const { data } = await client.query({
    query: QUERY_COINS,
    variables: {
      limit: 5,
    },
  });

  const { bitcoins, ethereums, cardanos, others } = data;

  return {
    props: {
      bitcoin: bitcoins,
      ethereum: ethereums,
      cardano: cardanos,
      others: others ?? [],
    },
  };
};
