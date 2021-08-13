import { Container, Header, CurrencySection, CoinSection } from 'components';

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

export const Main = () => {
  return (
    <Container>
      <S.Wrapper>
        <Header items={items} />
        <CurrencySection />
        <CoinSection
          bitcoin={items}
          ethereum={items}
          cardano={items}
          others={items}
        />
      </S.Wrapper>
    </Container>
  );
};
