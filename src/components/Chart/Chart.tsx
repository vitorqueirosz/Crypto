import { GroupKeys } from 'components/CoinDetails/CoinDetails';
import { ENUM_TRADE_TYPE } from 'graphql/generated/globalTypes';
import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';

import * as S from './Chart.styles';

export type Trade = {
  id: string;
  type: ENUM_TRADE_TYPE;
  price: string;
  quantity: string;
  time: string;
};

export type TradesChartData = {
  label: ENUM_TRADE_TYPE;
  data: Trade[];
};

type ChartTradesProps = {
  trades: TradesChartData[];
  currencyPrefix: GroupKeys;
};

// TODO remove after test

// const mock = [
//   {
//     label: 'BTCUSDT',
//     data: [
//       {
//         id: '276',
//         price: 47651.48,
//         quantity: '0.07083000',
//         time: new Date('2021-09-15'),
//         type: 'BTCUSDT',
//       },
//       {
//         id: '276',
//         price: 46651.48,
//         quantity: '0.07083000',
//         time: new Date('2021-09-16'),
//         type: 'BTCUSDT',
//       },
//     ],
//   },
//   {
//     label: 'ADAUSDT',
//     data: [
//       {
//         id: '171',
//         price: '3000.24',
//         quantity: '0.00598000',
//         time: new Date('2021-09-15'),
//         type: 'ADAUSDT',
//       },
//       {
//         id: '276',
//         price: '3100.24',
//         quantity: '0.07083000',
//         time: new Date('2021-09-16'),
//         type: 'ADAUSDT',
//       },
//     ],
//   },
// ];

export const ChartTrades = ({ trades, currencyPrefix }: ChartTradesProps) => {
  const primaryAxis = useMemo(
    (): AxisOptions<Trade> => ({
      getValue: (datum) => datum.time,
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<Trade>[] => [
      {
        getValue: (datum) => datum.price,
        elementType: 'line',
      },
    ],
    [],
  );

  return (
    <S.Wrapper>
      <S.Title>Histórico de Trades - {currencyPrefix} </S.Title>

      <S.ChartWrapper>
        <Chart
          options={{
            data: trades,
            primaryAxis,
            secondaryAxes,
            initialHeight: 300,
          }}
        />
      </S.ChartWrapper>
    </S.Wrapper>
  );
};
