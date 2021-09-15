import { CoinProps } from 'types/coin';
import { Coin, Logo } from 'components';
import { Slider } from 'components';
import { ArrowBackIos as PrevArrow } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as NextArrow } from '@styled-icons/material-outlined/ArrowForwardIos';

import * as S from './Header.styles';
import { Settings } from 'react-slick';

export type HeaderProps = {
  items: CoinProps[];
  title?: string;
};

const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [],
};

export const Header = ({ title = 'Mais lidas', items }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Logo />
      <S.Content>
        <span>{title}</span>
        <S.CoinList>
          <Slider settings={settings}>
            {items.map((item) => (
              <Coin key={item.id} size="small" {...item} />
            ))}
          </Slider>
        </S.CoinList>
      </S.Content>
    </S.Wrapper>
  );
};
