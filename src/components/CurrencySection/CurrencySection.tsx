import { Cotation } from 'components/Cotation/Cotation';
import * as S from './CurrencySection.styles';

export const CurrencySection = () => {
  return (
    <S.Wrapper>
      <Cotation name="BTC / USDT" currentValue="45.163" percent="7.5%" />
    </S.Wrapper>
  );
};
