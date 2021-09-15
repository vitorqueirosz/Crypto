import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/render';
import { Cotation, CotationProps } from './Cotation';
import * as S from './Cotation.styles';

const props: CotationProps = {
  name: 'BTCUSDT',
  currentValue: '40000',
  percent: '5',
};

describe('<Cotation />', () => {
  it('should render the component successfully', () => {
    renderWithTheme(<Cotation {...props} />);

    expect(screen.getByText(/5/)).toHaveStyle({
      color: theme.colors.black,
      background: theme.colors.white,
    });

    expect(screen.getByText('$ 40000')).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render the right currency prefix', () => {
    renderWithTheme(<Cotation {...props} name="BTCBRL" />);

    expect(screen.getByText('R$ 40000')).toBeInTheDocument();
  });

  it('should render a different color when has lower price', () => {
    const { container } = renderWithTheme(<Cotation {...props} isPriceLower />);

    expect(container.firstChild).toHaveStyleRule(
      'background',
      theme.colors.red,
      {
        modifier: `${S.Percent}`,
      },
    );

    expect(container.firstChild).toHaveStyleRule('color', theme.colors.red, {
      modifier: `${S.CurrentValue}`,
    });
  });

  it('should render a different color when has higher price', () => {
    const { container } = renderWithTheme(
      <Cotation {...props} isPriceHigher />,
    );

    expect(container.firstChild).toHaveStyleRule('background', '#31d322', {
      modifier: `${S.Percent}`,
    });

    expect(container.firstChild).toHaveStyleRule('color', '#31d322', {
      modifier: `${S.CurrentValue}`,
    });
  });
});
