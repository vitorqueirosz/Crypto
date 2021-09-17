import { CoinProps } from 'types/coin';
import { ChartTrades } from 'components';
import * as S from './CoinDetails.styles';
import { TradesChartData } from 'components/Chart/Chart';

export type CoinDetailsProps = CoinProps & {
  large_description: string;
  short_description: string;
  trades: TradesChartData[];
};

export const CoinDetails = ({
  title,
  publishedAt,
  image,
  publisher,
  short_description,
  large_description,
  trades,
}: CoinDetailsProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>

      <S.Divisor>
        <S.CoinBody>
          <S.Banner src={image} alt={title} />
          <small>
            {publisher} - {publishedAt}
          </small>

          <p>{short_description}</p>
          <p>{large_description}</p>
        </S.CoinBody>

        <S.Aside>
          <ChartTrades trades={trades} />
        </S.Aside>
      </S.Divisor>
    </S.Wrapper>
  );
};
