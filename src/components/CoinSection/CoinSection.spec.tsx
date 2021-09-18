import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { CoinSection, CoinSectionProps } from './CoinSection';

const props: CoinSectionProps = {
  bitcoin: [
    {
      id: '1',
      publisher: 'MoneyTimes',
      publishedAt: '2021-05-05',
      title:
        '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
      image: 'https://i.pravatar.cc/300',
    },
  ],
  cardano: [
    {
      id: '1',
      publisher: 'MoneyTimes',
      publishedAt: '2021-05-05',
      title:
        '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
      image: 'https://i.pravatar.cc/300',
    },
  ],
  ethereum: [],
  others: [],
};

describe('<CoinSection />', () => {
  it('should render the sections correctly', () => {
    renderWithTheme(<CoinSection {...props} />);

    expect(
      screen.getByRole('heading', { name: /criptos/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole('article')).toHaveLength(2);
    expect(
      screen.getByRole('heading', { name: /bitcoin/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /cardano/i }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: /ethereum/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: /others/i }),
    ).not.toBeInTheDocument();
  });
});
