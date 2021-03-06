import { CoinProps } from 'types/coin';
import { Coin } from 'components';
import * as S from './Section.styles';
import { Slider } from 'components';
import { Settings } from 'react-slick';
import { ArrowBackIos as PrevArrow } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as NextArrow } from '@styled-icons/material-outlined/ArrowForwardIos';

export type SectionProps = {
  title: string;
  items: CoinProps[];
};

const coinsTitle: Record<string, string> = {
  bitcoin: 'BITCOIN',
  ethereum: 'ETHEREUM',
  cardano: 'CARDANO (ADA)',
  others: 'OTHERS',
};

const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.2,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.4,
        arrows: false,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.8,
        arrows: false,
        draggable: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1.1,
        arrows: false,
        draggable: true,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        arrows: false,
        draggable: true,
      },
    },
  ],
};

export const Section = ({ title, items }: SectionProps) => {
  return (
    <S.Section>
      <S.SubTitle>{coinsTitle[title]}</S.SubTitle>
      <S.Content>
        <Slider settings={settings}>
          {items.map((item) => (
            <Coin key={item.id} {...item} />
          ))}
        </Slider>
      </S.Content>
    </S.Section>
  );
};
