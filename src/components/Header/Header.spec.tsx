import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { Header, HeaderProps } from './Header';

const props: HeaderProps = {
  items: [
    {
      id: '1',
      details: 'MoneyTimes - 06h atras',
      title:
        '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
      image: 'https://i.pravatar.cc/300',
    },
  ],
};

describe('<Header />', () => {
  it('should render the component successfully', () => {
    renderWithTheme(<Header {...props} />);

    expect(screen.getByRole('img', { name: /logo/i }));
    expect(screen.getByText(props.items[0].title)).toBeInTheDocument();
  });
});
