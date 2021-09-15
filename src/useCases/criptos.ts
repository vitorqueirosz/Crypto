import { CotationProps } from 'components';
import { CRIPTO_EVENTS } from 'constants/enums';
import { useSocketListener } from 'hooks';
import { useCallback } from 'react';
import { useState } from 'react';
import { cotationMapper } from 'utils/mapper/cotation';

type CotationSymbol = 'BTCUSDT' | 'ETHUSDT' | 'ADAUSDT' | 'BTCBRL';

export type CotationWSData = {
  s: CotationSymbol; // symbol
  p: string; // price change
  q: string; // quantity
  T: number; // time
  P: string; // percent
  h: string; // high price
  c: string; // last price
};

export const useCriptoCotations = () => {
  const [cotations, setCotations] = useState<CotationProps[]>([]);

  const onCotationChange = useCallback((data: CotationWSData[]) => {
    const mappedCotations = cotationMapper(data);

    setCotations((prevState) => {
      return prevState.length
        ? prevState.reduce((acc: CotationProps[], cotation, index) => {
            const isLastIndex = prevState.length - 1;

            if (!mappedCotations[index]) {
              acc.push({ ...cotation });
              return acc;
            }

            const prevPercent = Number(cotation.percent);
            const currentPercent = Number(mappedCotations[index].percent);
            const isPercentEqual = currentPercent === prevPercent;

            const isLastPriceLower = cotation.isPriceLower && isPercentEqual;
            const isLastPriceHigher = cotation.isPriceHigher && isPercentEqual;

            acc.push({
              ...mappedCotations[index],
              isPriceLower: currentPercent < prevPercent || isLastPriceLower,
              isPriceHigher: currentPercent > prevPercent || isLastPriceHigher,
            });

            if (isLastIndex && prevState.length < mappedCotations.length) {
              acc.push(mappedCotations[index + 1]);
            }

            return acc;
          }, [])
        : mappedCotations;
    });
  }, []);

  useSocketListener(CRIPTO_EVENTS.COTATIONS, onCotationChange);

  return cotations;
};
