import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/render';
import { Section, SectionProps } from './Section';

const props: SectionProps = {
  title: 'bitcoin',
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

describe('<Section />', () => {
  it('should render the component successfully', () => {
    renderWithTheme(<Section {...props} />);

    expect(screen.getByText(/bitcoin/i));
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });
});
