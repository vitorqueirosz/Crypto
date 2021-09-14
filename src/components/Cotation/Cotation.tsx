import * as S from './Cotation.styles';

type CotationProps = {
  name: string;
  currentValue: string;
  percent: string;
};

export const Cotation = ({ name, currentValue, percent }: CotationProps) => {
  return (
    <S.Wrapper>
      <span>{name}</span>
      <S.Divisor>
        <S.CurrentValue>{currentValue}</S.CurrentValue>
        <S.Percent>{percent}</S.Percent>
      </S.Divisor>
    </S.Wrapper>
  );
};
