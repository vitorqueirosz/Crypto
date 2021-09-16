import { GetStaticProps } from 'next';
import { Coin, CoinTemplateProps } from 'templates';

export default function CoinById(props: CoinTemplateProps) {
  return <Coin {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
