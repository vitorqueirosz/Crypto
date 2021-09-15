import { CoinProps } from 'types/coin';
import { useMemo } from 'react';
import { setTimeDifference } from 'utils/time/setTimeDifference';

import * as S from './Coin.styles';

export const Coin = ({
  title,
  image,
  size = 'normal',
  publisher,
  publishedAt,
}: CoinProps) => {
  const formatedPublishedAt = useMemo(
    () => setTimeDifference(publishedAt),
    [publishedAt],
  );

  return (
    <S.Wrapper size={size} title={title}>
      <S.Image loading="lazy" src={image} alt={title} />
      <S.Aside>
        <S.Title>{title}</S.Title>
        <S.Details>
          {publisher} - {formatedPublishedAt}
        </S.Details>
      </S.Aside>
    </S.Wrapper>
  );
};
