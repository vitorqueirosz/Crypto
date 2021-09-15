import * as S from './Cotation.styles';

export type CotationProps = {
  name: string;
  currentValue: string;
  percent: string;
};

const prefixCurrency: Record<string, string> = {
  USDT: '$',
  BRL: 'R$',
};

export const Cotation = ({ name, currentValue, percent }: CotationProps) => {
  const matchPrefix = prefixCurrency[name.slice(3, name.length)];

  return (
    <S.Wrapper>
      <span>{name}</span>
      <S.Divisor>
        <S.CurrentValue>
          {matchPrefix} {currentValue}
        </S.CurrentValue>
        <S.Percent>{percent}%</S.Percent>
      </S.Divisor>
    </S.Wrapper>
  );
};
