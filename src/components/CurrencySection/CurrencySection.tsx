import { Cotation, CotationProps } from 'components/Cotation/Cotation';
import { useMemo } from 'react';
import { useCriptoCotations } from 'useCases';
import * as S from './CurrencySection.styles';

type CurrencySectionProps = {
  cotations: CotationProps[];
};

export const CurrencySection = ({ cotations }: CurrencySectionProps) => {
  const latestCotations = useCriptoCotations();

  const matchedCotations: CotationProps[] = useMemo(() => {
    return latestCotations.length ? latestCotations : cotations;
  }, [cotations, latestCotations]);

  return (
    <S.Wrapper>
      {matchedCotations.map((cotation) => (
        <Cotation key={cotation.name} {...cotation} />
      ))}
    </S.Wrapper>
  );
};
