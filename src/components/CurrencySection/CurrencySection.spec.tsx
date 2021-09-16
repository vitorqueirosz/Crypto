import { screen } from '@testing-library/react';
import { CotationProps } from 'components/Cotation/Cotation';
import * as useCases from 'useCases/criptos';
import { renderWithTheme } from 'utils/tests/render';
import { CurrencySection } from './CurrencySection';

const props: CotationProps[] = [
  {
    name: 'ETHUSDT',
    currentValue: '1.0',
    percent: '1.5%',
  },
];

describe('<CurrencySection />', () => {
  it('should render the cotations correctly', () => {
    renderWithTheme(<CurrencySection cotations={props} />);

    expect(screen.getAllByRole('article')).toHaveLength(1);
  });

  it('should render the cotations came from useCase', () => {
    const cotations: CotationProps[] = [
      {
        name: 'ETHUSDT',
        currentValue: '1.0',
        percent: '1.5%',
      },
      {
        name: 'BTCUSDT',
        currentValue: '2.0',
        percent: '2.5%',
      },
    ];

    const useCriptoCotationsMocked = jest.spyOn(useCases, 'useCriptoCotations');
    useCriptoCotationsMocked.mockReturnValue(cotations);

    renderWithTheme(<CurrencySection cotations={props} />);

    expect(screen.getAllByRole('article')).toHaveLength(2);
  });
});
