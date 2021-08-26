import ReactSlider, { Settings } from 'react-slick';
import * as S from './Slider.styles';

export type SliderProps = {
  settings: Settings;
  children: React.ReactNode;
};

export const Slider = ({ settings, children }: SliderProps) => {
  return (
    <S.Wrapper>
      <ReactSlider {...settings}>{children}</ReactSlider>
    </S.Wrapper>
  );
};
