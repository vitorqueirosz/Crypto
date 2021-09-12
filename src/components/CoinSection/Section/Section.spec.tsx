import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { Section, SectionProps } from './Section';

const props: SectionProps = {
  title: 'bitcoin',
  items: [
    {
      id: '1',
      publisher: 'MoneyTimes',
      publishedAt: '2021-05-05',
      title:
        '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
      image: 'https://i.pravatar.cc/300',
    },
  ],
};

describe('<Section />', () => {
  it('should render the component successfully', () => {
    renderWithTheme(<Section {...props} />);

    expect(screen.getByText(/bitcoin/i));
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });

  it('should render the slides correctly', () => {
    const items = Array.from({ length: 5 }, (_, index) => ({
      id: String(index + 1),
      publisher: 'MoneyTimes - 06h atras',
      publishedAt: '2021-05-06',
      title:
        '“Precisamos estar no mercado de criptomoedas”, diz CEO da Mastercard',
      image: 'https://i.pravatar.cc/300',
    }));

    const { container } = renderWithTheme(
      <Section title="ethereum" items={items} />,
    );

    expect(screen.getByText(/ethereum/i));
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });
});
