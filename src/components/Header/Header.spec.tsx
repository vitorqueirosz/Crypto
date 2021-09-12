import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { Header, HeaderProps } from './Header';

const props: HeaderProps = {
  items: [
    {
      id: '1',
      publisher: 'MoneyTimes - 06h atras',
      publishedAt: '2021-05-05',
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

  it('should render active items correctly', () => {
    const items = Array.from({ length: 4 }, () => props.items[0]);
    const { container } = renderWithTheme(<Header items={items} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(3);
  });
});
