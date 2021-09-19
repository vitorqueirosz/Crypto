import * as S from './Cotation.styles';

export type CotationProps = {
  name: string;
  currentValue: string;
  percent: string;
  isPriceLower?: boolean;
  isPriceHigher?: boolean;
};

export const Cotation = ({
  name,
  currentValue,
  percent,
  isPriceLower,
  isPriceHigher,
}: CotationProps) => {
  return (
    <S.Wrapper isPriceLower={isPriceLower} isPriceHigher={isPriceHigher}>
      <span>{name}</span>
      <S.Divisor>
        <S.CurrentValue>{currentValue}</S.CurrentValue>
        <S.Percent>{percent}%</S.Percent>
      </S.Divisor>
    </S.Wrapper>
  );
};
