import { CoinProps } from 'constants/types/coin';
import * as S from './Coin.styles';

export const Coin = ({ title, details, image, size = 'normal' }: CoinProps) => {
  return (
    <S.Wrapper size={size} title={title}>
      <S.Image loading="lazy" src={image} alt={title} />
      <S.Aside>
        <S.Title>{title}</S.Title>
        <S.Details>{details}</S.Details>
      </S.Aside>
    </S.Wrapper>
  );
};
