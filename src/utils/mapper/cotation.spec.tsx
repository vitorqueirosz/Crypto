import { CotationWSData } from 'useCases';
import { cotationMapper } from './cotation';

const cotation: CotationWSData = {
  P: '1.0',
  T: 2000,
  c: '1.0',
  h: '3.0',
  p: '1.0',
  q: '',
  s: 'ETHUSDT',
};

describe('cotationMapper()', () => {
  it('should return the data as expected', () => {
    const mappedCotations = cotationMapper([cotation]);

    expect(mappedCotations).toStrictEqual([
      {
        name: 'ETHUSDT',
        currentValue: '1',
        percent: '1.00',
      },
    ]);
  });
});
