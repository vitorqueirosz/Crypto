import { CoinProps } from 'types/coin';
import * as S from './CoinDetails.styles';

export type CoinDetailsProps = CoinProps & {
  large_description: string;
  short_description: string;
};

export const CoinDetails = ({
  title,
  publishedAt,
  image,
  publisher,
  short_description,
  large_description,
}: CoinDetailsProps) => {
  return (
    <S.Wrapper>
      <S.Title>CRIPTOS</S.Title>

      <S.Divisor>
        <S.CoinBody>
          <S.Banner src={image} alt={title} />
          <span>
            {publisher} - {publishedAt}
          </span>

          <p>{short_description}</p>
          <p>{large_description}</p>
        </S.CoinBody>

        <S.Aside />
      </S.Divisor>
    </S.Wrapper>
  );
};
