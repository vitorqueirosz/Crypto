import { Base } from 'templates/Base/Base';
import { CoinDetails, CoinDetailsProps, CotationProps } from 'components';
import { CoinProps } from 'types/coin';

type CoinTemplateProps = CoinDetailsProps & {
  mostViewed: CoinProps[];
  cotations: CotationProps[];
};

export const Coin = ({ mostViewed, cotations, ...coin }: CoinTemplateProps) => {
  return (
    <Base mostViewed={mostViewed} cotations={cotations}>
      <CoinDetails {...coin} />
    </Base>
  );
};
