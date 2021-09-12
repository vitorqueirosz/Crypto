import { CoinProps } from 'constants/types/coin';
import * as S from './Coin.styles';

export const Coin = ({
  title,
  image,
  size = 'normal',
  publisher,
  publishedAt,
}: CoinProps) => {
  return (
    <S.Wrapper size={size} title={title}>
      <S.Image loading="lazy" src={image} alt={title} />
      <S.Aside>
        <S.Title>{title}</S.Title>
        <S.Details>
          {publisher} - {publishedAt}
        </S.Details>
      </S.Aside>
    </S.Wrapper>
  );
};
