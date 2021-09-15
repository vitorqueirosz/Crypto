import { Cotation } from 'components/Cotation/Cotation';
import { useCriptoCotations } from 'useCases';
import * as S from './CurrencySection.styles';

export const CurrencySection = () => {
  const cotations = useCriptoCotations();

  return (
    <S.Wrapper>
      {cotations.map((cotation) => (
        <Cotation
          key={cotation.name}
          name={cotation.name}
          currentValue={cotation.currentValue}
          percent={cotation.percent}
        />
      ))}
    </S.Wrapper>
  );
};
