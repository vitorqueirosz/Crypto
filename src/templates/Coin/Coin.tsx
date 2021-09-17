import { Base } from 'templates/Base/Base';
import {
  CoinDetails,
  CoinDetailsProps,
  CotationProps,
  TradesChartData,
} from 'components';
import { CoinProps } from 'types/coin';

export type CoinTemplateProps = CoinDetailsProps & {
  mostViewed: CoinProps[];
  cotations: CotationProps[];
  trades: TradesChartData[];
};

export const Coin = ({
  mostViewed = [],
  cotations = [],
  ...coin
}: CoinTemplateProps) => {
  return (
    <Base mostViewed={mostViewed} cotations={cotations}>
      <CoinDetails {...coin} />
    </Base>
  );
};
