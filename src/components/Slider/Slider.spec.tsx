import { screen } from '@testing-library/react';
import 'match-media-mock';
import { Settings } from 'react-slick';
import { renderWithTheme } from 'utils/tests/render';
import { Slider } from './Slider';

const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};

describe('<Slider />', () => {
  it('should render the active slides correctly', () => {
    const { container } = renderWithTheme(
      <Slider settings={settings}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Slider>,
    );

    expect(screen.getByText('1').parentElement?.parentElement).toHaveClass(
      'slick-slide',
    );
    expect(container.querySelectorAll('.slick-active')).toHaveLength(3);
  });
});
