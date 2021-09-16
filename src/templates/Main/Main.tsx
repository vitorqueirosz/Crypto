import { CoinSection, CotationProps } from 'components';
import { Base } from 'templates/Base/Base';
import { CoinProps, Coins } from 'types/coin';

import * as S from './Main.styles';

type MainCoinProps = { [key in Coins]: CoinProps[] };

export type MainProps = MainCoinProps & {
  mostViewed: CoinProps[];
  cotations: CotationProps[];
};

export const Main = ({
  bitcoin,
  ethereum,
  cardano,
  others,
  mostViewed,
  cotations,
}: MainProps) => {
  return (
    <Base mostViewed={mostViewed} cotations={cotations}>
      <S.Wrapper>
        <CoinSection
          bitcoin={bitcoin}
          ethereum={ethereum}
          cardano={cardano}
          others={others}
        />
      </S.Wrapper>
    </Base>
  );
};
