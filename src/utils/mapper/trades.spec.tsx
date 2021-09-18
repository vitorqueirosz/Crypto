import { Trade } from 'components';
import { ENUM_TRADE_TYPE } from 'graphql/generated/globalTypes';
import { tradeMapper } from './trades';

const cotation: Trade[] = [
  {
    id: '1',
    price: '4000.00',
    time: '2021-09-17 15:15',
    quantity: '5000',
    type: ENUM_TRADE_TYPE.BTCBRL,
  },
];

describe('cotationMapper()', () => {
  it('should return the data as expected', () => {
    const mappedCotations = tradeMapper(cotation);

    expect(mappedCotations).toStrictEqual([
      {
        id: '1',
        price: '4000',
        time: '2021-09-17T15:15',
        quantity: '5000',
        type: ENUM_TRADE_TYPE.BTCBRL,
      },
    ]);
  });
});
