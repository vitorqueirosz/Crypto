import {
  Container,
  Header,
  CurrencySection,
  CoinSection,
  Navbar,
  MediaMatch,
} from 'components';
import { CoinProps, Coins } from 'types/coin';

import * as S from './Main.styles';

type MainCoinProps = { [key in Coins]: CoinProps[] };

export type MainProps = MainCoinProps & {
  mostViewed: CoinProps[];
};

export const Main = ({
  bitcoin,
  ethereum,
  cardano,
  others,
  mostViewed,
}: MainProps) => {
  return (
    <Container>
      <S.Wrapper>
        <MediaMatch lessThan="large">
          <Navbar />
        </MediaMatch>
        <Header items={mostViewed} />
        <CurrencySection />
        <CoinSection
          bitcoin={bitcoin}
          ethereum={ethereum}
          cardano={cardano}
          others={others}
        />
      </S.Wrapper>
    </Container>
  );
};
