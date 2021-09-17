import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';

type MyDatum = { date: Date; stars: number };

const data = [
  {
    label: 'Price',
    data: [
      {
        date: new Date('2021-09-14'),
        stars: 44,
      },
      {
        date: new Date('2021-09-15'),
        stars: 33,
      },
      {
        date: new Date('2021-09-16'),
        stars: 55,
      },
    ],
  },
];

export const ChartCoin = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.date,
      elementType: 'line',
      max: 50,
      styles: {
        background: '#fff',
      },
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.stars,
        elementType: 'line',
        styles: {
          background: '#fff',
        },
      },
    ],
    [],
  );

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
};
