import 'match-media-mock';
import { screen } from '@testing-library/react';
import { ENUM_TRADE_TYPE } from 'graphql/generated/globalTypes';
import { renderWithTheme } from 'utils/tests/render';

import { CoinDetails, CoinDetailsProps } from './CoinDetails';

const props: CoinDetailsProps = {
  title: 'BITCOIN',
  publishedAt: '2021-09-16T16:59:00.000Z',
  publisher: 'Por Criptonizando',
  image: 'https://',
  short_description: 'short_description',
  large_description: 'large_description',
  trades: {
    USDT: [
      {
        label: ENUM_TRADE_TYPE.BTCUSDT,
        data: [
          {
            id: '276',
            price: '47651.48',
            quantity: '0.07083000',
            time: new Date('2021-09-15').toString(),
            type: ENUM_TRADE_TYPE.BTCUSDT,
          },
        ],
      },
    ],
    BRL: [
      {
        label: ENUM_TRADE_TYPE.BTCBRL,
        data: [
          {
            id: '100',
            price: '47651.48',
            quantity: '0.07083000',
            time: new Date('2021-09-16').toString(),
            type: ENUM_TRADE_TYPE.BTCBRL,
          },
        ],
      },
    ],
  },
};

describe('<CoinDetails />', () => {
  const mockResizeObserver = jest.fn();
  mockResizeObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.ResizeObserver = mockResizeObserver;

  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;

  it('should render the props correctly', () => {
    renderWithTheme(<CoinDetails {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image,
    );

    expect(screen.getAllByLabelText('chart')).toHaveLength(2);
  });
});
