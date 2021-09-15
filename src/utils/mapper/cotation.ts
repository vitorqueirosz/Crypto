import { CotationProps } from 'components';
import { CotationWSData } from 'useCases';

export const cotationMapper = (cotations: CotationWSData[]) => {
  const mappedCotations: CotationProps[] = cotations.map((cotation) => ({
    name: cotation.s,
    currentValue: Number(cotation.c).toString(),
    percent: Number(cotation.P).toFixed(2),
  }));

  return mappedCotations;
};
