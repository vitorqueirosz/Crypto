import { TRADE_TYPES } from 'constants/enums';
import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';

type Trade = {
  id: string;
  type: TRADE_TYPES;
  price: string;
  quantity: string;
  time: string;
};

export type TradesChartData = {
  label: TRADE_TYPES;
  data: Trade[];
};

type ChartTradesProps = {
  trades: TradesChartData[];
};

export const ChartTrades = ({ trades }: ChartTradesProps) => {
  const primaryAxis = useMemo(
    (): AxisOptions<Trade> => ({
      getValue: (datum) => datum.time,
      elementType: 'line',
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
    <Chart
      options={{
        data: trades,
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
};
