import { screen, render } from '@testing-library/react';
import { Coin, CoinProps } from './Coin';

const props: CoinProps = {
  id: '1',
  details: 'MoneyTimes - 06h atras',
  title: '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
  image: 'https://i.pravatar.cc/300',
};

describe('<Coin />', () => {
  it('should render the component successfully', () => {
    render(<Coin {...props} />);

    expect(screen.getByRole('img', { name: props.title }));
    expect(screen.getByText(props.title));
  });
});
