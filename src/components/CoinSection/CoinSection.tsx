import { CoinProps, Coins } from 'constants/types/coin';
import * as S from './CoinSection.styles';
import { Section } from './Section/Section';

type CoinSectionProps = {
  [key in Coins]: CoinProps[];
};

export const CoinSection = (props: CoinSectionProps) => {
  return (
    <S.Wrapper>
      <S.Title>CRIPTOS</S.Title>

      <S.Content>
        {Object.entries(props).map(
          ([key, value]) =>
            !!value.length && <Section key={key} title={key} items={value} />,
        )}
      </S.Content>
    </S.Wrapper>
  );
};
