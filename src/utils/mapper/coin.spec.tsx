import { coinMapper } from './coin';

const items = [
  {
    id: '1',
    details: 'MoneyTimes - 06h atras',
    title:
      '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
    image: {
      url: 'image',
    },
  },
];

describe('coinMapper()', () => {
  it('should return the data as expected', () => {
    const mappedItems = coinMapper(items);

    expect(mappedItems).toStrictEqual([
      {
        id: '1',
        details: 'MoneyTimes - 06h atras',
        title:
          '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
        image: `${process.env.URL}image`,
      },
    ]);
  });
});
