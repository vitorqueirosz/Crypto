import { CoinProps } from 'constants/types/coin';
import * as S from './Coin.styles';

export const Coin = ({ title, details, image }: CoinProps) => {
  return (
    <S.Wrapper>
      <S.Image loading="lazy" src={image} alt={title} />
      <S.Aside>
        <p>{title}</p>
        <small>{details}</small>
      </S.Aside>
    </S.Wrapper>
  );
};
