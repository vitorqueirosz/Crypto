import { screen } from '@testing-library/react';
import { CoinProps } from 'types/coin';
import { renderWithTheme } from 'utils/tests/render';
import { Coin } from './Coin';

const props: CoinProps = {
  id: '1',
  publisher: 'MoneyTimes',
  publishedAt: '2021-05-05',
  title: '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
  image: 'https://i.pravatar.cc/300',
};

describe('<Coin />', () => {
  it('should render the component successfully', () => {
    renderWithTheme(<Coin {...props} />);

    expect(screen.getByRole('img', { name: props.title }));
    expect(screen.getByText(props.title));
  });
});
