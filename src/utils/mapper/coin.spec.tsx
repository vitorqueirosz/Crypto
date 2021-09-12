import { coinMapper } from './coin';

const items = [
  {
    id: '1',
    short_description: 'MoneyTimes - 06h atras',
    large_description: 'large_description',
    publisher: 'MoneyTimes',
    publishedAt: '2021-08-15',
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
        short_description: 'MoneyTimes - 06h atras',
        large_description: 'large_description',
        publisher: 'MoneyTimes',
        publishedAt: '2021-08-15',
        title:
          '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
        image: `${process.env.URL}image`,
      },
    ]);
  });
});
