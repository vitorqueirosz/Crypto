import { CoinProps } from 'types/coin';
import { ChartTrades } from 'components';
import * as S from './CoinDetails.styles';
import { TradesChartData } from 'components/Chart/Chart';

export type GroupKeys = 'USDT' | 'BRL';

export type Groups = {
  [keys in GroupKeys]: TradesChartData[];
};

export type CoinDetailsProps = CoinProps & {
  large_description: string;
  short_description: string;
  trades: Groups;
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
          {Object.entries(trades).map(([key, value]) => (
            <ChartTrades
              key={key}
              trades={value}
              currencyPrefix={key as GroupKeys}
            />
          ))}
        </S.Aside>
      </S.Divisor>
    </S.Wrapper>
  );
};
