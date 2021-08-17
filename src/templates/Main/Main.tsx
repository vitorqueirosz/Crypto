import { Container, Header, CurrencySection, CoinSection } from 'components';
import { CoinProps, Coins } from 'constants/types/coin';

import * as S from './Main.styles';

const items = [
  {
    id: '1',
    details: 'MoneyTimes - 06h atras',
    title:
      '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard Mastercard',
    image: 'https://i.pravatar.cc/300',
  },
];

export type MainProps = {
  [key in Coins]: CoinProps[];
};

export const Main = ({ bitcoin, ethereum, cardano, others }: MainProps) => {
  return (
    <Container>
      <S.Wrapper>
        <Header items={items} />
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
