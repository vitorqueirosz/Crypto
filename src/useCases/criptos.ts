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
};

export const useCriptoCotations = () => {
  const [cotations, setCotations] = useState<CotationProps[]>([]);

  const onCotationChange = useCallback((data: CotationWSData[]) => {
    setCotations(cotationMapper(data));
  }, []);

  useSocketListener(CRIPTO_EVENTS.COTATIONS, onCotationChange);

  return cotations;
};
